import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const designSystemDirectory = fileURLToPath(new URL('.', import.meta.url));
const sourceDirectory = fileURLToPath(new URL('..', import.meta.url));
const tokenFile = join(designSystemDirectory, 'tokens.css');
const componentFile = join(designSystemDirectory, 'components.jsx');
const primitiveFile = join(designSystemDirectory, 'primitives.jsx');
const allowedRuntimeTokens = new Set(['--ds-callout-color', '--ds-grid-columns']);
const sourceExtensions = new Set(['.css', '.js', '.jsx', '.mjs']);
const violations = [];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(path) : [path];
  }));
  return nestedFiles.flat();
}

function report(path, message) {
  violations.push(`${relative(sourceDirectory, path)}: ${message}`);
}

for (const path of await collectFiles(sourceDirectory)) {
  if (!sourceExtensions.has(extname(path))) continue;

  const source = await readFile(path, 'utf8');

  if (path !== tokenFile && /#[\da-f]{3,8}\b|\brgba?\(|\bhsla?\(/i.test(source)) {
    report(path, 'raw colour literal; add a named token in tokens.css');
  }

  if (/style\s*=\s*\{\{/.test(source) && path !== primitiveFile) {
    report(path, 'inline JSX style; use a class or design-system primitive');
  }

  if (path === primitiveFile) {
    const inlineStyles = source.match(/style\s*=\s*\{\{[^}]+\}\}/g) ?? [];
    if (inlineStyles.some((style) => !style.includes("'--ds-grid-columns'"))) {
      report(path, 'primitive inline styles may only bridge the grid CSS variable');
    }
  }

  if (/\.(?:jsx|js)$/.test(path) && path !== componentFile && /<(?:button|input|select|textarea)\b/.test(source)) {
    report(path, 'raw interactive control; use a shared design-system component');
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
}
