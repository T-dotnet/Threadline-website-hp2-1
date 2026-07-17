import Image from 'next/image';
import SampleReportButton from './SampleReportModal.jsx';
import { SiteCta, SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { FaqSection, HeroSection, IntroSection } from './components/website-sections.jsx';

const EXPLORE_LINKS = [
  ['Overview', '/'],
  ['How It Works', '/how-it-works'],
  ['Pricing', '/#pricing'],
  ['For Clinician', '/#clinicians'],
  ['Resources', '/#resources'],
  ['About us', '/'],
  ['Contact us', '/#contact'],
];

const PREPARATION_STEPS = [
  {
    title: 'Tell us about your child',
    text: 'Answer guided questions about their history, strengths, concerns and daily life.',
  },
  {
    title: 'Collect the evidence',
    text: 'Complete questionnaires, invite a teacher and add existing reports.',
  },
  {
    title: 'Receive your report',
    text: "Threadline organises the information for your child's clinician.",
  },
];

const EVIDENCE_ITEMS = [
  'Family information and history',
  "Your child's perspective",
  'Child and teacher perspectives',
  'Standardised questionnaires',
  'Daily functioning',
  'Existing reports',
];

const FAQ_ITEMS = [
  ['Is Threadline an ADHD assessment?', 'No. Threadline prepares assessment evidence for your child’s clinician.'],
  ['What will my clinician receive?', 'A structured Assessment Evidence Report that keeps every source visible and organised.'],
  ['How long does preparation take?', 'You can begin in minutes and complete each part at your own pace.'],
  ['Will Threadline prevent additional appointments?', 'Threadline supports preparation, while your clinician determines the appointments needed for assessment.'],
  ['Who controls my child’s information?', 'You do, as part of your child’s Thread.'],
];

function AssessmentOverview() {
  return (
    <section className="home-v2-process how-v2-process" aria-label="Three assessment preparation steps">
      <article className="home-v2-process-steps">
        {PREPARATION_STEPS.map((step, index) => (
          <div className="home-v2-process-step" key={step.title}>
            <span>{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </div>
        ))}
      </article>
      <div className="home-v2-process-preview">
        <Image
          className="home-v2-process-art"
          src="/index-evidence-workspace-v2.png"
          fill
          alt=""
          sizes="(max-width: 900px) calc(100vw - 32px), 920px"
        />
        <div className="how-v2-process-report">
          <Image
            src="/index-3419-process-page-6.png"
            width={1400}
            height={1138}
            alt="Cross-source view from a sample Assessment Evidence Report"
          />
        </div>
      </div>
    </section>
  );
}

function EvidenceStory() {
  return (
    <section className="how-v2-evidence" aria-labelledby="evidence-title">
      <div className="how-v2-evidence-art">
        <Image
          className="how-v2-evidence-watercolour"
          src="/index-evidence-workspace-v2.png"
          fill
          alt=""
          sizes="(max-width: 900px) calc(100vw - 32px), 715px"
        />
        <div className="how-v2-perspective-report">
          <Image
            src="/index-3419-hero-report.png"
            width={1414}
            height={1402}
            alt="The child’s own perspective page from a sample Assessment Evidence Report"
          />
        </div>
      </div>
      <article className="how-v2-evidence-copy">
        <h2 id="evidence-title">Evidence across your child&apos;s life.</h2>
        <div className="how-v2-evidence-details">
          <ul>
            {EVIDENCE_ITEMS.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>Every source remains visible, giving your child’s clinician an organised view of the evidence collected before the appointment.</p>
        </div>
      </article>
    </section>
  );
}

function ReportOverview() {
  return (
    <section className="how-v2-report" aria-labelledby="report-overview-title">
      <div className="how-v2-report-copy">
        <div>
          <p className="home-v2-kicker">YOUR CHILD&apos;S THREAD</p>
          <h2 id="report-overview-title">One report.<br />Every source clear.</h2>
          <p>See evidence across settings, what is complete and what may still need follow-up.</p>
        </div>
        <SampleReportButton className="home-v2-outline-button" />
      </div>
      <div className="how-v2-report-preview">
        <Image
          src="/index-3419-report-page.png"
          width={1414}
          height={1426}
          alt="Follow-up priorities and evidence gaps from a sample Assessment Evidence Report"
        />
      </div>
    </section>
  );
}

function PreparationDisclaimer() {
  return (
    <aside className="how-v2-disclaimer" id="resources">
      <p>Preparation, not diagnosis.</p>
      <p>Threadline prepares the evidence. Your clinician assesses, diagnoses and decides what happens next.</p>
    </aside>
  );
}

function ClosingSection() {
  return (
    <div className="how-v2-closing">
      <section className="how-v2-final" aria-labelledby="how-final-title">
        <h2 id="how-final-title">Prepare with the<br />complete picture.</h2>
        <SiteCta label="Get started" />
      </section>
      <SiteFooter exploreLinks={EXPLORE_LINKS} />
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="page-shell home-v2 how-v2">
      <SiteNavigation />
      <main>
        <HeroSection
          title={<>From unsure where<br />to start to<br /></>}
          highlight="Assessment Ready."
          description="Threadline brings together evidence from home, school and existing care, then prepares a structured Assessment Evidence Report for your child's clinician."
        />
        <IntroSection
          id="how-it-works"
          variant="how"
          label="H O W  I T  W O R K S"
          title="Three steps to Assessment Ready."
        />
        <div className="how-v2-flow">
          <AssessmentOverview />
          <EvidenceStory />
          <ReportOverview />
          <PreparationDisclaimer />
        </div>
        <div className="how-v2-faq-spacer" aria-hidden="true" />
        <FaqSection items={FAQ_ITEMS} />
        <ClosingSection />
      </main>
    </div>
  );
}
