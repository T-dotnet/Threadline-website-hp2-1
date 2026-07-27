import Image from 'next/image';
import SampleReportButton from './SampleReportModal.jsx';
import BetaEmailModal from './BetaEmailModal.jsx';
import {
  HowAssessmentOverview,
  HowClosingSection,
  HowEvidenceStory,
  HowPreparationDisclaimer,
  HowThreadStages,
} from './components/how-it-works-sections.jsx';
import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { HeroSection, IntroSection, ProblemSection, SectionLabel } from './components/website-sections.jsx';
import { TextLink } from './design-system/components.jsx';
import { Eyebrow, Heading, Stack, Surface, Text } from './design-system/primitives.jsx';
import { RESOURCE_ARTICLES } from './content/resource-articles.js';
import styles from './BetaPage.module.css';
import resourceStyles from './ResourcesPage.module.css';

const PROBLEM_ITEMS = [
  'Don’t know where to start',
  'Unsure what information is needed',
  'Chasing reports and questionnaires',
  'Repeating your child’s story',
];

function ThreadReportOverview() {
  return (
    <Surface as="section" tone="soft" className="how-v2b-thread-report" aria-labelledby="beta-thread-report-title">
      <Stack gap={8} className="how-v2b-thread-report-copy">
        <Stack gap={4}>
          <SectionLabel>YOUR CHILD&apos;S THREAD</SectionLabel>
          <Heading as="h2" size="section" id="beta-thread-report-title">One report. Every source clear.</Heading>
          <Text className="how-v2b-thread-report-summary">See evidence across settings, what&apos;s complete and what may need follow-up—all in one clear report. Your child&apos;s Thread keeps this information organised, giving future clinicians, schools and specialists context without your family starting again.</Text>
        </Stack>
        <SampleReportButton />
      </Stack>
      <HowThreadStages variant="report" ariaLabel="Your child’s Thread can support assessment, clinicians, school and future care" />
    </Surface>
  );
}

function ResourceHighlights() {
  return (
    <>
      <IntroSection
        variant="output"
        label="FROM THE RESOURCE LIBRARY"
        title="Helpful reading for your next step."
      />
      <section className={styles.highlights} aria-label="Resource highlights">
        <div className={resourceStyles.articleGrid}>
          {RESOURCE_ARTICLES.slice(0, 3).map((article) => (
            <article className={resourceStyles.articleCard} key={article.slug}>
              <div className={resourceStyles.articleMedia}>
                <Image src={article.image} alt={article.title} fill sizes="(max-width: 760px) calc(100vw - 48px), 33vw" />
              </div>
              <div className={resourceStyles.articleContent}>
                <Heading as="h3" size="card">{article.title}</Heading>
                <div className={resourceStyles.articleMeta}>
                  <Eyebrow as="span" className={resourceStyles.resourceEyebrow}>{article.category}</Eyebrow>
                  <Text as="span" tone="muted">{article.readTime}</Text>
                </div>
                <Text tone="muted">{article.description}</Text>
                <TextLink className={resourceStyles.actionLink} href={`/resources/${article.slug}`} aria-label={`Read ${article.title}`}>
                  Read guide <Image src="/resources/chevron-green.svg" width={14} height={14} alt="" aria-hidden="true" />
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default function BetaPage() {
  return (
    <div className="page-shell home-v2 how-v2 how-v2b">
      <SiteNavigation links={[]} showActions={false} showMobileNav={false} />
      <main>
        <HeroSection
          title={<>From unsure where<br />to start to<br /></>}
          highlight="Assessment Ready."
          description="Threadline brings together evidence from home, school and existing care, then prepares a structured Assessment Evidence Report for your child's clinician."
          primaryAction={<BetaEmailModal>Stay informed</BetaEmailModal>}
          rearImage="/sample-report-page-7.png"
          rearAlt="Child, family and developmental history from an Assessment Evidence Report"
          frontImage="/sample-report-page-8.png"
          frontAlt="Daily functioning from an Assessment Evidence Report"
        />
        <ProblemSection
          className={styles.problemSection}
          title="ADHD assessment shouldn’t feel hard."
          description="Families can be left working out what information is needed, coordinating school input, finding old reports and repeating their child’s story."
          items={PROBLEM_ITEMS}
          backgroundImage="/index-3419-problem.jpg"
        />
        <IntroSection id="how-it-works" variant="how" label="HOW IT WORKS" title="Three steps to Assessment Ready." />
        <div className="how-v2-flow">
          <HowAssessmentOverview />
          <HowEvidenceStory titleId="beta-evidence-title" />
          <ThreadReportOverview />
          <HowPreparationDisclaimer id="beta-resources" />
        </div>
        <ResourceHighlights />
        <HowClosingSection
          titleId="beta-final-title"
          title="Preparing for an ADHD assessment?"
          description="We're inviting a small number of Australian families to participate in the Threadline beta."
          primaryAction={<BetaEmailModal intent="registration">Register your interest</BetaEmailModal>}
        />
      </main>
      <SiteFooter exploreLinks={[]} showActions={false} />
    </div>
  );
}
