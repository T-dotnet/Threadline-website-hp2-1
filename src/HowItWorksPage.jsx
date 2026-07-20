import Image from 'next/image';
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

const FAQ_ITEMS = [
  ['Do I need to have a clinician before I start?', 'No. You can begin while you are looking. Check that your chosen clinician is happy to receive the report before sharing it.'],
  ['How long does preparation take?', 'You can get started in minutes and complete your part at your own pace. Teacher input and collecting existing reports may take longer.'],
  ['Will my clinician need anything else?', 'They may. Your clinician decides what further information or assessment is needed.'],
  ['Is Threadline an ADHD assessment?', "No. Threadline manages preparation. Your child's clinician completes the assessment and diagnosis."],
];

function YourThreadSection() {
  return (
    <section className="how-v2-thread" id="your-thread" aria-labelledby="your-thread-title">
      <header className="how-v2-thread-intro">
        <div className="home-v2-section-heading">
          <SectionLabel>YOUR THREAD</SectionLabel>
          <h2 id="your-thread-title">Build it once. Let every step build on it.</h2>
        </div>
      </header>
      <div className="how-v2-thread-overview">
        <div className="how-v2-thread-journey" aria-hidden="true">
          <HowThreadStages showLine />
        </div>
        <article className="how-v2-thread-copy">
          <p className="how-v2-pullout">One record. Owned by your family. Shared when you choose.</p>
          <p>Questionnaires, reports and perspectives collected for this assessment become part of your child’s Thread, an organised record designed to grow with them.</p>
          <p>When a new clinician, school or specialist needs context, you are not starting from scratch.</p>
        </article>
      </div>
    </section>
  );
}

function ReportOverview() {
  return (
    <section className="how-v2-report" aria-labelledby="report-overview-title">
      <div className="how-v2-report-copy">
        <div>
          <SectionLabel>YOUR CHILD&apos;S THREAD</SectionLabel>
          <h2 id="report-overview-title">One report.<br />Every source clear.</h2>
          <p>See evidence across settings, what is complete and what may still need follow-up.</p>
        </div>
        <SampleReportButton />
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

export default function HowItWorksPage() {
  return (
    <div className="page-shell home-v2 how-v2">
      <SiteNavigation activeHref="/how-it-works" />
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
        <YourThreadSection />
        <IntroSection
          id="how-it-works"
          variant="how"
          label="HOW IT WORKS"
          title="Three steps to Assessment Ready."
        />
        <div className="how-v2-flow">
          <HowAssessmentOverview />
          <HowEvidenceStory />
          <ReportOverview />
          <HowPreparationDisclaimer />
        </div>
        <div className="how-v2-faq-spacer" aria-hidden="true" />
        <FaqSection items={FAQ_ITEMS} />
        <HowClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
