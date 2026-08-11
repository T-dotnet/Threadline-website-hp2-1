import { Button, Card, SectionHeader, TextLink } from './design-system/components.jsx';
import { Container, Eyebrow, Grid, Heading, Section, Stack, Surface, Text } from './design-system/primitives.jsx';
import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import { POLICY_DOCUMENT_INDEX, POLICY_PACK } from './content/policy-documents.js';
import styles from './TrustContentHubPage.module.css';

const DOCUMENTS = POLICY_DOCUMENT_INDEX.filter((document) => document.slug !== 'urgent-help');
const URGENT_HELP = POLICY_DOCUMENT_INDEX.find((document) => document.slug === 'urgent-help');

const PAGE_LINKS = [
  ['Information handling', '#information-handling'],
  ['Clinical boundaries', '#clinical-boundaries'],
  ['Trust & legal documents', '#documents'],
  ['Urgent help', '#urgent-help'],
  ['Contact Threadline', '#contact'],
];

const INFORMATION_PRACTICES = [
  {
    title: 'Clear purposes and consent',
    body: 'Threadline collects personal and health information to provide the service, prepare an Assessment Package, operate the service safely and meet legal obligations. Sensitive information is handled with consent.',
  },
  {
    title: 'Family-directed sharing',
    body: 'Families decide when to share a completed Assessment Package with their chosen healthcare professional. Approved service providers may process information only to help operate the service.',
  },
  {
    title: 'Defined protection and retention',
    body: 'Threadline applies access controls, encryption, monitoring, provider assessment and incident response, and retains information only for defined purposes and periods.',
  },
];

const CLINICAL_BOUNDARIES = [
  'Threadline helps families collect, organise and present information for review by a qualified healthcare professional.',
  'Threadline does not diagnose, screen for or predict ADHD, recommend treatment, provide medical advice or replace clinical judgement.',
  'The healthcare professional remains responsible for interpreting the information and making all diagnostic and treatment decisions.',
  'Threadline is not an emergency or crisis service.',
];

export default function TrustContentHubPage() {
  return (
    <div className={styles.page}>
      <SiteNavigation />
      <main className={styles.main}>
        <Section className={styles.heroSection}>
          <Container size="wide">
            <Surface tone="soft" className={styles.heroPanel}>
              <Stack gap={8} className={styles.heroCopy}>
                <Stack gap={5}>
                  <Eyebrow>Trust &amp; security</Eyebrow>
                  <Heading as="h1" size="display">Policies built around sensitive family information.</Heading>
                  <Text size="lg" tone="muted" className={styles.heroDescription}>
                    Threadline helps families collect and organise information for an ADHD assessment. These documents explain how that information is handled, the boundaries of the service and what families can expect.
                  </Text>
                </Stack>
                <div className={styles.heroActions}>
                  <Button href="/privacy">Read the Privacy Policy</Button>
                  <Button href="#documents" variant="secondary">Browse all documents</Button>
                </div>
              </Stack>

              <nav className={styles.anchorNav} aria-label="On this page">
                <Eyebrow>On this page</Eyebrow>
                <div className={styles.anchorLinks}>
                  {PAGE_LINKS.map(([label, href]) => (
                    <TextLink className={styles.anchorLink} href={href} key={href}>{label}</TextLink>
                  ))}
                </div>
              </nav>
            </Surface>
          </Container>
        </Section>

        <Section className={styles.practicesSection} id="information-handling">
          <Container size="wide">
            <Stack gap={8}>
              <SectionHeader
                className={styles.sectionHeader}
                eyebrow="Privacy and information handling"
                title="What the policy pack commits Threadline to"
                description="The overview below is drawn from the Privacy Policy and Privacy Impact Assessment. The complete wording is available in the linked documents."
              />
              <Grid columns={3} className={styles.practiceGrid}>
                {INFORMATION_PRACTICES.map((practice, index) => (
                  <Card
                    className={styles.practiceCard}
                    eyebrow={`0${index + 1}`}
                    title={practice.title}
                    key={practice.title}
                  >
                    {practice.body}
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section className={styles.boundariesSection} id="clinical-boundaries">
          <Container size="wide">
            <Surface className={styles.boundariesPanel}>
              <Stack gap={5} className={styles.boundariesHeading}>
                <Eyebrow>Clinical information and product boundaries</Eyebrow>
                <Heading>Supporting assessment, not replacing it.</Heading>
                <Text tone="muted">Threadline is an assessment-preparation service. It does not provide clinical care.</Text>
                <TextLink href="/clinical-information">Read the full clinical boundaries</TextLink>
              </Stack>
              <ol className={styles.boundariesList}>
                {CLINICAL_BOUNDARIES.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </Surface>
          </Container>
        </Section>

        <Section className={styles.documentsSection} id="documents">
          <Container size="wide">
            <Stack gap={8}>
              <SectionHeader
                className={styles.sectionHeader}
                eyebrow={`${POLICY_PACK.title} · Version ${POLICY_PACK.version}`}
                title="Trust, privacy and legal documents"
                description="Each document includes its owner, publication status and complete Version 1.0 content from the policy pack."
              />
              <Grid columns={3} className={styles.documentGrid}>
                {DOCUMENTS.map((document) => (
                  <Card
                    className={styles.documentCard}
                    eyebrow={document.owner}
                    footer={<TextLink href={document.href}>View document</TextLink>}
                    title={document.title}
                    key={document.slug}
                  >
                    {document.description}
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section className={styles.urgentSection} id="urgent-help">
          <Container size="wide">
            <Surface tone="soft" className={styles.urgentPanel}>
              <Stack gap={4}>
                <Eyebrow>Urgent help</Eyebrow>
                <Heading as="h2">Threadline is not an emergency or crisis service.</Heading>
                <Text tone="muted">If someone is in immediate danger, call 000. Do not wait for a response from Threadline.</Text>
              </Stack>
              <Button href={URGENT_HELP.href} variant="secondary">View crisis and emergency contacts</Button>
            </Surface>
          </Container>
        </Section>

        <Section className={styles.contactSection} id="contact">
          <Container size="wide">
            <div className={styles.contactRule} />
            <div className={styles.contactLayout}>
              <Stack gap={4}>
                <Eyebrow>Public contact</Eyebrow>
                <Heading as="h2">Questions, requests or concerns?</Heading>
              </Stack>
              <Text size="lg" tone="muted">
                Contact <a href={`mailto:${POLICY_PACK.contact}`}>{POLICY_PACK.contact}</a>. Use the subject line specified in the relevant policy so the request reaches the right owner.
              </Text>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
