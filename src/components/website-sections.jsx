import Image from 'next/image';
import SampleReportButton from '../SampleReportModal.jsx';
import { SiteCta } from './site-chrome.jsx';

export function SectionHeading({ label, children, className = '' }) {
  return (
    <div className={`home-v2-section-heading ${className}`}>
      <p className="home-v2-kicker">{label}</p>
      <h2>{children}</h2>
    </div>
  );
}

export function HeroSection({
  title = 'Be ready for your child’s',
  highlight = 'ADHD assessment.',
  description,
  ctaLabel = 'Get started',
  ctaHref = '/#pricing',
  backgroundImage = '/index-3419-hero-bg.jpg',
  backgroundAlt = 'Soft blue, green and cream watercolour artwork',
  rearImage = '/index-3419-hero-report.png',
  rearAlt = "Child's perspective page from an Assessment Evidence Report",
  frontImage = '/index-3419-hero-profile.png',
  frontAlt = 'Clinical Assessment Profile cover',
  showSampleReport = true,
}) {
  return (
    <section className="hero home-v2-hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>{title} <span className="hero-highlight">{highlight}</span></h1>
          <div className="home-v2-hero-bottom">
            <p>{description}</p>
            <div className="home-v2-hero-actions">
              <SiteCta label={ctaLabel} href={ctaHref} />
              {showSampleReport ? <SampleReportButton className="home-v2-outline-button" /> : null}
            </div>
          </div>
        </div>
        <div className="hero-media">
          <Image className="home-v2-hero-art" src={backgroundImage} alt={backgroundAlt} fill priority sizes="(max-width: 900px) calc(100vw - 32px), 715px" />
          <div className="home-v2-hero-sheet home-v2-hero-sheet-rear">
            <Image src={rearImage} width={1414} height={1402} alt={rearAlt} priority />
          </div>
          <div className="home-v2-hero-sheet home-v2-hero-sheet-front">
            <Image src={frontImage} width={1226} height={1498} alt={frontAlt} priority />
          </div>
        </div>
      </div>
    </section>
  );
}

export function GuidelineSection({ label, title, linkLabel, linkHref, paragraphs, titleId = 'guideline-title' }) {
  return (
    <section className="home-v2-guideline" aria-labelledby={titleId}>
      <div className="home-v2-guideline-inner">
        <div className="home-v2-guideline-heading">
          <p className="home-v2-kicker">{label}</p>
          <h2 id={titleId}>{title}</h2>
          <a href={linkHref} target="_blank" rel="noreferrer">{linkLabel}</a>
        </div>
        <div className="home-v2-guideline-copy">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}

export function ProblemSection({ title, description, items, backgroundImage, titleId = 'problem-title' }) {
  return (
    <section className="home-v2-problem" aria-labelledby={titleId}>
      <Image src={backgroundImage} alt="" fill loading="eager" sizes="(max-width: 900px) calc(100vw - 32px), 1450px" />
      <div className="home-v2-problem-grid">
        <article className="home-v2-problem-story">
          <h2 id={titleId}>{title}</h2>
          <p>{description}</p>
        </article>
        <article className="home-v2-problem-list">
          {items.map((item) => <p key={item}>{item}</p>)}
        </article>
      </div>
    </section>
  );
}

export function IntroSection({ id, label, title, variant }) {
  return (
    <section className={`home-v2-intro ${variant ? `home-v2-${variant}-intro` : ''}`} id={id}>
      <SectionHeading label={label}>{title}</SectionHeading>
    </section>
  );
}

export function ReportSection({ title, items, note, image, imageAlt, id = 'report-preview', showSampleReport = true }) {
  return (
    <section className="home-v2-report" id={id} aria-label="Assessment Evidence Report overview">
      <div className="home-v2-report-content">
        <p className="home-v2-report-title">{title}</p>
        <div className="home-v2-report-columns">
          <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
          <div>
            <p className="home-v2-report-note">{note}</p>
            {showSampleReport ? <SampleReportButton className="home-v2-outline-button" /> : null}
          </div>
        </div>
      </div>
      <Image className="home-v2-report-art" src={image} width={1414} height={1426} alt={imageAlt} sizes="670px" loading="eager" />
    </section>
  );
}

export function ProcessSection({
  steps,
  backgroundImage = '/index-3419-workspace-bg.jpg',
  rearImage = '/index-3419-process-page-6.png',
  rearAlt = 'Cross-source view report page',
  frontImage = '/index-3419-hero-report.png',
  frontAlt = "The child's own perspective report page",
  ariaLabel = 'Three preparation steps',
}) {
  return (
    <section className="home-v2-process" aria-label={ariaLabel}>
      <article className="home-v2-process-steps">
        {steps.map((step, index) => (
          <div className="home-v2-process-step" key={step.title}>
            <span>{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </div>
        ))}
      </article>
      <div className="home-v2-process-preview">
        <Image className="home-v2-process-art" src={backgroundImage} fill alt="" sizes="920px" />
        <div className="home-v2-process-sheet home-v2-process-sheet--rear">
          <Image src={rearImage} width={1400} height={1138} alt={rearAlt} />
        </div>
        <div className="home-v2-process-sheet home-v2-process-sheet--front">
          <Image src={frontImage} width={1414} height={1402} alt={frontAlt} />
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection({ benefits, backgroundImage, ariaLabel = 'Assessment preparation benefits' }) {
  return (
    <section className="home-v2-benefits" aria-label={ariaLabel}>
      <Image src={backgroundImage} fill alt="" sizes="(max-width: 900px) calc(100vw - 32px), 1450px" />
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

export function PricingSection({
  items,
  price,
  priceSuffix = 'once-off',
  label = 'ASSESSMENT PREPARATION',
  note,
  subnote,
  ctaLabel = 'Start assessment preparation',
  ctaShortLabel = 'Get started',
  id = 'pricing',
}) {
  return (
    <section className="home-v2-pricing" id={id}>
      <article className="home-v2-included">
        <p className="home-v2-pricing-label">Included</p>
        <ul className="home-v2-included-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>{note}<br />{subnote}</p>
      </article>
      <article className="home-v2-price-card">
        <div>
          <p className="home-v2-kicker">{label}</p>
          <div className="home-v2-price-line"><strong>{price}&nbsp;</strong><span>{priceSuffix}</span></div>
          <SiteCta label={ctaLabel} shortLabel={ctaShortLabel} />
        </div>
      </article>
    </section>
  );
}

export function FaqSection({ items, title = 'Questions families often ask.', label = 'FAQ', titleId = 'home-faq-title' }) {
  return (
    <section className="home-v2-faq" aria-labelledby={titleId}>
      <div className="home-v2-faq-inner">
        <SectionHeading label={label}><span id={titleId}>{title}</span></SectionHeading>
        <div className="home-v2-faq-list">
          {items.map(([question, answer]) => (
            <details key={question} name="home-faq">
              <summary><span>{question}</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImportantSection({ children, label = 'Important', id = 'resources' }) {
  return (
    <aside className="home-v2-important" id={id}>
      <div><p className="home-v2-kicker">{label}</p><p>{children}</p></div>
    </aside>
  );
}
