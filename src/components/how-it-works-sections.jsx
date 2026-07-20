import Image from 'next/image';
import SampleReportButton from '../SampleReportModal.jsx';
import { VisuallyHidden } from '../design-system/primitives.jsx';
import { SiteCta } from './site-chrome.jsx';

const HALF_VIEWPORT_IMAGE_SIZES = '(orientation: portrait) 100vw, 50vw';

const PREPARATION_STEPS = [
  {
    title: 'Tell us about your child',
    text: 'Answer guided questions about their history, strengths, concerns and daily life.',
  },
  {
    title: 'Collect the evidence',
    text: 'Complete questionnaires, invite a teacher and add existing reports.',
  },
  {
    title: 'Receive your report',
    text: "Threadline organises the information for your child's clinician.",
  },
];

const EVIDENCE_ITEMS = [
  'Family information and history',
  "Your child's perspective",
  'Child and teacher perspectives',
  'Standardised questionnaires',
  'Daily functioning',
  'Existing reports',
];

const THREAD_STAGES = [
  {
    name: 'Assessment questionnaires',
    background: '/thread-circle-primary.jpg',
    icon: '/thread-clipboard.svg',
  },
  {
    name: 'Clinician context',
    background: '/thread-circle-primary.jpg',
    icon: '/thread-clinician.svg',
  },
  {
    name: 'School perspective',
    background: '/thread-circle-school.jpg',
    icon: '/thread-school.svg',
  },
  {
    name: 'Future care',
    background: '/thread-circle-care.jpg',
    icon: '/thread-future-care.svg',
  },
];

const THREAD_STAGE_CLASSES = {
  journey: {
    list: 'how-v2-thread-stages',
    stage: 'how-v2-thread-stage',
    background: 'how-v2-thread-stage-background',
    shade: 'how-v2-thread-stage-shade',
    icon: 'how-v2-thread-stage-icon',
  },
  report: {
    list: 'how-v2b-thread-stages',
    stage: 'how-v2b-thread-stage',
    background: 'how-v2b-thread-stage-background',
    shade: 'how-v2b-thread-stage-shade',
    icon: 'how-v2b-thread-stage-icon',
  },
};

export function HowThreadStages({ variant = 'journey', showLine = false, ariaLabel }) {
  const classes = THREAD_STAGE_CLASSES[variant] || THREAD_STAGE_CLASSES.journey;

  return (
    <>
      {showLine ? (
        <Image
          className="how-v2-thread-line"
          src="/thread-journey-line.svg"
          width={694}
          height={92}
          alt=""
        />
      ) : null}
      <div
        className={classes.list}
        role={ariaLabel ? 'list' : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
      >
        {THREAD_STAGES.map((stage) => (
          <div className={classes.stage} role={ariaLabel ? 'listitem' : undefined} key={stage.name}>
            <Image
              className={classes.background}
              src={stage.background}
              fill
              alt=""
              sizes="25vw"
            />
            <span className={classes.shade} />
            <Image
              className={classes.icon}
              src={stage.icon}
              width={120}
              height={120}
              alt=""
            />
            {ariaLabel ? <VisuallyHidden>{stage.name}</VisuallyHidden> : null}
          </div>
        ))}
      </div>
    </>
  );
}

export function HowAssessmentOverview() {
  return (
    <section className="home-v2-process how-v2-process" aria-label="Three assessment preparation steps">
      <article className="home-v2-process-steps">
        {PREPARATION_STEPS.map((step, index) => (
          <div className="home-v2-process-step" key={step.title}>
            <span>{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </div>
        ))}
      </article>
      <div className="home-v2-process-preview">
        <Image
          className="home-v2-process-art"
          src="/index-evidence-workspace-v2.png"
          fill
          alt=""
          sizes={HALF_VIEWPORT_IMAGE_SIZES}
        />
        <Image
          className="how-v2-process-screen"
          src="/assessment-questionnaire-screen.png"
          width={2040}
          height={1216}
          alt="Threadline clinical modules questionnaire showing a development and medical history question"
          sizes={HALF_VIEWPORT_IMAGE_SIZES}
        />
      </div>
    </section>
  );
}

export function HowEvidenceStory({ titleId = 'evidence-title' }) {
  return (
    <section className="how-v2-evidence" aria-labelledby={titleId}>
      <div className="how-v2-evidence-art">
        <Image
          className="how-v2-evidence-watercolour"
          src="/index-evidence-workspace-v2.png"
          fill
          alt=""
          sizes={HALF_VIEWPORT_IMAGE_SIZES}
        />
        <div className="how-v2-perspective-report">
          <Image
            src="/index-3419-hero-report.png"
            width={1414}
            height={1402}
            alt="The child’s own perspective page from a sample Assessment Evidence Report"
          />
        </div>
      </div>
      <article className="how-v2-evidence-copy">
        <p className="how-v2-evidence-title" id={titleId}>Evidence across your child&apos;s life.</p>
        <div className="how-v2-evidence-details">
          <ul>
            {EVIDENCE_ITEMS.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="how-v2-pullout how-v2-pullout--body">Every source remains visible, giving your child’s clinician an organised view of the evidence collected before the appointment.</p>
        </div>
      </article>
    </section>
  );
}

export function HowPreparationDisclaimer({ id = 'resources' }) {
  return (
    <aside className="how-v2-disclaimer" id={id}>
      <p>Preparation, not diagnosis.</p>
      <p>Threadline prepares the evidence. Your clinician assesses, diagnoses and decides what happens next.</p>
    </aside>
  );
}

export function HowClosingSection({
  titleId = 'how-final-title',
  ctaLabel = 'Get started',
  showSampleReport = false,
  primaryAction,
}) {
  return (
    <div className="how-v2-closing">
      <section className="how-v2-final" aria-labelledby={titleId}>
        <h1 id={titleId}>Prepare with the<br />complete picture.</h1>
        {showSampleReport ? (
          <div className="home-v2-hero-actions">
            {primaryAction ?? <SiteCta label={ctaLabel} />}
            <SampleReportButton />
          </div>
        ) : (primaryAction ?? <SiteCta label={ctaLabel} />)}
      </section>
    </div>
  );
}
