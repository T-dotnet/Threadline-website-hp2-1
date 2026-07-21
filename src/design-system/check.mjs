import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const designSystemDirectory = fileURLToPath(new URL('.', import.meta.url));
const sourceDirectory = fileURLToPath(new URL('..', import.meta.url));
const projectDirectory = fileURLToPath(new URL('../..', import.meta.url));
const appDirectory = join(projectDirectory, 'app');
const tokenFile = join(designSystemDirectory, 'tokens.css');
const tokenValueFile = join(designSystemDirectory, 'token-values.js');
const componentFile = join(designSystemDirectory, 'components.jsx');
const primitiveFile = join(designSystemDirectory, 'primitives.jsx');
const iconFile = join(designSystemDirectory, 'icons.jsx');
const modalFile = join(designSystemDirectory, 'modal.jsx');
const complexModalFile = join(sourceDirectory, 'SampleReportModal.jsx');
const legacyStyleFile = join(sourceDirectory, 'styles.css');
const styleGuideFile = join(appDirectory, 'style-guide', 'page.jsx');
const sourceDirectories = [sourceDirectory, appDirectory];
const allowedInlineStyleFiles = new Set([primitiveFile, styleGuideFile]);
const allowedRuntimeTokens = new Set(['--ds-callout-color', '--ds-grid-columns']);
const sourceExtensions = new Set(['.css', '.js', '.jsx', '.mjs']);
const legacyHardcodeBudgets = Object.freeze({
  layout: 1045,
  fontSize: 154,
  radius: 77,
  transition: 0,
});
const violations = [];
let legacyHardcodeSummary;

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(path) : [path];
  }));
  return nestedFiles.flat();
}

function report(path, message) {
  violations.push(`${relative(projectDirectory, path)}: ${message}`);
}

function countDeclarationLines(source, pattern) {
  return source.split('\n').filter((line) => pattern.test(line) && !line.trim().startsWith('--')).length;
}

function getHardcodeCounts(source) {
  return {
    layout: countDeclarationLines(source, /\b(?:padding|margin|gap|inset|top|right|bottom|left|width|height|min-width|max-width|min-height|max-height)\s*:[^;]*(?:px|rem)/),
    fontSize: countDeclarationLines(source, /font-size\s*:[^;]*(?:px|rem)/),
    radius: countDeclarationLines(source, /border-radius\s*:[^;]*(?:px|rem)/),
    transition: countDeclarationLines(source, /transition\s*:[^;]*(?:ms|\.\d+s|\d+s)/),
  };
}

const sourceFiles = (await Promise.all(sourceDirectories.map(collectFiles))).flat();

for (const path of sourceFiles) {
  if (!sourceExtensions.has(extname(path))) continue;

  const source = await readFile(path, 'utf8');
  const isStylesheet = extname(path) === '.css';

  if (path !== tokenFile && path !== tokenValueFile && /#[\da-f]{3,8}\b|\brgba?\(|\bhsla?\(/i.test(source)) {
    report(path, 'raw colour literal; add a named token in tokens.css');
  }

  if (/style\s*=\s*\{\{/.test(source) && !allowedInlineStyleFiles.has(path)) {
    report(path, 'inline JSX style; use a class or design-system primitive');
  }

  if (path === primitiveFile) {
    const inlineStyles = source.match(/style\s*=\s*\{\{[^}]+\}\}/g) ?? [];
    if (inlineStyles.some((style) => !style.includes("'--ds-grid-columns'"))) {
      report(path, 'primitive inline styles may only bridge the grid CSS variable');
    }
  }

  if (path === styleGuideFile) {
    const inlineStyles = source.match(/style\s*=\s*\{\{[^}]+\}\}/g) ?? [];
    const allowedPreviewVariables = ['--swatch', '--space-width', '--shape-radius'];
    if (inlineStyles.some((style) => !allowedPreviewVariables.some((variable) => style.includes(variable)))) {
      report(path, 'style-guide inline styles may only bridge documented preview variables');
    }
  }

  if (/\.(?:jsx|js)$/.test(path) && path !== componentFile && /<(?:button|input|select|textarea)\b/.test(source)) {
    report(path, 'raw interactive control; use a shared design-system component');
  }

  if (/\.(?:jsx|js)$/.test(path) && path !== iconFile && /<svg\b/.test(source)) {
    report(path, 'inline SVG icon; centralize it in design-system/icons.jsx');
  }

  if (path.endsWith('.jsx') && path !== modalFile && path !== complexModalFile && /\b(?:createPortal|useAccessibleModal)\b/.test(source)) {
    report(path, 'custom modal infrastructure; use Modal or ModalFrame');
  }

  if (isStylesheet) {
    const pseudoListMarkers = Array.from(source.matchAll(/([^{}]*li::before)\s*\{([^}]*)\}/gs));
    if (pseudoListMarkers.some(([, selector, declarations]) => (
      /\bcontent\s*:/.test(declarations) && !selector.includes('.ds-check-list')
    ))) {
      report(path, 'page-specific pseudo-element list marker; use CheckList or native list semantics');
    }
  }

  if (isStylesheet && path !== tokenFile && path !== legacyStyleFile) {
    if (/font-size\s*:[^;]*(?:px|rem)/.test(source)) {
      report(path, 'raw font-size; use a typography token');
    }
    if (/border-radius\s*:[^;]*(?:px|rem)/.test(source)) {
      report(path, 'raw radius; use a radius token');
    }
    if (/transition\s*:[^;]*(?:ms|\.\d+s|\d+s)/.test(source)) {
      report(path, 'raw transition duration; use motion tokens');
    }
  }

  if (path === legacyStyleFile) {
    legacyHardcodeSummary = getHardcodeCounts(source);
    for (const [category, count] of Object.entries(legacyHardcodeSummary)) {
      if (count > legacyHardcodeBudgets[category]) {
        report(path, `${category} hardcodes increased from ${legacyHardcodeBudgets[category]} to ${count}; use tokens or lower the ratchet baseline`);
      }
    }
  }

  if (path !== tokenFile) {
    for (const match of source.matchAll(/(--ds-[\w-]+)\s*:/g)) {
      if (!allowedRuntimeTokens.has(match[1])) {
        report(path, `${match[1]} is defined outside tokens.css`);
      }
    }
  }
}

if (violations.length > 0) {
  console.error(`Design-system audit failed:\n- ${violations.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log('Design-system audit passed.');
  if (legacyHardcodeSummary) {
    console.log(`Legacy styles ratchet: ${JSON.stringify(legacyHardcodeSummary)}.`);
  }
}
