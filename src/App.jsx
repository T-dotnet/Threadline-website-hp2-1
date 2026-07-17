import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import {
  BenefitsSection,
  FaqSection,
  GuidelineSection,
  HeroSection,
  ImportantSection,
  IntroSection,
  PricingSection,
  ProblemSection,
  ProcessSection,
  ReportSection,
} from './components/website-sections.jsx';

const GUIDELINE_PARAGRAPHS = [
  'Threadline is designed with reference to the Australian Evidence-Based Clinical Practice Guideline for ADHD, developed by the Australasian ADHD Professionals Association.',
  'The guideline is approved by the National Health and Medical Research Council and endorsed by Australia’s leading professional and consumer organisations.',
];

const PROBLEM_ITEMS = [
  'Don’t know where to start',
  'Unsure what information is needed',
  'Chasing reports and questionnaires',
  'Repeating your child’s story',
];

const REPORT_ITEMS = [
  'Standardised parent, teacher and child questionnaires',
  'Developmental and family history',
  'Daily functioning across home and school',
  'Child and teacher perspectives',
  'Existing reports and previous care',
  'What is complete and what may still need follow-up',
];

const PROCESS_STEPS = [
  {
    title: 'Tell us about your child and where you are in the process',
    text: 'A few quick questions to personalise your journey.',
  },
  {
    title: 'Prepare your Assessment Package',
    text: 'Complete clinically validated tests, receive teacher input and upload reports, all in one place.',
  },
  {
    title: 'Become Assessment Ready',
    text: "Your results are organised and sent to your child's clinician, ready for your assessment.",
  },
];

const BENEFITS = [
  { text: 'Know exactly what information is needed', icon: '/step-information.png', shape: 'top-right' },
  { text: 'Reduce delays caused by missing evidence', icon: '/step-checklist.png', shape: 'bottom-left' },
  { text: "Avoid repeating your child's story", icon: '/step-story.png', shape: 'top-right' },
];

const PRICING_ITEMS = [
  'Guided parent information collection',
  'Teacher invitation and responses',
  'Child or young-person perspective',
  'Collection of existing reports and evidence',
  'Structured Assessment Evidence Report',
  'Sharing with your child’s clinician',
  'Support during preparation',
];

const FAQ_ITEMS = [
  ['Is Threadline an ADHD assessment?', 'No. Threadline prepares assessment evidence for your child’s clinician.'],
  ['What will my clinician receive?', 'A structured Assessment Evidence Report that keeps every source visible and organised.'],
  ['How long does preparation take?', 'You can begin in minutes and complete each part at your own pace.'],
  ['Will Threadline prevent additional appointments?', 'Threadline supports preparation, while your clinician determines the appointments needed for assessment.'],
  ['Who controls my child’s information?', 'You do, as part of your child’s Thread.'],
];

export default function App() {
  return (
    <div className="page-shell home-v2">
      <SiteNavigation />
      <main>
        <HeroSection
          description="Preparing for an ADHD assessment can feel overwhelming. Threadline brings the evidence together in a structured Assessment Evidence Report, so your child’s clinician can start with a clearer picture."
        />
        <GuidelineSection
          label="I N F O R M E D  P R E P A R A T I O N"
          title="Designed with reference to Australia’s evidence-based ADHD guideline."
          linkLabel="View the Australian ADHD guideline"
          linkHref="https://adhdguideline.aadpa.com.au/"
          paragraphs={GUIDELINE_PARAGRAPHS}
        />
        <ProblemSection
          title="ADHD assessment shouldn’t feel hard."
          description="Families can be left working out what information is needed, coordinating school input, finding old reports and repeating their child’s story."
          items={PROBLEM_ITEMS}
          backgroundImage="/index-3419-problem.jpg"
        />
        <IntroSection
          id="clinicians"
          variant="output"
          label="T H E  O U T P U T"
          title="More than completed forms. A clearer starting point for your clinician."
        />
        <ReportSection
          title="Your report brings together"
          items={REPORT_ITEMS}
          note="Every source remains visible, giving your child’s clinician an organised view of the evidence collected before the appointment."
          image="/index-3419-report-page.png"
          imageAlt="Sample Assessment Evidence Report"
        />
        <IntroSection
          id="how-it-works"
          variant="how"
          label="H O W  I T  W O R K S"
          title="Three steps to Assessment Ready."
        />
        <ProcessSection steps={PROCESS_STEPS} />
        <IntroSection
          variant="arrive"
          label="A R R I V E  P R E P A R E D"
          title="Know what’s ready before the appointment."
        />
        <BenefitsSection benefits={BENEFITS} backgroundImage="/index-3419-benefits.jpg" />
        <IntroSection
          variant="pricing"
          label="PRICING"
          title="One clear price for your child’s Assessment Evidence Report."
        />
        <PricingSection
          items={PRICING_ITEMS}
          price="$395"
          note="No subscription. No hidden fees or taxes."
          subnote="Clinician appointment fees are separate."
        />
        <FaqSection items={FAQ_ITEMS} />
        <ImportantSection>
          Threadline prepares assessment evidence. It does not diagnose ADHD, replace your child’s clinician or determine whether diagnostic criteria are met. Your child’s clinician remains responsible for clinical assessment, diagnosis and treatment decisions. Clinician fees are charged separately.
        </ImportantSection>
      </main>
      <SiteFooter />
    </div>
  );
}
