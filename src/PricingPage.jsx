import Image from 'next/image';
import ContactUsButton from './ContactUsModal.jsx';
import SampleReportButton from './SampleReportModal.jsx';
import { SiteCta, SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { FaqSection, SectionLabel } from './components/website-sections.jsx';
import { CheckList } from './design-system/components.jsx';
import { exploreLinksWithContact, PRICING_INCLUDED_ITEMS } from './content/site-content.js';

const EXPLORE_LINKS = exploreLinksWithContact('#contact');

const FAQ_ITEMS = [
  ['Is $395 the cost of the ADHD assessment?', 'No. It covers Threadline Assessment Preparation. Your clinician charges separately.'],
  ['Are there subscription fees?', 'No. Threadline Assessment Preparation is a one-off purchase.'],
  ['What if my clinician asks for more information?', 'They may request more evidence, assessment activities or appointments. External fees are separate.'],
];

function PricingHeroArt() {
  return (
    <div className="pricing-page-hero-art" aria-label="Preview of a Threadline Clinical Assessment Profile and Clinician Assessment Outcome">
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
          src="/pricing-clinician-outcome.png"
          width={982}
          height={1400}
          priority
          alt="Clinician Assessment Outcome cover"
        />
      </div>
    </div>
  );
}

function PricingActions() {
  return (
    <div className="pricing-page-actions">
      <SiteCta href="/#pricing" label="Get started" />
      <SampleReportButton />
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
          <p className="home-v2-pricing-label">Included</p>
          <CheckList items={PRICING_INCLUDED_ITEMS} />
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
            src="/pricing-background-history.png"
            width={994}
            height={1158}
            alt="Child, family and developmental history page from a Threadline Assessment Evidence Report"
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
    <FaqSection
      items={FAQ_ITEMS}
      title="Questions about pricing"
      titleId="pricing-faq-title"
      sectionClassName="pricing-page-faq"
      innerClassName="pricing-page-faq-inner"
      headingClassName="pricing-page-faq-heading"
      labelClassName="pricing-page-label"
      listClassName="pricing-page-faq-list"
      name="pricing-faq"
      wrapQuestion={false}
    />
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
        <article>
          <div className="pricing-page-price-copy">
            <h2>If cost is a barrier, let’s talk. We’ll find a way.</h2>
            <div className="pricing-page-actions">
              <ContactUsButton appearance="secondary">Contact us</ContactUsButton>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="page-shell pricing-page" id="top">
      <SiteNavigation activeHref="/pricing" />
      <main>
        <div className="pricing-page-main">
          <PricingHeroArt />
          <PricingOffer />
          <AssessmentOverview />
          <PreparationNotice />
          <PricingFaq />
          <AffordabilitySection />
        </div>
      </main>
      <SiteFooter exploreLinks={EXPLORE_LINKS} />
    </div>
  );
}
