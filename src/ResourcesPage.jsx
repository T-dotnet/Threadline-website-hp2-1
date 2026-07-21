'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Button, Input, TextLink } from './design-system/components.jsx';
import { Eyebrow, Heading, Text } from './design-system/primitives.jsx';
import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { SiteAction } from './components/site-actions.jsx';
import { RESOURCE_ARTICLES } from './content/resource-articles.js';
import styles from './ResourcesPage.module.css';

const CATEGORIES = [
  'All guides',
  'Just Getting Started',
  'Preparing for Assessment',
  'Understanding Reports',
  'After Diagnosis',
  'For Clinicians',
];

function ArrowIcon() {
  return <Image src="/resources/chevron-green.svg" width={14} height={14} alt="" aria-hidden="true" />;
}

export default function ResourcesPage() {
  const [category, setCategory] = useState('All guides');
  const [query, setQuery] = useState('');

  const visibleArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return RESOURCE_ARTICLES.filter((article) => {
      const matchesCategory = category === 'All guides' || article.category === category;
      const searchableCopy = `${article.title} ${article.category} ${article.description}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableCopy.includes(normalizedQuery));
    });
  }, [category, query]);

  function showGuides({ category: nextCategory = 'All guides', search = '' } = {}) {
    setCategory(nextCategory);
    setQuery(search);
    document.getElementById('resource-guides')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className={`page-shell ${styles.page}`} id="top">
      <SiteNavigation activeHref="/resources" />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="resources-title">
          <div className={styles.heroCopy}>
            <Heading as="h1" size="display" id="resources-title">Trusted information for every stage of your ADHD journey.</Heading>
            <Text className={styles.heroDescription} tone="muted">
              Practical guides, explainers and checklists for families and clinicians.
            </Text>
          </div>

          <div className={styles.featureArtwork}>
            <article className={styles.featureCard} id="featured-guide">
              <div className={styles.featureCopy}>
                <Eyebrow className={styles.resourceEyebrow}>Featured guide</Eyebrow>
                <Heading as="h2" className={styles.featureTitle}>Starting the upcoming school term with confidence.</Heading>
                <Text tone="muted">
                  Strategies to manage ADHD-linked morning fatigue and prepare sensory transitions before your child steps into the new classroom.
                </Text>
                <SiteAction className={styles.featureCta} appearance="secondary" href="/resources/classroom-accommodations">
                  Read article
                </SiteAction>
              </div>
            </article>
            <div className={styles.featureMedia}>
              <Image
                src="/resources/classroom-support.jpg"
                alt="Classroom support strategies for children with ADHD"
                fill
                priority
                sizes="(max-width: 900px) calc(100vw - 32px), 50vw"
              />
            </div>
          </div>
        </section>

        <section className={styles.section} id="resource-guides" aria-label="Resource guides">
          <div className={styles.controls}>
            <div className={styles.searchField}>
              <Image src="/resources/search-muted.svg" width={18} height={18} alt="" aria-hidden="true" />
              <Input
                className={styles.searchInput}
                type="search"
                aria-label="Search guides"
                placeholder="Search guides…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            <div className={styles.filters} aria-label="Filter resource guides">
              {CATEGORIES.map((item) => {
                const isActive = item === category;
                return (
                  <Button
                    className={`${styles.filterButton} ${isActive ? styles.filterActive : ''}`}
                    variant={isActive ? 'quiet' : 'secondary'}
                    aria-pressed={isActive}
                    key={item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          </div>

          <Eyebrow className={`${styles.resourceEyebrow} ${styles.resultCount}`} aria-live="polite">
            {visibleArticles.length} {visibleArticles.length === 1 ? 'article' : 'articles'} found
          </Eyebrow>

          {visibleArticles.length > 0 ? (
            <div className={styles.articleGrid}>
              {visibleArticles.map((article) => (
                <article className={styles.articleCard} id={article.slug} key={article.slug}>
                  <div className={styles.articleMedia}>
                    <Image
                      src={article.image}
                      fill
                      sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 900px) 50vw, 33vw"
                      alt={article.title}
                    />
                  </div>
                  <div className={styles.articleContent}>
                    <Heading as="h3" size="card">{article.title}</Heading>
                    <div className={styles.articleMeta}>
                      <Eyebrow as="span" className={styles.resourceEyebrow}>{article.category}</Eyebrow>
                      <Text as="span" tone="muted">{article.readTime}</Text>
                    </div>
                    <Text tone="muted">{article.description}</Text>
                    <TextLink className={styles.actionLink} href={`/resources/${article.slug}`} aria-label={`Read ${article.title}`}>
                      Read guide <ArrowIcon />
                    </TextLink>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <Heading as="h3" size="card">No guides match that search yet.</Heading>
              <Text tone="muted">Try a broader term or return to all guides.</Text>
              <Button variant="secondary" onClick={() => showGuides()}>
                Show all guides
              </Button>
            </div>
          )}
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
