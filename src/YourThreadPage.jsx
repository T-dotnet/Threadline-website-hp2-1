import Image from 'next/image';
import { SiteCta, SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { SectionLabel } from './components/website-sections.jsx';
import { Heading, Stack, Surface, Text, VisuallyHidden } from './design-system/primitives.jsx';
import styles from './YourThreadPage.module.css';

const WHY_ITEMS = [
  {
    label: 'New clinician',
    background: '/thread-circle-primary.jpg',
    icon: '/thread-clinician.svg',
  },
  {
    label: 'New school',
    background: '/thread-circle-school.jpg',
    icon: '/thread-school.svg',
  },
  {
    label: 'New specialist',
    background: '/thread-circle-care.jpg',
    icon: '/thread-future-care.svg',
  },
  {
    label: 'Same story',
    background: '/thread-circle-primary.jpg',
    icon: '/thread-clipboard.svg',
  },
];

const THREAD_CONTENTS = [
  'Questionnaires and evidence collected by Threadline',
  'Existing reports and school information',
  'Your Assessment Package and Assessment Evidence Report',
  'Future assessments, reviews and care plans you choose to add',
];

const REPORT_STACKS = {
  hero: {
    rear: {
      src: '/index-3419-hero-report.png',
      width: 1414,
      height: 1402,
      alt: "The child's own perspective page from an Assessment Evidence Report",
    },
    front: {
      src: '/index-3419-hero-profile.png',
      width: 1226,
      height: 1498,
      alt: 'Clinical Assessment Profile cover',
    },
  },
  process: {
    rear: {
      src: '/index-3419-process-page-6.png',
      width: 1400,
      height: 1138,
      alt: 'Cross-source view from an Assessment Evidence Report',
    },
    front: {
      src: '/index-3419-hero-report.png',
      width: 1414,
      height: 1402,
      alt: "The child's own perspective page from an Assessment Evidence Report",
    },
  },
};

function ReportStack({ variant = 'hero', decorative = false, priority = false }) {
  const artwork = REPORT_STACKS[variant];
  const variantClass = variant === 'process' ? styles.processReportStack : styles.heroReportStack;

  return (
    <div className={`${styles.reportStack} ${variantClass}`} aria-hidden={decorative || undefined}>
      <div className={`${styles.reportSheet} ${styles.reportSheetRear}`}>
        <Image
          src={artwork.rear.src}
          width={artwork.rear.width}
          height={artwork.rear.height}
          priority={priority}
          sizes="(max-width: 620px) 82vw, (max-width: 900px) 94vw, 670px"
          alt={decorative ? '' : artwork.rear.alt}
        />
      </div>
      <div className={`${styles.reportSheet} ${styles.reportSheetFront}`}>
        <Image
          src={artwork.front.src}
          width={artwork.front.width}
          height={artwork.front.height}
          priority={priority}
          sizes="(max-width: 620px) 82vw, (max-width: 900px) 96vw, 688px"
          alt={decorative ? '' : artwork.front.alt}
        />
      </div>
    </div>
  );
}

function ThreadHero() {
  return (
    <section className={styles.hero} aria-labelledby="your-thread-title">
      <div className={styles.heroGrid}>
        <Surface className={styles.heroCopy}>
          <Stack gap={8}>
            <SectionLabel>YOUR THREAD</SectionLabel>
            <Heading as="h1" size="display" className={styles.heroTitle} id="your-thread-title">
              One record.<br />Built with you.<br /><span>Growing with your child.</span>
            </Heading>
          </Stack>
          <Stack gap={6} className={`${styles.heroDescription} hero-supporting-copy`}>
            <Text size="xl" tone="muted">
              Every report. Every questionnaire. Every assessment. Every review. Every milestone.
            </Text>
            <Text size="xl" tone="muted">
              Together they become your child&apos;s Thread, so you are never starting from scratch again.
            </Text>
          </Stack>
        </Surface>

        <div className={styles.heroMedia}>
          <Image
            className={styles.heroArtwork}
            src="/index-3419-hero-bg.jpg"
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 32px), 715px"
            alt="Soft blue, green and cream watercolour threads"
          />
          <ReportStack priority />
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className={styles.why} aria-labelledby="why-title">
      <div className={styles.sectionHeading}>
        <SectionLabel>WHY IT EXISTS</SectionLabel>
        <Heading as="h2" size="display" id="why-title">
          Tell it once.<br />Let every step build on it.
        </Heading>
      </div>
      <div className={styles.whyTiles}>
        {WHY_ITEMS.map(({ label, background, icon }) => (
          <Surface as="article" className={styles.whyTile} key={label}>
            <div className={styles.whyTileArtwork}>
              <Image src={background} fill sizes="(max-width: 620px) 50vw, 350px" alt="" />
              <Image className={styles.whyTileIcon} src={icon} width={120} height={120} alt="" aria-hidden="true" />
            </div>
            <Heading as="h3" size="card">{label}</Heading>
          </Surface>
        ))}
      </div>
    </section>
  );
}

function ContentsSection() {
  return (
    <section className={styles.contents} aria-labelledby="contents-title">
      <Surface className={styles.contentsPanel}>
        <div className={styles.contentsCopy}>
          <SectionLabel>WHAT GOES INTO YOUR THREAD</SectionLabel>
          <VisuallyHidden as="h2" id="contents-title">
            What goes into your Thread
          </VisuallyHidden>
          <ul className={styles.contentsList}>
            {THREAD_CONTENTS.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className={styles.contentsArtwork} aria-hidden="true">
          <Image src="/how-thread-watercolour.jpg" fill sizes="(max-width: 900px) 100vw, 500px" alt="" />
        </div>
      </Surface>
    </section>
  );
}

function ControlSection() {
  return (
    <section className={styles.control} aria-labelledby="control-title">
      <Image className={styles.controlArtwork} src="/home-solution-watercolour.jpg" fill sizes="(max-width: 900px) calc(100vw - 32px), 1450px" alt="" />
      <div className={styles.controlInner}>
        <SectionLabel>YOU STAY IN CONTROL</SectionLabel>
        <Heading as="h2" size="display" id="control-title">
          Your family stays at the centre of decisions about the Thread.
        </Heading>
        <Text size="lg" tone="muted">
          You choose when to share it with a clinician, school or specialist.
        </Text>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className={styles.closing} aria-labelledby="closing-title">
      <Surface tone="soft" className={styles.closingCard}>
        <div className={styles.closingCopy}>
          <Heading as="h2" size="display" id="closing-title">
            Start building your child&apos;s Thread today.
          </Heading>
          <SiteCta label="Start assessment preparation" href="/#pricing" />
        </div>
        <div className={styles.closingReports} aria-hidden="true">
          <Image
            className={styles.closingArtwork}
            src="/index-3419-workspace-bg.jpg"
            fill
            sizes="(max-width: 900px) calc(100vw - 32px), 650px"
            alt=""
          />
          <ReportStack variant="process" decorative />
        </div>
      </Surface>
    </section>
  );
}

export default function YourThreadPage() {
  return (
    <div className={`page-shell ${styles.page}`}>
      <SiteNavigation ctaLabel="Start assessment preparation" ctaShortLabel="Start" />
      <main>
        <ThreadHero />
        <WhySection />
        <ContentsSection />
        <ControlSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
