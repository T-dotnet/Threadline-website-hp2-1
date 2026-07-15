import Image from 'next/image';
import { Cta, Footer, ImportantNotice, Navigation } from './App.jsx';

const comparisonCards = [
  {
    title: 'Without Threadline',
    icon: '/step-information.png',
    tone: 'plain',
    items: [
      "Unsure what's needed",
      'Reports scattered across emails and folders',
      'Chasing teachers and paperwork',
      'Hoping nothing important is missed',
      "Repeating your child's story",
    ],
  },
  {
    title: 'With Threadline',
    icon: '/step-checklist.png',
    tone: 'green',
    items: [
      'Guided, step-by-step evidence collection',
      'Everything organised in one secure place',
      'Built-in questionnaires and evidence tracking',
      'Progress tracked against a complete package',
      'One portable Thread you control',
    ],
  },
];

const appointmentSteps = [
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

function HowPageHero() {
  return (
    <section className="hero how-page-hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>From wondering where to start, to <span className="hero-highlight">Assessment Ready</span>.</h1>
          <p>Threadline helps you prepare a complete, guideline-based Assessment Package before your child&apos;s clinician visit.</p>
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

function ComparisonSection() {
  return (
    <section className="how-comparison" aria-labelledby="comparison-title">
      <div className="how-page-inner">
        <div className="how-page-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="comparison-title">Share info with your child&apos;s clinician</h2>
        </div>
        <div className="comparison-grid">
          {comparisonCards.map(({ title, icon, tone, items }) => (
            <article className={`comparison-card comparison-card--${tone}`} key={title}>
              <Image className="step-icon" src={icon} width={71} height={60} alt="" aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyBanner() {
  return (
    <section className="journey-section" aria-labelledby="journey-title">
      <div className="journey-panel">
        <Image
          src="/solution-watercolour.png"
          alt=""
          fill
          loading="eager"
          sizes="(max-width: 900px) calc(100vw - 32px), 1450px"
        />
        <span className="art-soft-light art-soft-light--workspace" aria-hidden="true" />
        <div className="journey-content">
          <p className="eyebrow">START YOUR JOURNEY</p>
          <h2 id="journey-title">A few questions to set up your secure Thread and Assessment Package.</h2>
        </div>
      </div>
    </section>
  );
}

function AppointmentSection() {
  return (
    <section className="appointment-section" aria-labelledby="appointment-title">
      <div className="how-page-inner">
        <div className="how-page-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="appointment-title">Organise your child&apos;s appointment.</h2>
        </div>
        <div className="steps-grid">
          {appointmentSteps.map(({ text, icon, shape }) => (
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

function FaqSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="how-page-inner">
        <div className="how-page-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Common questions<br />from parents.</h2>
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
    <section className="how-final-cta" aria-labelledby="final-cta-title">
      <div className="how-final-panel">
        <h2 id="final-cta-title">Start your assessment<br />with the complete picture.</h2>
        <Cta />
      </div>
    </section>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="page-shell how-page">
      <Navigation />
      <main>
        <HowPageHero />
        <ComparisonSection />
        <JourneyBanner />
        <AppointmentSection />
        <FaqSection />
        <FinalCta />
        <ImportantNotice />
      </main>
      <Footer />
    </div>
  );
}
