import Image from 'next/image';
import SampleReportButton from './SampleReportModal.jsx';
import { SiteCta, SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { DisclosureList, SectionLabel } from './components/website-sections.jsx';
import { exploreLinksWithContact } from './content/site-content.js';

const EXPLORE_LINKS = exploreLinksWithContact('#contact');

const INCLUDED_ITEMS = [
  'Guided parent information collection',
  'Teacher invitation and responses',
  'Child or young-person perspective',
  'Collection of existing reports and evidence',
  'Structured Assessment Evidence Report',
  'Sharing with your child’s clinician',
  'Support during preparation',
];

const FAQ_ITEMS = [
  ['Is Threadline an ADHD assessment?', 'No. Threadline prepares assessment evidence for your child’s clinician. It does not diagnose ADHD or replace a clinician-led assessment.'],
  ['What will my clinician receive?', 'A structured Assessment Evidence Report that keeps parent, teacher, child and existing-care information visible and organised.'],
  ['How long does preparation take?', 'You can begin in minutes and complete each part at your own pace. Timing also depends on when invited contributors respond.'],
  ['Will Threadline prevent additional appointments?', 'Threadline supports preparation, while your clinician determines the appointments and follow-up needed for assessment.'],
  ['Who controls my child’s information?', 'You do. You choose what to add and when the completed evidence is shared with your child’s clinician.'],
];

function PricingHeroArt() {
  return (
    <div className="pricing-page-hero-art" aria-label="Preview of a Threadline Clinical Assessment Profile and the child’s own perspective page">
      <Image
        className="pricing-page-hero-watercolour"
        src="/index-3419-hero-bg.jpg"
        fill
        priority
        alt=""
        sizes="(max-width: 900px) calc(100vw - 32px), 1450px"
      />
      <div className="pricing-page-hero-sheet pricing-page-hero-sheet--profile">
        <Image
          src="/index-3419-hero-profile.png"
          width={1226}
          height={1498}
          priority
          alt="Clinical Assessment Profile cover"
        />
      </div>
      <div className="pricing-page-hero-sheet pricing-page-hero-sheet--perspective">
        <Image
          src="/index-3419-hero-report.png"
          width={1414}
          height={1402}
          priority
          alt="The child’s own perspective page from a sample Assessment Evidence Report"
        />
      </div>
    </div>
  );
}

function PricingActions() {
  return (
    <div className="pricing-page-actions">
      <SiteCta href="/#pricing" label="Get started" />
      <SampleReportButton className="home-v2-outline-button" />
    </div>
  );
}

function PricingOffer() {
  return (
    <section className="pricing-page-offer" id="pricing-details" aria-labelledby="pricing-page-title">
      <article className="pricing-page-price-card">
        <div className="pricing-page-price-copy">
          <SectionLabel className="pricing-page-label">ASSESSMENT PREPARATION</SectionLabel>
          <h1 id="pricing-page-title">Complete assessment<br />preparation for <span>$395.</span></h1>
        </div>
        <PricingActions />
      </article>
      <article className="pricing-page-included">
        <div>
          <h2>Included</h2>
          <ul>{INCLUDED_ITEMS.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <p>No subscription. No hidden fees or taxes.<br />Clinician appointment fees are separate.</p>
      </article>
    </section>
  );
}

function AssessmentOverview() {
  return (
    <section className="pricing-page-assessment-overview" aria-labelledby="pricing-assessment-overview-title">
      <article className="pricing-page-assessment-copy">
        <div className="home-v2-section-heading pricing-page-assessment-heading">
          <SectionLabel>MORE THAN AN ASSESSMENT</SectionLabel>
          <h2 id="pricing-assessment-overview-title">Your child’s story should not have to start again.</h2>
        </div>
        <p>The information gathered for their Assessment Evidence Report becomes the foundation of their Thread, an organised record that can grow with them throughout their journey.</p>
      </article>
      <div className="pricing-page-assessment-workspace" aria-label="Preview of a Threadline Assessment Evidence Report">
        <Image
          className="pricing-page-assessment-watercolour"
          src="/pricing-thread-watercolour-v2.jpg"
          width={1440}
          height={875}
          alt=""
          sizes="(max-width: 900px) calc(100vw - 32px), 920px"
        />
        <div className="pricing-page-assessment-report">
          <Image
            src="/pricing-evidence-workspace-v2.png"
            width={1400}
            height={1138}
            alt="Cross-source view from a Threadline Assessment Evidence Report"
            sizes="(max-width: 620px) 82vw, (max-width: 900px) 73vw, 670px"
          />
        </div>
      </div>
    </section>
  );
}

function PreparationNotice() {
  return (
    <aside className="pricing-page-notice" id="resources">
      <p>Preparation, not diagnosis.</p>
      <p>One-off payment for guided preparation and a structured Assessment Evidence Report. No subscription. Clinician consultation and assessment fees are separate.</p>
    </aside>
  );
}

function PricingFaq() {
  return (
    <section className="pricing-page-faq" aria-labelledby="pricing-faq-title">
      <div className="pricing-page-faq-inner">
        <header>
          <SectionLabel className="pricing-page-label">FAQ</SectionLabel>
          <h2 id="pricing-faq-title">Questions families often ask.</h2>
        </header>
        <DisclosureList
          className="pricing-page-faq-list"
          items={FAQ_ITEMS}
          name="pricing-faq"
          wrapQuestion={false}
        />
      </div>
    </section>
  );
}

function AffordabilitySection() {
  return (
    <section className="pricing-page-affordability" aria-label="Affordability support">
      <Image
        src="/pricing-affordability-watercolour-v2.jpg"
        fill
        alt=""
        sizes="(max-width: 900px) calc(100vw - 32px), 1450px"
      />
      <div className="pricing-page-affordability-grid">
        <article><h2>Every child deserves to be understood.</h2></article>
        <article><h2>If cost is a barrier, let’s talk. We’ll find a way.</h2></article>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="page-shell pricing-page" id="top">
      <SiteNavigation />
      <main>
        <div className="pricing-page-main">
          <PricingHeroArt />
          <PricingOffer />
          <AssessmentOverview />
          <PreparationNotice />
          <PricingFaq />
          <div className="pricing-page-closing">
            <AffordabilitySection />
            <SiteFooter exploreLinks={EXPLORE_LINKS} />
          </div>
        </div>
      </main>
    </div>
  );
}
