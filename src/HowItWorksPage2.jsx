import SampleReportButton from './SampleReportModal.jsx';
import {
  HowAssessmentOverview,
  HowClosingSection,
  HowEvidenceStory,
  HowPreparationDisclaimer,
  HowThreadStages,
} from './components/how-it-works-sections.jsx';
import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { FaqSection, HeroSection, IntroSection, SectionLabel } from './components/website-sections.jsx';
import { Heading, Stack, Surface, Text } from './design-system/primitives.jsx';

const FAQ_ITEMS = [
  ['Do I need to have a clinician before I start?', 'No. You can begin while you are looking. Check that your chosen clinician is happy to receive the report before sharing it.'],
  ['How long does preparation take?', 'You can get started in minutes and complete your part at your own pace. Teacher input and collecting existing reports may take longer.'],
  ['Will my clinician need anything else?', 'They may. Your clinician decides what further information or assessment is needed.'],
  ['Is Threadline an ADHD assessment?', "No. Threadline manages preparation. Your child's clinician completes the assessment and diagnosis."],
];

const NAV_LINKS = [
  ['How it works', '/how-it-works-2'],
  ['Pricing', '/pricing'],
  ['For clinicians', '/#clinicians'],
  ['Resources', '/#resources'],
  ['Contact us', '/#contact'],
];

function ThreadReportOverview() {
  return (
    <Surface
      as="section"
      tone="soft"
      className="how-v2b-thread-report"
      aria-labelledby="thread-report-title-2"
    >
      <Stack gap={8} className="how-v2b-thread-report-copy">
        <Stack gap={4}>
          <SectionLabel>YOUR CHILD&apos;S THREAD</SectionLabel>
          <Heading as="h2" size="section" id="thread-report-title-2">One report. Every source clear.</Heading>
          <Text>See evidence across settings, what is complete and what may still need follow-up.</Text>
          <Text>Questionnaires, reports and perspectives collected for this assessment become part of your child’s Thread, an organised record designed to grow with them.</Text>
          <Text>When a new clinician, school or specialist needs context, you are not starting from scratch.</Text>
        </Stack>
        <SampleReportButton />
      </Stack>
      <HowThreadStages
        variant="report"
        ariaLabel="Your child’s Thread can support assessment, clinicians, school and future care"
      />
    </Surface>
  );
}

export default function HowItWorksPage2() {
  return (
    <div className="page-shell home-v2 how-v2 how-v2b">
      <SiteNavigation links={NAV_LINKS} activeHref="/how-it-works-2" />
      <main>
        <HeroSection
          title={<>From unsure where<br />to start to<br /></>}
          highlight="Assessment Ready."
          description="Threadline brings together evidence from home, school and existing care, then prepares a structured Assessment Evidence Report for your child's clinician."
          rearImage="/sample-report-page-7.png"
          rearAlt="Child, family and developmental history from an Assessment Evidence Report"
          frontImage="/sample-report-page-8.png"
          frontAlt="Daily functioning from an Assessment Evidence Report"
        />
        <IntroSection
          id="how-it-works-2"
          variant="how"
          label="HOW IT WORKS"
          title="Three steps to Assessment Ready."
        />
        <div className="how-v2-flow">
          <HowAssessmentOverview />
          <HowEvidenceStory titleId="evidence-title-2" />
          <ThreadReportOverview />
          <HowPreparationDisclaimer id="resources-2" />
        </div>
        <div className="how-v2-faq-spacer" aria-hidden="true" />
        <FaqSection items={FAQ_ITEMS} titleId="home-faq-title-2" />
        <HowClosingSection titleId="how-final-title-2" />
      </main>
      <SiteFooter />
    </div>
  );
}
