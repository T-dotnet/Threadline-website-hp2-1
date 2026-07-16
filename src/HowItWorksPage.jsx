import Image from 'next/image';
import { Cta, Footer, Navigation } from './App.jsx';

const assessmentCta = {
  label: 'Start your Assessment Package',
  shortLabel: 'Start package',
};

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

const guidedItems = [
  'Parent questionnaires',
  'Teacher input',
  'School reports',
  'Existing assessments',
];

const appointmentSteps = [
  {
    text: 'Completed, clinically validated questionnaires',
    icon: '/step-information.png',
    shape: 'top-right',
  },
  {
    text: 'Existing clinical reports and school information',
    icon: '/step-checklist.png',
    shape: 'bottom-left',
  },
  {
    text: 'Everything organised in one place',
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
          <h1>Know what to prepare for your child&apos;s <span className="hero-highlight">ADHD assessment.</span></h1>
          <p>Answer a few guided questions, add existing reports and invite relevant contributors. Threadline organises everything into an Assessment Package for your clinician.</p>
        </div>
        <div className="hero-media">
          <Image
            src="/how-hero-watercolour.jpg"
            alt="Soft blue, green and cream watercolour brushstrokes"
            fill
            priority
            sizes="(max-width: 900px) calc(100vw - 32px), 725px"
          />
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
          <h2 id="comparison-title">Share information with your child&apos;s clinician.</h2>
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

function GuidedSection() {
  return (
    <section className="guided-section" aria-labelledby="guided-title">
      <Image
        src="/how-hero-watercolour.jpg"
        alt=""
        fill
        loading="eager"
        sizes="(max-width: 900px) calc(100vw - 32px), 1450px"
      />
      <div className="guided-card">
        <div className="guided-heading">
          <p className="eyebrow">BUILD YOUR ASSESSMENT PACKAGE</p>
          <h2 id="guided-title">Answer a few guided questions to personalise your Assessment Package.</h2>
        </div>
        <div className="guided-items">
          {guidedItems.map((item) => <p key={item}>{item}</p>)}
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
          <h2 id="appointment-title">What your clinician gets in the Assessment Package</h2>
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

function ThreadSection() {
  return (
    <section className="how-thread-section" aria-label="Your Thread">
      <Image
        src="/how-thread-watercolour.jpg"
        alt=""
        fill
        loading="eager"
        sizes="(max-width: 900px) calc(100vw - 32px), 1450px"
      />
      <div className="how-thread-grid">
        <article className="how-thread-card how-thread-card--plain">
          <h2>Your Thread securely unites your child’s information.</h2>
        </article>
        <article className="how-thread-card how-thread-card--green">
          <h2>Use it throughout your child&apos;s care.</h2>
        </article>
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
        <h2 id="final-cta-title">Prepare with the<br />complete picture.</h2>
        <Cta {...assessmentCta} />
      </div>
    </section>
  );
}

function WhatThreadlineDoesntDo() {
  return (
    <aside className="important how-important" id="resources">
      <div className="important-inner">
        <p className="important-label">What Threadline Doesn&apos;t Do</p>
        <p className="important-copy">
          Threadline does not diagnose ADHD, replace your child&apos;s clinician, recommend treatment, or prescribe medication.<br />
          Your child&apos;s clinician remains responsible for the clinical assessment, diagnosis and any treatment decisions.
        </p>
      </div>
    </aside>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="page-shell how-page">
      <Navigation ctaLabel={assessmentCta.label} ctaShortLabel={assessmentCta.shortLabel} />
      <main>
        <HowPageHero />
        <ComparisonSection />
        <GuidedSection />
        <AppointmentSection />
        <ThreadSection />
        <FaqSection />
        <FinalCta />
        <WhatThreadlineDoesntDo />
      </main>
      <Footer ctaLabel={assessmentCta.label} ctaShortLabel={assessmentCta.shortLabel} useLogo />
    </div>
  );
}
