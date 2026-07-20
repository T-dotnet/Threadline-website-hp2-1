import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import ShareThreadlineButton from './ShareThreadlineModal.jsx';
import {
  HowClosingSection,
  HowPreparationDisclaimer,
} from './components/how-it-works-sections.jsx';
import {
  BenefitsSection,
  FaqSection,
  HeroSection,
  ImportantSection,
  IntroSection,
  ProcessSection,
  ReportSection,
  SectionHeading,
} from './components/website-sections.jsx';
import { Stack } from './design-system/primitives.jsx';

const EVIDENCE_CARDS = [
  {
    text: 'Completed, clinically validated questionnaires',
    icon: '/step-information.png',
    shape: 'top-right',
  },
  {
    text: 'Existing clinical reports and school information',
    icon: '/step-checklist.png',
    shape: 'bottom-left',
  },
  {
    text: 'Everything organised in one place',
    icon: '/step-story.svg',
    shape: 'top-right',
  },
];

const REPORT_ITEMS = [
  'Clinical overview and evidence coverage',
  'Standardised questionnaire results',
  'Cross-source views',
  'Developmental history and daily functioning',
  'Child and teacher perspectives',
  'Existing reports and follow-up priorities',
];

const CLINICIAN_FAQ_ITEMS = [
  ['Does Threadline diagnose ADHD?', 'No. Threadline organises assessment evidence.'],
  ['Does the report replace the clinical interview?', 'No. It provides a structured starting point. The clinician decides what to verify, explore or assess further.'],
  ['Which questionnaires are included?', 'They may vary by age and preparation pathway. The sample report shows how results are presented.'],
  ['Can I share Threadline with families?', 'Yes. Share the website or sample report so families can decide if it suits them.'],
  ['Who controls sharing of the report?', 'The family controls when the report is shared.'],
];

export default function CliniciansPage() {
  return (
    <div className="page-shell home-v2">
      <SiteNavigation activeHref="/clinicians" />
      <main>
        <HeroSection
          title="A clearer starting point for"
          highlight="assessment."
          description="Threadline guides families to gather evidence across home, school and existing care, then prepares a source-attributed Assessment Evidence Report."
          ctaLabel="Share Threadline"
          primaryAction={<ShareThreadlineButton />}
        />
        <IntroSection
          id="clinicians"
          variant="how"
          label="DESIGNED FOR CLINICAL JUDGMENT"
          title="Structured preparation, with the clinician in control."
        />
        <Stack gap={12}>
          <BenefitsSection
            benefits={EVIDENCE_CARDS}
            backgroundImage="/index-3419-benefits.jpg"
            ariaLabel="Evidence organised for clinical assessment"
          />
          <ProcessSection
            sideContent={(
              <SectionHeading label="GUIDELINE-INFORMED PREPARATION" titleId="clinician-guideline-title">
                Designed with reference to Australia&apos;s evidence-based ADHD guideline.
              </SectionHeading>
            )}
            ariaLabel="Guideline-informed assessment preparation"
          />
          <ReportSection
            id="clinician-report"
            title="Assessment evidence can arrive fragmented."
            items={REPORT_ITEMS}
            note="Threadline gives families one guided process and clinicians one organised, source-attributed report."
            image="/index-3419-report-page.png"
            imageAlt="Follow-up priorities and evidence gaps in a Threadline Assessment Evidence Report"
            layout="split"
            showSampleReport={false}
          />
          <HowPreparationDisclaimer id="clinician-preparation-note" />
        </Stack>
        <div className="how-v2">
          <div className="how-v2-faq-spacer" aria-hidden="true" />
          <FaqSection
            items={CLINICIAN_FAQ_ITEMS}
            title="Questions clinicians often ask."
            titleId="clinician-faq-title"
          />
          <HowClosingSection
            titleId="clinician-final-title"
            ctaLabel="Share Threadline"
            primaryAction={<ShareThreadlineButton />}
            showSampleReport
          />
        </div>
        <ImportantSection>
          Threadline prepares assessment evidence. It does not diagnose ADHD, replace your child’s clinician or determine whether diagnostic criteria are met. Your child’s clinician remains responsible for clinical assessment, diagnosis and treatment decisions. Clinician fees are charged separately.
        </ImportantSection>
      </main>
      <SiteFooter />
    </div>
  );
}
