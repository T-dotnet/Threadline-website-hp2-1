import Image from 'next/image';
import SampleReportButton from '../SampleReportModal.jsx';
import { Button } from '../design-system/components.jsx';
import { DEFAULT_EXPLORE_LINKS } from '../content/site-content.js';

const DEFAULT_NAV_LINKS = [
  ['How it works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For clinicians', '/#clinicians'],
  ['Resources', '/#resources'],
  ['Contact us', '/#contact'],
];

const DEFAULT_SOCIAL_LINKS = ['Instagram', 'LinkedIn', 'X', 'YouTube'];
const DEFAULT_LEGAL_LINKS = ['Privacy Policy', 'Terms of Service'];

export function SiteCta({ className = '', href = '/#pricing', label = 'Get started', shortLabel }) {
  return (
    <Button unstyled className={`cta ${className}`} href={href} aria-label={label}>
      {shortLabel ? (
        <>
          <span className="cta-label-long">{label}</span>
          <span className="cta-label-short" aria-hidden="true">{shortLabel}</span>
        </>
      ) : label}
    </Button>
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

function FooterLink({ link }) {
  const [label, href] = Array.isArray(link) ? link : [link];

  return href
    ? <a href={href}>{label}</a>
    : <span className="footer-link-placeholder">{label}</span>;
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {links.map((link) => {
        const label = Array.isArray(link) ? link[0] : link;
        return <FooterLink key={label} link={link} />;
      })}
    </div>
  );
}

export function SiteFooter({
  exploreLinks = DEFAULT_EXPLORE_LINKS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  legalLinks = DEFAULT_LEGAL_LINKS,
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
        <div>
          {legalLinks.map((link) => {
            const label = Array.isArray(link) ? link[0] : link;
            return <FooterLink key={label} link={link} />;
          })}
        </div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
