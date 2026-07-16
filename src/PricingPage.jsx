import Image from 'next/image';
import { Cta, Navigation } from './App.jsx';

const guidelineItems = [
  ['BASED ON', "Australia's national ADHD Clinical Practice Guidelines"],
  ['APPROVED BY', "Australia's National Health and Medical Research Council (NHMRC)"],
  ['ENDORSE BY', "Australia's leading medical, psychology and allied health organisations"],
];

const packageItems = [
  'Personalised Assessment Package and secure Family Workspace',
  'Clinically validated parent and teacher questionnaires',
  'Guided evidence collection and document organisation',
  "Secure submission to your child's clinician",
];

const pricingFaqs = [
  {
    question: 'Is this the cost of the ADHD assessment itself?',
    answer: "No. $395 covers Threadline’s preparation service. Your child's clinician charges separately for the clinical assessment.",
  },
  {
    question: 'Can I complete everything in one day?',
    answer: 'Yes. Most families finish their part in one sitting. The only step that depends on someone else is the teacher questionnaire — we send it directly and track it for you.',
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

function PricingHero() {
  return (
    <section className="pricing-v2-hero" id="pricing-details" aria-labelledby="pricing-title">
      <article className="pricing-v2-hero-copy">
        <h1 id="pricing-title">Become ADHD <span>Assessment Ready.</span></h1>
        <p>Everything your clinician needs, prepared and organised before your appointment. Start in under 5 minutes.</p>
      </article>
      <article className="pricing-v2-hero-price">
        <div>
          <p className="pricing-v2-kicker">ASSESSMENT PREPARATION</p>
          <div className="pricing-v2-price"><strong>$395&nbsp;</strong><span>One-time payment</span></div>
        </div>
        <Cta href="#start" label="Start Your Assessment Package" shortLabel="Start package" />
      </article>
    </section>
  );
}

function Guidelines() {
  return (
    <section className="pricing-v2-guidelines" aria-label="Clinical guideline foundations">
      <div>
        {guidelineItems.map(([label, text]) => (
          <article key={label}>
            <p>{label}</p>
            <h2>{text}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}

function ThreadPreview({ className = '' }) {
  return (
    <div className={`pricing-v2-thread-preview ${className}`}>
      <Image className="pricing-v2-thread-art" src="/pricing-thread-watercolour-v2.jpg" fill alt="" sizes="(max-width: 900px) calc(100vw - 64px), 1042px" />
      <Image className="pricing-v2-thread-report" src="/pricing-evidence-workspace-v2.png" width={1005} height={773} alt="Evidence Workspace preview" />
    </div>
  );
}

function PackageSection() {
  return (
    <section className="pricing-v2-package" id="package" aria-labelledby="package-title">
      <div className="pricing-v2-package-inner">
        <header className="pricing-v2-section-heading">
          <p className="pricing-v2-kicker">YOUR CHILD&apos;S THREAD</p>
          <h2 id="package-title">What&apos;s included in the Assessment Package.</h2>
        </header>
        <div className="pricing-v2-package-grid">
          <article className="pricing-v2-package-list">
            <ul>{packageItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <ThreadPreview className="pricing-v2-thread-preview--small" />
        </div>
        <div className="pricing-v2-package-record">
          <ThreadPreview className="pricing-v2-thread-preview--large" />
          <h2>More than an Assessment Package, a secure record you control and can use throughout your child&apos;s journey.</h2>
        </div>
      </div>
    </section>
  );
}

function Affordability() {
  return (
    <section className="pricing-v2-affordability" id="affordability" aria-label="Affordability support">
      <Image src="/pricing-affordability-watercolour-v2.jpg" fill loading="eager" alt="" sizes="(max-width: 900px) calc(100vw - 32px), 1450px" />
      <div className="pricing-v2-affordability-grid">
        <article><h2>Every child deserves to be understood.</h2></article>
        <article><h2>If cost is a barrier, let’s talk. We’ll find a way.</h2></article>
      </div>
    </section>
  );
}

function PricingFaq() {
  return (
    <section className="pricing-v2-faq" id="faq" aria-labelledby="pricing-faq-title">
      <div className="pricing-v2-faq-inner">
        <header className="pricing-v2-section-heading">
          <p className="pricing-v2-kicker">FAQ</p>
          <h2 id="pricing-faq-title">Common questions<br />from parents.</h2>
        </header>
        <div className="pricing-v2-faq-list">
          {pricingFaqs.map(({ question, answer }) => (
            <details open key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pricing-v2-final" id="start" aria-labelledby="pricing-final-title">
      <div>
        <h2 id="pricing-final-title">Prepare early so your<br />clinician has what they need.</h2>
        <Cta href="#pricing-details" label="Start your Assessment Package" shortLabel="Start package" />
      </div>
    </section>
  );
}

function PricingNotice() {
  return (
    <aside className="pricing-v2-notice" id="resources">
      <div>
        <p className="pricing-v2-kicker">What Threadline Doesn&apos;t Do</p>
        <p>Threadline does not diagnose ADHD, replace your child&apos;s clinician, recommend treatment, or prescribe medication.<br />Your child&apos;s clinician remains responsible for the clinical assessment, diagnosis and any treatment decisions.</p>
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

function PricingFooter() {
  return (
    <footer className="pricing-v2-footer" id="contact">
      <div className="pricing-v2-footer-top">
        <div className="pricing-v2-footer-brand">
          <div><Image src="/pricing-footer-wordmark-v2.svg" width={249} height={38} alt="Threadline" /><p>–</p></div>
          <Cta href="#start" label="Start your Assessment Package" shortLabel="Start package" />
        </div>
        <div className="pricing-v2-footer-links">
          <FooterColumn title="Explore" links={footerExplore} />
          <FooterColumn title="Social" links={footerSocial} />
        </div>
      </div>
      <div className="pricing-v2-footer-bottom">
        <p>© 2026 Threadline All rights reserved.</p>
        <div><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a></div>
      </div>
    </footer>
  );
}

export default function PricingPage() {
  return (
    <div className="page-shell pricing-v2" id="top">
      <Navigation ctaLabel="Start Your Assessment Package" ctaShortLabel="Start package" />
      <main>
        <PricingHero />
        <Guidelines />
        <PackageSection />
        <Affordability />
        <PricingFaq />
        <FinalCta />
        <PricingNotice />
      </main>
      <PricingFooter />
    </div>
  );
}
