import Image from 'next/image';
import ScrollRevealController from './ScrollRevealController';

const navLinks = [
  ['How it works', '#how-it-works'],
  ['Pricing', '#pricing'],
  ['For clinicians', '#clinicians'],
  ['Resources', '#resources'],
  ['Contact us', '#contact'],
];

const guidelineItems = [
  "Based on Australia's national ADHD Clinical Practice Guidelines",
  "Approved by Australia's National Health and Medical Research Council (NHMRC)",
  "Endorsed by Australia's leading medical, psychology and allied health organisations",
];

const footerExplore = [
  'Overview',
  'How It Works',
  'Pricing',
  'For Clinician',
  'Resources',
  'About us',
  'Contact us',
];

const footerSocial = ['Instagram', 'LinkedIn', 'X', 'YouTube'];

function ArrowIcon() {
  return <Image className="arrow-icon" src="/arrow.svg" width={42} height={38} alt="" aria-hidden="true" />;
}

function InformationIcon() {
  return (
    <svg className="step-icon" viewBox="0 0 71 60" aria-hidden="true">
      <path d="M2 2.5h55v46H2z" />
      <path d="M13 13.5h55v44H13z" />
      <path d="M2 2.5h55v46H2z" opacity=".42" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg className="step-icon" viewBox="0 0 71 60" aria-hidden="true">
      <rect x="2" y="2" width="66" height="55" />
      <path d="m9 14 4 4 7-8M26 14h34M9 30l4 4 7-8M26 30h34M9 46l4 4 7-8M26 46h34" />
    </svg>
  );
}

function StoryIcon() {
  return (
    <svg className="step-icon step-icon--muted" viewBox="0 0 71 60" aria-hidden="true">
      <path d="M2 2h50v44H2z" />
      <path d="M13 13h50v44H13z" opacity=".68" />
      <path d="M24 24h44v34H24z" opacity=".42" />
    </svg>
  );
}

function Cta({ className = '', children = 'Start your journey', withArrow = false }) {
  return (
    <a className={`cta ${withArrow ? 'cta--wide' : ''} ${className}`} href="#pricing">
      <span>{children}</span>
      {withArrow && <ArrowIcon />}
    </a>
  );
}

function Navigation() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-link" href="#top" aria-label="Threadline home">
          <Image src="/threadline-logo.svg" width={256} height={41} alt="Threadline" priority />
        </a>
        <div className="nav-links">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
        <Cta className="nav-cta" />
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy-column">
          <div className="hero-copy">
            <h1>Accelerate your child&apos;s ADHD assessment.</h1>
            <p>Everything your child&apos;s clinician needs, organised in one place before your appointment.</p>
          </div>
          <Cta className="hero-cta" withArrow />
        </div>
        <div className="hero-media">
          <Image
            src="/hero-watercolour.png"
            alt="Soft blue, green and cream watercolour threads"
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 48px), 50vw"
          />
        </div>
      </div>
    </section>
  );
}

function Guidelines() {
  return (
    <section className="guidelines" aria-label="Clinical guidelines">
      <div className="guideline-grid" data-scroll-reveal>
        {guidelineItems.map((item) => <p key={item}>{item}</p>)}
      </div>
    </section>
  );
}

function StatementSection({ label, children, tone = 'plain', id }) {
  return (
    <section className={`statement statement--${tone}`} id={id}>
      <div className="statement-inner" data-scroll-reveal>
        <p className="eyebrow">{label}</p>
        <h2>{children}</h2>
      </div>
    </section>
  );
}

function AssessmentIntro() {
  return (
    <section className="assessment-intro" id="clinicians">
      <h2 data-scroll-reveal>A complete Assessment Package,<br />ready for your child&apos;s clinician.</h2>
    </section>
  );
}

const steps = [
  { text: 'Know exactly what information is needed', Icon: InformationIcon, shape: 'top-right' },
  { text: 'Reduce delays caused by missing evidence', Icon: ChecklistIcon, shape: 'bottom-left' },
  { text: "Avoid repeating your child's story", Icon: StoryIcon, shape: 'top-right' },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-inner">
        <div className="how-heading" data-scroll-reveal>
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Everything organise for<br />your child&apos;s clinician appointment.</h2>
        </div>
        <div className="steps-grid">
          {steps.map(({ text, Icon, shape }, index) => (
            <article
              className={`step-card step-card--${shape}`}
              data-scroll-reveal
              key={text}
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <Icon />
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-grid">
        <article className="thread-card" data-scroll-reveal>
          <h2>Your Thread</h2>
          <p>Together they become your child&apos;s Thread, a record you own that grows in value with every step of your child&apos;s journey.</p>
        </article>
        <article className="price-card" data-scroll-reveal style={{ '--reveal-delay': '90ms' }}>
          <div>
            <p className="eyebrow">ASSESSMENT PREPARATION</p>
            <div className="price-line"><strong>$395</strong><span>one-off</span></div>
          </div>
          <Cta />
        </article>
      </div>
    </section>
  );
}

function ImportantNotice() {
  return (
    <aside className="important" id="resources">
      <div className="important-inner" data-scroll-reveal>
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
      {links.map((label) => <a key={label} href="#top">{label}</a>)}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top" data-scroll-reveal>
          <div className="footer-brand">
            <div>
              <h2>Threadline</h2>
              <p>Together they become your child&apos;s Thread,<br />a record you own that grows in value with every step.</p>
            </div>
            <Cta />
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

export default function App() {
  return (
    <div className="page-shell">
      <ScrollRevealController />
      <Navigation />
      <main>
        <Hero />
        <Guidelines />
        <StatementSection label="THE PROBLEM">
          Too often, families don’t know where to start, struggle to gather information, face months of waiting, and are asked to repeat their story again and again.
        </StatementSection>
        <StatementSection label="THE SOLUTION" tone="soft">
          Everything your child’s clinician needs, with guided evidence collection and clinically validated tests to help you arrive assessment-ready.
        </StatementSection>
        <AssessmentIntro />
        <HowItWorks />
        <Pricing />
        <ImportantNotice />
      </main>
      <Footer />
    </div>
  );
}
