import { TextLink } from './design-system/components.jsx';
import { Eyebrow, Heading, Surface, Text } from './design-system/primitives.jsx';
import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import styles from './ResourceArticlePage.module.css';

export default function ResourceArticlePage({ article }) {
  return (
    <div className={`page-shell ${styles.page}`}>
      <SiteNavigation activeHref="/resources" />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="article-title">
          <Surface as="header" className={styles.heroCopy}>
            <div className={styles.heroInner}>
              <div className={styles.backRow}>
                <TextLink href="/resources">Back to resources</TextLink>
              </div>
              <div className={styles.articleMeta}>
                <Eyebrow className={styles.eyebrow}>{article.category}</Eyebrow>
                <Text as="span" tone="muted">{article.readTime}</Text>
              </div>
              <Heading as="h1" size="display" id="article-title">{article.title}</Heading>
              <Text size="lg" tone="muted" className={styles.introduction}>{article.description}</Text>
            </div>
          </Surface>
        </section>

        <div className={styles.articleLayout}>
          <article className={styles.articleBody}>
            {article.sections.map((section, index) => (
              <section className={styles.articleSection} id={`section-${index + 1}`} key={section.heading}>
                <Heading as="h2" size="card">{section.heading}</Heading>
                <div className={styles.paragraphs}>
                  {section.paragraphs.map((paragraph) => (
                    <Text tone="muted" key={paragraph}>{paragraph}</Text>
                  ))}
                </div>
              </section>
            ))}

            <Surface tone="soft" className={styles.note}>
              <Heading as="h2" size="card">A note for families</Heading>
              <Text tone="muted">
                This guide offers general preparation and support ideas. It does not replace advice from a qualified health or education professional who knows your child.
              </Text>
            </Surface>

            <TextLink className={styles.footerLink} href="/resources">Back to all resources</TextLink>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
