import { Heading, Text } from './design-system/primitives.jsx';
import { BackArrowIcon, ChevronIcon } from './design-system/icons.jsx';
import { SiteFooter } from './components/site-chrome.jsx';
import styles from './PolicyDocumentPage.module.css';

const DEFAULT_RELATED_LINKS = [
  ['Trust & Security', '/trust'],
  ['Terms of Service', '/terms'],
  ['Cookie Policy', '/cookies'],
];

function PolicyTable({ block, sectionHeading }) {
  return (
    <div className={styles.tableScroller} tabIndex={0} role="region" aria-label={`${sectionHeading} table`}>
      <table>
        <thead>
          <tr>
            {block.columns.map((column) => <th scope="col" key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row.join('|')}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cellIndex}-${cell}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PolicyContentBlock({ block, blockIndex, sectionHeading }) {
  if (block.type === 'paragraph') {
    return <Text key={`paragraph-${blockIndex}`}>{block.text}</Text>;
  }

  if (block.type === 'list') {
    return (
      <ul key={`list-${blockIndex}`}>
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === 'table') {
    return <PolicyTable block={block} sectionHeading={sectionHeading} key={`table-${blockIndex}`} />;
  }

  return null;
}

function sectionId(heading, index) {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return slug || `section-${index + 1}`;
}

export default function PolicyDocumentPage({ document }) {
  const sections = document.sections.map((section, index) => ({
    ...section,
    id: sectionId(section.heading, index),
  }));
  const relatedLinks = document.relatedLinks || DEFAULT_RELATED_LINKS;
  const effectiveDate = document.effectiveDate || 'On publication';
  const introduction = Array.isArray(document.introduction)
    ? document.introduction
    : document.introduction
      ? [document.introduction]
      : [];
  const documentDetails = [
    ['Description', document.description],
    ['Version', document.version || '1.0'],
    ['Effective', effectiveDate],
    ['Last reviewed', document.lastReviewed || 'On publication'],
    ['Next review', document.nextReview || '12 months after publication'],
    ['Owner', document.owner],
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero} aria-labelledby="policy-title">
          <a className={styles.backLink} href="/trust">
            <BackArrowIcon />
            <span>Back to Trust &amp; Security</span>
          </a>

          <Heading as="h1" size="display" id="policy-title" className={styles.title}>
            {document.title}
          </Heading>

          <div className={styles.meta} aria-label="Document status">
            <span>Version {document.version || '1.0'}</span>
            <span className={styles.metaDivider} aria-hidden="true" />
            <span>Effective {effectiveDate}</span>
          </div>
        </header>

        <div className={styles.divider} />

        <div className={styles.articleLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <h2>In this document</h2>
              <nav aria-label={`${document.title} contents`}>
                <ol>
                  <li><a href="#document-details">Document details</a></li>
                  {sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
                  ))}
                  <li><a href="#related-documents">Related documents</a></li>
                </ol>
              </nav>
            </div>
          </aside>

          <article className={styles.article}>
            <details className={styles.details} id="document-details">
              <summary className={styles.detailsSummary}>
                <Heading as="h2" size="card">Document details</Heading>
                <ChevronIcon className={styles.detailsChevron} />
              </summary>
              <dl>
                {documentDetails.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
                <div>
                  <dt>Contact</dt>
                  <dd><a href={`mailto:${document.contact}`}>{document.contact}</a></dd>
                </div>
              </dl>
            </details>

            {introduction.length ? (
              <div className={styles.introduction}>
                {introduction.map((paragraph) => (
                  <Text as="p" className={styles.lead} key={paragraph}>{paragraph}</Text>
                ))}
              </div>
            ) : null}

            {sections.map((section) => (
              <section className={styles.articleSection} id={section.id} key={section.id}>
                <Heading as="h2" size="card">{section.heading}</Heading>
                <div className={styles.sectionContent}>
                  {section.content?.map((block, blockIndex) => (
                    <PolicyContentBlock
                      block={block}
                      blockIndex={blockIndex}
                      sectionHeading={section.heading}
                      key={`${block.type}-${blockIndex}`}
                    />
                  ))}
                  {section.links?.map(([label, href]) => (
                    <a className={styles.inlineLink} href={href} key={label}>{label}</a>
                  ))}
                </div>
              </section>
            ))}

            <section className={styles.articleSection} id="related-documents">
              <Heading as="h2" size="card">Related documents</Heading>
              <ul className={styles.relatedLinks}>
                {relatedLinks.map(([label, href]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
