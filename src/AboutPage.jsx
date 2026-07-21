import Image from 'next/image';
import { Heading, Stack, Surface, Text } from './design-system/primitives.jsx';
import { SiteCta, SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import styles from './AboutPage.module.css';

const ABOUT_POINTS = [
  {
    title: 'We believe there is a better way.',
    content: (
      <ul>
        <li>Fragmented information</li>
        <li>Scattered reports</li>
        <li>Repeated stories</li>
      </ul>
    ),
  },
  {
    title: 'Bring the evidence together. Keep clinical judgement central.',
    content: (
      <Stack gap={2}>
        <Text tone="muted">Threadline helps families prepare a structured Assessment Package and Assessment Evidence Report.</Text>
        <Text tone="muted">We support clinical judgement. We do not replace it.</Text>
      </Stack>
    ),
  },
  {
    title: 'Designed with reference to established Australian guidance.',
    content: (
      <Text tone="muted">Our preparation flow references the Australian Evidence-Based Clinical Practice Guideline for ADHD.</Text>
    ),
  },
  {
    title: 'Every part of the story, connected.',
    content: <Text tone="muted">Every report, questionnaire, assessment and review helps tell the story of a child. We call that their Thread.</Text>,
  },
  {
    title: 'What guides us.',
    content: (
      <ul>
        <li>Families first</li>
        <li>Evidence before opinion</li>
        <li>Parents stay in control</li>
        <li>Every child understood</li>
      </ul>
    ),
  },
];

function AboutHero() {
  return (
    <section className="hero" aria-labelledby="about-title">
      <div className="hero-grid">
        <div className={`hero-copy ${styles.heroCopy}`}>
          <h1 id="about-title">
            Every child <span className="hero-highlight">understood.</span>
          </h1>
          <p className={`hero-supporting-copy ${styles.heroSupportingCopy}`}>
            Today we&apos;re focused on ADHD assessment preparation for Australian families. Over time, our vision is to build tools that support understanding and care throughout a child&apos;s neurodevelopmental journey.
          </p>
        </div>
        <div className={`hero-media ${styles.heroMedia}`}>
          <Image
            src="/about-hero.jpg"
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 32px), 715px"
            alt="Layered blue, green and cream watercolour threads"
          />
        </div>
      </div>
    </section>
  );
}

function BeliefsSection() {
  return (
    <section className={styles.beliefs} aria-label="How Threadline approaches assessment preparation">
      <div className={styles.beliefList}>
        {ABOUT_POINTS.map(({ title, content }, index) => (
          <article className={styles.belief} key={`${title}-${index}`}>
            <Heading as="h2" size="section">{title}</Heading>
            <div className={styles.beliefDetail}>{content}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className={styles.closing} aria-labelledby="about-closing-title">
      <Surface tone="soft" className={styles.closingCard}>
        <Heading as="h2" size="section" id="about-closing-title">
          We are not trying to change how ADHD is diagnosed. We are helping families and clinicians make the process work better.
        </Heading>
        <SiteCta className={styles.closingCta} label="Get started" />
      </Surface>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className={`page-shell ${styles.page}`}>
      <SiteNavigation />
      <main>
        <AboutHero />
        <BeliefsSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
