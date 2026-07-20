import Image from 'next/image';
import ContactUsButton from '../ContactUsModal.jsx';
import SampleReportButton from '../SampleReportModal.jsx';
import { DEFAULT_EXPLORE_LINKS } from '../content/site-content.js';
import { SiteAction } from './site-actions.jsx';
import styles from './site-chrome.module.css';

const DEFAULT_NAV_LINKS = [
  ['How it works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For clinicians', '/clinicians'],
  ['Resources', '/#resources'],
  ['Contact us', '/#contact'],
];

const DEFAULT_SOCIAL_LINKS = [];
const DEFAULT_LEGAL_LINKS = [];

export function SiteCta({ className = '', href = '/#pricing', label = 'Get started', shortLabel }) {
  return (
    <SiteAction appearance="primary" className={className} href={href} aria-label={label}>
      {shortLabel ? (
        <>
          <span className="cta-label-long">{label}</span>
          <span className="cta-label-short" aria-hidden="true">{shortLabel}</span>
        </>
      ) : label}
    </SiteAction>
  );
}

function NavigationLink({ label, href }) {
  return label === 'Contact us'
    ? <ContactUsButton className={styles.navContactTrigger}>{label}</ContactUsButton>
    : <a href={href}>{label}</a>;
}

export function SiteNavigation({
  links = DEFAULT_NAV_LINKS,
  ctaLabel = 'Get started',
  ctaShortLabel,
  loginHref = '/login',
  loginLabel = 'Log in',
}) {
  return (
    <header className={styles.siteHeader}>
      <nav className={styles.navShell} aria-label="Main navigation">
        <a className={styles.brandLink} href="/" aria-label="Threadline home">
          <Image src="/threadline-logo.svg" width={256} height={41} alt="Threadline" priority />
        </a>
        <div className={styles.navLinks}>
          {links.map(([label, href]) => <NavigationLink key={label} label={label} href={href} />)}
        </div>
        <div className={styles.navActions}>
          <SiteCta className={styles.navCta} label={ctaLabel} shortLabel={ctaShortLabel} />
          <SiteAction appearance="secondary" className={styles.navLogin} href={loginHref}>
            {loginLabel}
          </SiteAction>
        </div>
        <details className={styles.mobileNav}>
          <summary>
            <span className={styles.mobileNavVisibleLabel} aria-hidden="true">Menu</span>
            <span className={styles.mobileNavStateLabel}>
              <span className={styles.mobileNavOpenLabel}>Open navigation menu</span>
              <span className={styles.mobileNavCloseLabel}>Close navigation menu</span>
            </span>
            <span className={styles.mobileNavIcon} aria-hidden="true" />
          </summary>
          <div className={styles.mobileNavPanel}>
            <div className={styles.mobileNavLinks}>
              {links.map(([label, href]) => <NavigationLink key={label} label={label} href={href} />)}
            </div>
            <SiteCta className={styles.mobileNavCta} label={ctaLabel} shortLabel={ctaShortLabel} />
          </div>
        </details>
      </nav>
    </header>
  );
}

function FooterLink({ link }) {
  const [label, href] = Array.isArray(link)
    ? link
    : [link?.label, link?.href];

  if (!label || !href) return null;

  return label === 'Contact us'
    ? <ContactUsButton className={styles.footerContactTrigger}>{label}</ContactUsButton>
    : <a href={href}>{label}</a>;
}

function FooterColumn({ title, links }) {
  const linkedItems = links.filter((link) => (
    Array.isArray(link) ? Boolean(link[0] && link[1]) : Boolean(link?.label && link?.href)
  ));

  if (linkedItems.length === 0) return null;

  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {linkedItems.map((link) => {
        const label = Array.isArray(link) ? link[0] : link.label;
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
            <SampleReportButton />
          </div>
        </div>
        <div className="home-v2-footer-links">
          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Social" links={socialLinks} />
        </div>
      </div>
      <div className="home-v2-footer-bottom">
        <p>{legalNotice}<br />{safetyNotice}<br />{safetyNoticeEnd}</p>
        {legalLinks.length > 0 ? (
          <div>
            {legalLinks.map((link) => {
              const label = Array.isArray(link) ? link[0] : link.label;
              return <FooterLink key={label} link={link} />;
            })}
          </div>
        ) : null}
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
