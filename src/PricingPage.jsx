import Image from 'next/image';
import { Cta, Footer, ImportantNotice, Navigation } from './App.jsx';

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

const benefits = [
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

const faqs = [
  {
    question: 'Is Threadline an ADHD assessment?',
    answer: "No. Threadline prepares the Assessment Package. Your child's clinician performs the assessment separately.",
  },
  {
    question: 'How long does it take?',
    answer: 'Most families start in minutes and complete their package at their own pace. Assessments and evidence collection can take several hours to complete.',
  },
  {
    question: 'Who owns my information?',
    answer: "You do, as part of your child's Thread.",
  },
];

function PricingHero() {
  return (
    <section className="pricing-hero" id="pricing-details" aria-labelledby="pricing-title">
      <div className="pricing-hero-grid">
        <article className="pricing-hero-intro">
          <h1 id="pricing-title">Become Assessment <span>Ready.</span></h1>
          <p>To help your child&apos;s clinician, whether GP, paediatrician or psychiatrist, start with the complete picture.</p>
        </article>
        <article className="pricing-hero-card">
          <div>
            <p className="eyebrow">ASSESSMENT PREPARATION</p>
            <div className="price-line"><strong>$395&nbsp;</strong><span>one-off</span></div>
          </div>
          <Cta href="#pricing-details" />
        </article>
      </div>
    </section>
  );
}

function Guidelines() {
  return (
    <section className="pricing-guidelines" aria-label="Clinical guideline foundations">
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

function Benefits() {
  return (
    <section className="pricing-benefits" id="benefits" aria-labelledby="benefits-title">
      <div className="pricing-content">
        <div className="how-page-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="benefits-title">Reduce delays from missing information.</h2>
        </div>
        <div className="steps-grid">
          {benefits.map(({ text, icon, shape }) => (
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

function Affordability() {
  return (
    <section className="affordability" id="affordability" aria-label="Affordability support">
      <Image
        src="/solution-watercolour.png"
        alt=""
        fill
        loading="eager"
        sizes="(max-width: 900px) calc(100vw - 32px), 1450px"
      />
      <span className="art-soft-light art-soft-light--workspace" aria-hidden="true" />
      <div className="affordability-grid">
        <article className="affordability-card affordability-card--plain">
          <h2>Every child deserves the opportunity to be understood.</h2>
          <p>If the cost of Threadline would genuinely prevent your family from accessing it, please get in touch.</p>
        </article>
        <article className="affordability-card affordability-card--green">
          <h2>We&apos;ll make sure money isn&apos;t the barrier.</h2>
        </article>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="pricing-faq" id="faq" aria-labelledby="pricing-faq-title">
      <div className="pricing-content">
        <div className="how-page-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="pricing-faq-title">Common questions<br />from parents.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
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
    <section className="how-final-cta" id="start" aria-labelledby="pricing-final-title">
      <div className="how-final-panel">
        <h2 id="pricing-final-title">Start your assessment<br />with the complete picture.</h2>
        <Cta href="#pricing-details" />
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="page-shell pricing-page" id="top">
      <Navigation />
      <main>
        <PricingHero />
        <Guidelines />
        <Benefits />
        <Affordability />
        <FaqSection />
        <FinalCta />
        <ImportantNotice />
      </main>
      <Footer />
    </div>
  );
}
