import Image from 'next/image';

const navLinks = [
  ['How it works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For clinicians', '/#clinicians'],
  ['Resources', '/#resources'],
  ['Contact us', '/#contact'],
];

const processSteps = [
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

const benefits = [
  { text: 'Know exactly what information is needed', icon: '/step-information.png', shape: 'top-right' },
  { text: 'Reduce delays caused by missing evidence', icon: '/step-checklist.png', shape: 'bottom-left' },
  { text: "Avoid repeating your child's story", icon: '/step-story.png', shape: 'top-right' },
];

const homeFaqs = [
  ['Is Threadline an ADHD assessment?', 'No. Threadline prepares assessment evidence for your child’s clinician.'],
  ['What will my clinician receive?', 'A structured Assessment Evidence Report that keeps every source visible and organised.'],
  ['How long does preparation take?', 'You can begin in minutes and complete each part at your own pace.'],
  ['Will Threadline prevent additional appointments?', 'Threadline supports preparation, while your clinician determines the appointments needed for assessment.'],
  ['Who controls my child’s information?', 'You do, as part of your child’s Thread.'],
];

const footerExplore = [
  ['Overview', '/'],
  ['How It Works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For Clinician', '/#clinicians'],
  ['Resources', '/#resources'],
  ['About us', '/'],
  ['Contact us', '/#contact'],
];

const footerSocial = ['Instagram', 'LinkedIn', 'X', 'YouTube'];

export function Cta({ className = '', href = '/pricing', label = 'Start your journey', shortLabel }) {
  return (
    <a className={`cta ${className}`} href={href} aria-label={label}>
      {shortLabel ? (
        <>
          <span className="cta-label-long">{label}</span>
          <span className="cta-label-short" aria-hidden="true">{shortLabel}</span>
        </>
      ) : label}
    </a>
  );
}

export function Navigation({ ctaLabel, ctaShortLabel }) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-link" href="/" aria-label="Threadline home">
          <Image src="/threadline-logo.svg" width={256} height={41} alt="Threadline" priority />
        </a>
        <div className="nav-links">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
        <Cta className="nav-cta" label={ctaLabel} shortLabel={ctaShortLabel} />
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span>Menu</span>
            <span className="mobile-nav-icon" aria-hidden="true" />
          </summary>
          <div className="mobile-nav-panel">
            <div className="mobile-nav-links">
              {navLinks.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
            <Cta className="mobile-nav-cta" label={ctaLabel} shortLabel={ctaShortLabel} />
          </div>
        </details>
      </nav>
    </header>
  );
}

function HomeHero() {
  return (
    <section className="hero home-v2-hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>Be ready for your child’s <span className="hero-highlight">ADHD assessment.</span></h1>
          <div className="home-v2-hero-bottom">
            <p>Preparing for an ADHD assessment can feel overwhelming. Threadline brings the evidence together in a structured Assessment Evidence Report, so your child’s clinician can start with a clearer picture.</p>
            <div className="home-v2-hero-actions">
              <Cta label="Get started" />
              <a className="home-v2-outline-button" href="#report-preview">View a sample report</a>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <Image className="home-v2-hero-art" src="/index-3419-hero-bg.jpg" alt="Soft blue, green and cream watercolour artwork" fill priority sizes="(max-width: 900px) calc(100vw - 32px), 715px" />
          <div className="home-v2-hero-sheet home-v2-hero-sheet-rear">
            <Image src="/index-3419-hero-report.png" width={1414} height={1402} alt="Child's perspective page from an Assessment Evidence Report" priority />
          </div>
          <div className="home-v2-hero-sheet home-v2-hero-sheet-front">
            <Image src="/index-3419-hero-profile.png" width={1226} height={1498} alt="Clinical Assessment Profile cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeSectionHeading({ label, children, className = '' }) {
  return (
    <div className={`home-v2-section-heading ${className}`}>
      <p className="home-v2-kicker">{label}</p>
      <h2>{children}</h2>
    </div>
  );
}

function GuidelineSection() {
  return (
    <section className="home-v2-guideline" aria-labelledby="guideline-title">
      <div className="home-v2-guideline-inner">
        <div className="home-v2-guideline-heading">
          <p className="home-v2-kicker">I N F O R M E D&nbsp; P R E P A R A T I O N</p>
          <h2 id="guideline-title">Designed with reference to Australia’s evidence-based ADHD guideline.</h2>
          <a href="https://adhdguideline.aadpa.com.au/" target="_blank" rel="noreferrer">View the Australian ADHD guideline</a>
        </div>
        <div className="home-v2-guideline-copy">
          <p>Threadline is designed with reference to the Australian Evidence-Based Clinical Practice Guideline for ADHD, developed by the Australasian ADHD Professionals Association.</p>
          <p>The guideline is approved by the National Health and Medical Research Council and endorsed by Australia’s leading professional and consumer organisations.</p>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="home-v2-problem" aria-labelledby="problem-title">
      <Image src="/index-3419-problem.jpg" alt="" fill loading="eager" sizes="(max-width: 900px) calc(100vw - 32px), 1450px" />
      <div className="home-v2-problem-grid">
        <article className="home-v2-problem-story">
          <h2 id="problem-title">ADHD assessment shouldn’t feel hard.</h2>
          <p>Families can be left working out what information is needed, coordinating school input, finding old reports and repeating their child’s story.</p>
        </article>
        <article className="home-v2-problem-list">
          <p>Don’t know where to start</p>
          <p>Unsure what information is needed</p>
          <p>Chasing reports and questionnaires</p>
          <p>Repeating your child’s story</p>
        </article>
      </div>
    </section>
  );
}

function OutputIntro() {
  return (
    <section className="home-v2-intro home-v2-output-intro" id="clinicians">
      <HomeSectionHeading label="T H E  O U T P U T">More than completed forms. A clearer starting point for your clinician.</HomeSectionHeading>
    </section>
  );
}

function ReportOverview() {
  return (
    <section className="home-v2-report" id="report-preview" aria-label="Assessment Evidence Report overview">
      <div className="home-v2-report-content">
        <p className="home-v2-report-title">Your report brings together</p>
        <div className="home-v2-report-columns">
          <ul>
            <li>Standardised parent, teacher and child questionnaires</li>
            <li>Developmental and family history</li>
            <li>Daily functioning across home and school</li>
            <li>Child and teacher perspectives</li>
            <li>Existing reports and previous care</li>
            <li>What is complete and what may still need follow-up</li>
          </ul>
          <div>
            <p className="home-v2-report-note">Every source remains visible, giving your child’s clinician an organised view of the evidence collected before the appointment.</p>
            <a className="home-v2-outline-button" href="/index-3419-report-page.png" target="_blank" rel="noreferrer">View a sample report</a>
          </div>
        </div>
      </div>
      <Image
        className="home-v2-report-art"
        src="/index-3419-report-page.png"
        width={1414}
        height={1426}
        alt="Sample Assessment Evidence Report"
        sizes="670px"
        loading="eager"
      />
    </section>
  );
}

function HowIntro() {
  return (
    <section className="home-v2-intro home-v2-how-intro" id="how-it-works">
      <HomeSectionHeading label="H O W  I T  W O R K S">Three steps to Assessment Ready.</HomeSectionHeading>
    </section>
  );
}

function ProcessOverview() {
  return (
    <section className="home-v2-process" aria-label="Three preparation steps">
      <article className="home-v2-process-steps">
        {processSteps.map((step, index) => (
          <div className="home-v2-process-step" key={step.title}>
            <span>{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </div>
        ))}
      </article>
      <div className="home-v2-process-preview">
        <Image className="home-v2-process-art" src="/index-3419-workspace-bg.jpg" fill alt="" sizes="920px" />
        <div className="home-v2-process-sheet home-v2-process-sheet--rear">
          <Image src="/index-3419-process-page-6.png" width={1400} height={1138} alt="Cross-source view report page" />
        </div>
        <div className="home-v2-process-sheet home-v2-process-sheet--front">
          <Image src="/index-3419-hero-report.png" width={1414} height={1402} alt="The child's own perspective report page" />
        </div>
      </div>
    </section>
  );
}

function ArriveIntro() {
  return (
    <section className="home-v2-intro home-v2-arrive-intro">
      <HomeSectionHeading label="A R R I V E  P R E P A R E D">Know what’s ready before the appointment.</HomeSectionHeading>
    </section>
  );
}

function BenefitSection() {
  return (
    <section className="home-v2-benefits" aria-label="Assessment preparation benefits">
      <Image src="/index-3419-benefits.jpg" fill alt="" sizes="(max-width: 900px) calc(100vw - 32px), 1450px" />
      <div className="home-v2-benefit-grid">
        {benefits.map(({ text, icon, shape }) => (
          <article className={`home-v2-benefit-card home-v2-benefit-card--${shape}`} key={text}>
            <Image src={icon} width={704} height={600} alt="" aria-hidden="true" />
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingIntro() {
  return (
    <section className="home-v2-intro home-v2-pricing-intro">
      <HomeSectionHeading label="A R R I V E  P R E P A R E D">One clear price for your child’s Assessment Evidence Report.</HomeSectionHeading>
    </section>
  );
}

function HomePricing() {
  return (
    <section className="home-v2-pricing" id="pricing">
      <article className="home-v2-included">
        <p className="home-v2-pricing-label">Included</p>
        <ul className="home-v2-included-list">
          <li>Guided parent information collection</li>
          <li>Teacher invitation and responses</li>
          <li>Child or young-person perspective</li>
          <li>Collection of existing reports and evidence</li>
          <li>Structured Assessment Evidence Report</li>
          <li>Sharing with your child’s clinician</li>
          <li>Support during preparation</li>
        </ul>
        <p>No subscription. No hidden fees or taxes.<br />Clinician appointment fees are separate.</p>
      </article>
      <article className="home-v2-price-card">
        <div>
          <p className="home-v2-kicker">ASSESSMENT PREPARATION</p>
          <div className="home-v2-price-line"><strong>$395&nbsp;</strong><span>once-off</span></div>
          <Cta label="Start assessment preparation" shortLabel="Get started" />
        </div>
      </article>
    </section>
  );
}

function HomeFaq() {
  return (
    <section className="home-v2-faq" aria-labelledby="home-faq-title">
      <div className="home-v2-faq-inner">
        <HomeSectionHeading label="FAQ"><span id="home-faq-title">Questions families often ask.</span></HomeSectionHeading>
        <div className="home-v2-faq-list">
          {homeFaqs.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeImportant() {
  return (
    <aside className="home-v2-important" id="resources">
      <div><p className="home-v2-kicker">Important</p><p>Threadline prepares assessment evidence. It does not diagnose ADHD, replace your child’s clinician or determine whether diagnostic criteria are met. Your child’s clinician remains responsible for clinical assessment, diagnosis and treatment decisions. Clinician fees are charged separately.</p></div>
    </aside>
  );
}

export function ImportantNotice() {
  return (
    <aside className="important" id="resources">
      <div className="important-inner">
        <p className="important-label">Important</p>
        <p className="important-copy">Threadline prepares a complete Assessment Package. It does not diagnose ADHD or replace your clinician. Your child&apos;s clinician conducts the clinical assessment and determines whether a diagnosis is appropriate. Consultation fees are charged by your clinician separately.</p>
      </div>
    </aside>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link) => {
        const [label, href = '#top'] = Array.isArray(link) ? link : [link];
        return <a key={label} href={href}>{label}</a>;
      })}
    </div>
  );
}

export function Footer({ ctaLabel, ctaShortLabel, useLogo = false }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div>
              {useLogo ? (
                <Image className="footer-logo" src="/threadline-logo.svg" width={249} height={40} alt="Threadline" />
              ) : <h2>Threadline</h2>}
              <p>–</p>
            </div>
            <Cta label={ctaLabel} shortLabel={ctaShortLabel} />
          </div>
          <div className="footer-links">
            <FooterColumn title="Explore" links={footerExplore} />
            <FooterColumn title="Social" links={footerSocial} />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Threadline All rights reserved.</p>
          <div><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}

function HomeFooter() {
  return (
    <footer className="home-v2-footer" id="contact">
      <div className="home-v2-footer-top">
        <div className="home-v2-footer-lead">
          <div className="home-v2-footer-message">
            <Image src="/index-footer-wordmark-v2.svg" width={249} height={38} alt="Threadline" />
            <div>
              <p>Start the assessment with a clearer picture.</p>
              <p>Begin preparing your child’s evidence and see what is needed next.</p>
            </div>
          </div>
          <div className="home-v2-footer-actions">
            <Cta label="Get started" />
            <a className="home-v2-outline-button" href="#report-preview">View a sample report</a>
          </div>
        </div>
        <div className="home-v2-footer-links">
          <FooterColumn title="Explore" links={footerExplore} />
          <FooterColumn title="Social" links={footerSocial} />
        </div>
      </div>
      <div className="home-v2-footer-bottom">
        <p>Threadline provides assessment preparation services and does not provide medical advice or ADHD diagnosis.<br />If you have concerns about your child’s health or safety, contact your child’s clinician or seek appropriate medical<br />care.</p>
        <div><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a></div>
        <p>© 2026 Threadline All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page-shell home-v2">
      <Navigation ctaLabel="Get started" />
      <main>
        <HomeHero />
        <GuidelineSection />
        <ProblemSection />
        <OutputIntro />
        <ReportOverview />
        <HowIntro />
        <ProcessOverview />
        <ArriveIntro />
        <BenefitSection />
        <PricingIntro />
        <HomePricing />
        <HomeFaq />
        <HomeImportant />
      </main>
      <HomeFooter />
    </div>
  );
}
