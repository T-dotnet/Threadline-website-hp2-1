import Image from 'next/image';
import ContactUsButton from '../../src/ContactUsModal.jsx';
import { SiteAction } from '../../src/components/site-actions.jsx';
import { SectionLabel } from '../../src/components/website-sections.jsx';
import { Container, Heading, Text, VisuallyHidden } from '../../src/design-system/primitives.jsx';
import styles from './private-preview.module.css';

export const metadata = {
  title: 'Private preview — Threadline',
  description: 'Threadline private preview access.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PrivatePreviewPage() {
  return (
    <div className={styles.page}>
      <Image
        className={styles.background}
        src="/home-hero-watercolour.jpg"
        fill
        priority
        alt=""
        sizes="100vw"
      />

      <main className={styles.main}>
        <Container as="section" size="narrow" className={styles.panel} aria-labelledby="private-preview-title">
          <a className={styles.brand} href="/" aria-label="Threadline home">
            <Image src="/threadline-logo.svg" width={256} height={41} alt="Threadline" priority />
          </a>
          <div className={styles.intro}>
            <SectionLabel>PRIVATE PREVIEW</SectionLabel>
            <Heading as="h1" size="display" id="private-preview-title" className={styles.heading}>
              Every child understood.
            </Heading>
            <Text size="md" tone="muted" className={styles.description}>
              Threadline is currently being shaped with a small group of invited clinicians and families.
            </Text>
            <Text size="md" tone="muted">
              Enter your access code to continue.
            </Text>
          </div>

          <form className={styles.form} action="/">
            <VisuallyHidden as="label" htmlFor="private-preview-access-code">
              Access code
            </VisuallyHidden>
            <input
              className={styles.input}
              id="private-preview-access-code"
              type="password"
              autoComplete="one-time-code"
              placeholder="Access code"
              required
            />
            <SiteAction className={styles.submit} type="submit">
              Enter Threadline
            </SiteAction>
          </form>

          <div className={styles.support}>
            <Text size="sm" tone="muted" className={styles.supportText}>
              Invited but having trouble accessing the preview?
            </Text>
            <ContactUsButton className={styles.contact}>Contact us</ContactUsButton>
          </div>
        </Container>
      </main>
    </div>
  );
}
