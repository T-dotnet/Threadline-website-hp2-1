import Image from 'next/image';
import SampleReportButton from '../SampleReportModal.jsx';

const DEFAULT_NAV_LINKS = [
  ['How it works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For clinicians', '/#clinicians'],
  ['Resources', '/#resources'],
  ['Contact us', '/#contact'],
];

const DEFAULT_EXPLORE_LINKS = [
  ['Overview', '/'],
  ['How It Works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For Clinician', '/#clinicians'],
  ['Resources', '/#resources'],
  ['About us', '/'],
  ['Contact us', '/#contact'],
];

const DEFAULT_SOCIAL_LINKS = ['Instagram', 'LinkedIn', 'X', 'YouTube'];

export function SiteCta({ className = '', href = '/#pricing', label = 'Get started', shortLabel }) {
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

export function SiteNavigation({ links = DEFAULT_NAV_LINKS, ctaLabel = 'Get started', ctaShortLabel }) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-link" href="/" aria-label="Threadline home">
          <Image src="/threadline-logo.svg" width={256} height={41} alt="Threadline" priority />
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <SiteCta className="nav-cta" label={ctaLabel} shortLabel={ctaShortLabel} />
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span>Menu</span>
            <span className="mobile-nav-icon" aria-hidden="true" />
          </summary>
          <div className="mobile-nav-panel">
            <div className="mobile-nav-links">
              {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            </div>
            <SiteCta className="mobile-nav-cta" label={ctaLabel} shortLabel={ctaShortLabel} />
          </div>
        </details>
      </nav>
    </header>
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

export function SiteFooter({
  exploreLinks = DEFAULT_EXPLORE_LINKS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  title = 'Start the assessment with a clearer picture.',
  description = 'Begin preparing your child’s evidence and see what is needed next.',
  ctaLabel = 'Get started',
  legalNotice = 'Threadline provides assessment preparation services and does not provide medical advice or ADHD diagnosis.',
  safetyNotice = 'If you have concerns about your child’s health or safety, contact your child’s clinician or seek appropriate medical',
  safetyNoticeEnd = 'care.',
  copyright = '© 2026 Threadline All rights reserved.',
}) {
  return (
    <footer className="home-v2-footer" id="contact">
      <div className="home-v2-footer-top">
        <div className="home-v2-footer-lead">
          <div className="home-v2-footer-message">
            <Image src="/index-footer-wordmark-v2.svg" width={249} height={38} alt="Threadline" />
            <div><p>{title}</p><p>{description}</p></div>
          </div>
          <div className="home-v2-footer-actions">
            <SiteCta label={ctaLabel} />
            <SampleReportButton className="home-v2-outline-button" />
          </div>
        </div>
        <div className="home-v2-footer-links">
          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Social" links={socialLinks} />
        </div>
      </div>
      <div className="home-v2-footer-bottom">
        <p>{legalNotice}<br />{safetyNotice}<br />{safetyNoticeEnd}</p>
        <div><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a></div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
