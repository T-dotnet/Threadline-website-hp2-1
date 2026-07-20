import Image from 'next/image';
import { SiteCta, SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { SectionLabel } from './components/website-sections.jsx';
import { Heading, Surface, Text } from './design-system/primitives.jsx';
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

function ThreadHero() {
  return (
    <section className={styles.hero} aria-labelledby="your-thread-title">
      <div className={styles.heroGrid}>
        <Surface className={styles.heroCopy}>
          <div className={styles.heroHeading}>
            <SectionLabel>YOUR THREAD</SectionLabel>
            <Heading as="h1" size="display" className={styles.heroTitle} id="your-thread-title">
              One record.<br />Built with you.<br /><span>Growing with your child.</span>
            </Heading>
          </div>
          <div className={styles.heroDescription}>
            <Text size="lg" tone="muted">
              Every report. Every questionnaire. Every assessment. Every review. Every milestone.
            </Text>
            <Text size="lg" tone="muted">
              Together they become your child&apos;s Thread, so you are never starting from scratch again.
            </Text>
          </div>
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
          <div className={`${styles.reportSheet} ${styles.reportSheetRear}`}>
            <Image
              src="/index-3419-hero-report.png"
              width={1414}
              height={1402}
              priority
              alt="The child's own perspective page from an Assessment Evidence Report"
            />
          </div>
          <div className={`${styles.reportSheet} ${styles.reportSheetFront}`}>
            <Image
              src="/index-3419-hero-profile.png"
              width={1226}
              height={1498}
              priority
              alt="Clinical Assessment Profile cover"
            />
          </div>
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
          <Heading as="h2" size="section" className={styles.visuallyHiddenHeading} id="contents-title">
            What goes into your Thread
          </Heading>
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
          <div className={`${styles.closingSheet} ${styles.closingSheetRear}`}>
            <Image src="/index-3419-hero-report.png" width={1414} height={1402} alt="" />
          </div>
          <div className={`${styles.closingSheet} ${styles.closingSheetFront}`}>
            <Image src="/index-3419-hero-profile.png" width={1226} height={1498} alt="" />
          </div>
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
