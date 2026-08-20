import { Heading, Text } from './design-system/primitives.jsx';
import { BackArrowIcon } from './design-system/icons.jsx';
import { SiteFooter } from './components/site-chrome.jsx';
import styles from './PolicyDocumentPage.module.css';

function sectionId(heading, index) {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return slug || `section-${index + 1}`;
}

export default function ResourceArticlePage({ article }) {
  const backHref = article.backHref || '/resources';
  const backLabel = article.backLabel || 'Back to resources';
  const note = article.note || {
    title: 'A note for families',
    body: 'This guide offers general preparation and support ideas. It does not replace advice from a qualified health or education professional who knows your child.',
  };
  const sections = article.sections.map((section, index) => ({
    ...section,
    id: sectionId(section.heading, index),
  }));

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero} aria-labelledby="article-title">
          <a className={styles.backLink} href={backHref}>
            <BackArrowIcon />
            <span>{backLabel}</span>
          </a>

          <Heading as="h1" size="display" id="article-title" className={styles.title}>
            {article.title}
          </Heading>

          <div className={styles.meta} aria-label="Guide information">
            <span>{article.category}</span>
            <span className={styles.metaDivider} aria-hidden="true" />
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className={styles.divider} />

        <div className={styles.articleLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <h3>In this guide</h3>
              <nav aria-label={`${article.title} contents`}>
                <ol>
                  <li><a href="#overview">Overview</a></li>
                  {sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
                  ))}
                  {note ? <li><a href="#family-note">{note.title}</a></li> : null}
                  <li><a href="#more-resources">More resources</a></li>
                </ol>
              </nav>
            </div>
          </aside>

          <article className={styles.article}>
            <section className={`${styles.introduction} ${styles.guideIntroduction}`} id="overview">
              <Text as="p" className={styles.lead}>{article.description}</Text>
            </section>

            {sections.map((section) => (
              <section className={styles.articleSection} id={section.id} key={section.id}>
                <Heading as="h2" size="card">{section.heading}</Heading>
                <div className={styles.sectionContent}>
                  {section.paragraphs?.map((paragraph) => (
                    <Text key={paragraph}>{paragraph}</Text>
                  ))}
                  {section.links?.map(([label, href]) => (
                    <a className={styles.inlineLink} href={href} key={label}>{label}</a>
                  ))}
                </div>
              </section>
            ))}

            {note ? (
              <section className={styles.articleSection} id="family-note">
                <Heading as="h2" size="card">{note.title}</Heading>
                <div className={styles.sectionContent}>
                  <Text>{note.body}</Text>
                </div>
              </section>
            ) : null}

            <section className={styles.articleSection} id="more-resources">
              <Heading as="h3" size="card">More resources</Heading>
              <ul className={styles.relatedLinks}>
                <li><a href={backHref}>View all resources</a></li>
                <li><a href="/trust">Privacy, security and trust</a></li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
