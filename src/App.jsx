import Image from 'next/image';

const navLinks = [
  ['How it works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For clinicians', '/#clinicians'],
  ['Resources', '/#resources'],
  ['Contact us', '/#contact'],
];

const guidelineItems = [
  {
    label: 'BASED ON',
    text: "Australia's national ADHD Clinical Practice Guidelines",
  },
  {
    label: 'APPROVED BY',
    text: "Australia's National Health and Medical Research Council (NHMRC)",
  },
  {
    label: 'ENDORSE BY',
    text: "Australia's leading medical, psychology and allied health organisations",
  },
];

const problemItems = [
  'Struggle to gather information',
  'Face months of waiting',
  'Repeat their story again and again',
];

const solutionItems = [
  'Guided evidence collection',
  'Clinically validated tests',
  'Arrive assessment-ready',
];

const steps = [
  {
    text: 'Know exactly what information is needed',
    icon: '/step-information.png',
    shape: 'top-right',
  },
  {
    text: 'Reduce delays caused by missing evidence',
    icon: '/step-checklist.png',
    shape: 'bottom-left',
  },
  {
    text: "Avoid repeating your child's story",
    icon: '/step-story.png',
    shape: 'top-right',
  },
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

export function Cta({ className = '', href = '/pricing' }) {
  return (
    <a className={`cta ${className}`} href={href}>
      Start your journey
    </a>
  );
}

export function Navigation() {
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
        <Cta className="nav-cta" />
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>Accelerate your child&apos;s <span className="hero-highlight">ADHD assessment.</span></h1>
          <p>Everything your child&apos;s clinician needs, organised in one place before your appointment.</p>
        </div>
        <div className="hero-media">
          <Image
            src="/hero-watercolour-figma.png"
            alt="Soft blue, green and cream watercolour brushstrokes"
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 32px), 725px"
          />
          <span className="art-soft-light" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Guidelines() {
  return (
    <section className="guidelines" aria-label="Clinical guideline foundations">
      <div className="guideline-grid">
        {guidelineItems.map(({ label, text }) => (
          <div className="guideline-item" key={label}>
            <p className="eyebrow">{label}</p>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SplitStatement({ label, title, items, tone = 'plain', id }) {
  return (
    <section className={`statement statement--${tone}`} id={id}>
      {tone === 'watercolour' && (
        <>
          <Image
            className="statement-art"
            src="/solution-watercolour.png"
            alt=""
            fill
            loading="eager"
            sizes="(max-width: 900px) calc(100vw - 32px), 1450px"
          />
          <span className="art-soft-light art-soft-light--workspace" aria-hidden="true" />
        </>
      )}
      <div className="statement-inner">
        <div className="statement-heading">
          <p className="eyebrow">{label}</p>
          <h2>{title}</h2>
        </div>
        <div className="statement-items">
          {items.map((item) => <p key={item}>{item}</p>)}
        </div>
      </div>
    </section>
  );
}

function AssessmentIntro() {
  return (
    <section className="assessment-intro" id="clinicians">
      <h2>A complete Assessment Package, ready for your child&apos;s clinician.</h2>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-inner">
        <div className="how-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Everything organise for<br />your child&apos;s clinician appointment.</h2>
        </div>
        <div className="steps-grid">
          {steps.map(({ text, icon, shape }) => (
            <article className={`step-card step-card--${shape}`} key={text}>
              <Image className="step-icon" src={icon} width={71} height={60} alt="" aria-hidden="true" />
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
        <article className="thread-card">
          <h2>Your Thread</h2>
          <p>Together they become your child&apos;s Thread, a record you own that grows in value with every step of your child&apos;s journey.</p>
        </article>
        <article className="price-card">
          <div>
            <p className="eyebrow">ASSESSMENT PREPARATION</p>
            <div className="price-line"><strong>$395&nbsp;</strong><span>one-off</span></div>
          </div>
          <Cta />
        </article>
      </div>
    </section>
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

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div>
              <h2>Threadline</h2>
              <p>–</p>
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
      <Navigation />
      <main>
        <Hero />
        <Guidelines />
        <SplitStatement label="THE PROBLEM" title="Too often, families don’t know where to start." items={problemItems} />
        <SplitStatement label="THE SOLUTION" title="Everything your child’s clinician needs." items={solutionItems} tone="watercolour" />
        <AssessmentIntro />
        <HowItWorks />
        <Pricing />
        <ImportantNotice />
      </main>
      <Footer />
    </div>
  );
}
