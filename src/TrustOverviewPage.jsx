import { Button, Card, CheckList, SectionHeader, TextLink } from './design-system/components.jsx';
import { Cluster, Container, Eyebrow, Grid, Heading, Section, Stack, Surface, Text } from './design-system/primitives.jsx';
import { SiteFooter, SiteNavigation } from './components/site-chrome.jsx';
import styles from './TrustOverviewPage.module.css';

const COMMITMENTS = [
  ['We collect information for clear purposes', 'We collect information that is reasonably necessary to provide the Threadline service, prepare an Assessment Package and operate the service safely.'],
  ['We do not sell personal information', 'Threadline does not sell personal or health information to advertisers, data brokers or any other third party.'],
  ['Families control clinical sharing', 'Families choose when their completed Assessment Package is shared with their healthcare professional, except where disclosure is required or permitted by law.'],
  ['Access is limited', 'Access to personal and health information is limited to authorised people and approved service providers who need it to perform their role.'],
];

const LIFECYCLE = [
  ['1. Collected', 'Families provide information directly and may invite other people, such as a teacher, to contribute information.'],
  ['2. Organised', 'Threadline structures the information into an Assessment Package for review by a healthcare professional.'],
  ['3. Stored', 'Information is stored using approved systems and service providers and protected through technical and organisational safeguards.'],
  ['4. Shared', 'Families decide when to make their completed Assessment Package available to their healthcare professional.'],
  ['5. Retained or deleted', 'Information is retained for defined purposes and periods, then securely deleted or de-identified when no longer needed.'],
];

const PROTECTIONS = [
  ['Secure access', 'Access to Threadline systems is restricted according to role, responsibility and operational need.'],
  ['Encryption', 'Threadline uses encryption and secure communication methods to protect information during transmission and storage.'],
  ['Secure development', 'Changes to Threadline are reviewed, tested and released through controlled development processes.'],
  ['Monitoring and recovery', 'Threadline maintains monitoring, backup and recovery processes appropriate to the service and the information it handles.'],
  ['People and providers', 'Staff and relevant service providers are subject to confidentiality, privacy and security requirements.'],
  ['Incident response', 'Threadline maintains processes for identifying, investigating, containing and responding to privacy and security incidents.'],
];

const DOCUMENTS = [
  ['Privacy Policy', '/privacy', 'How Threadline collects, uses, stores, shares and protects personal information.'],
  ['Privacy Impact Assessment – Public Summary', '/trust/privacy-impact-assessment', 'The privacy risks assessed and the measures used to manage them.'],
  ['Service Provider Register', '/trust/service-providers', 'The technology providers that help us deliver and operate Threadline.'],
  ['Responsible Disclosure Policy', '/trust/security-reporting', 'How to report a suspected security vulnerability or concern.'],
  ['Terms of Service', '/terms', 'The terms that apply when families use Threadline.'],
  ['Clinical Information and Product Boundaries', '/clinical-information', 'What Threadline is for, what it does not do, and its regulatory position.'],
  ['Refund Policy', '/refunds', 'When a refund may be available and how to request one.'],
  ['Cookie Policy', '/cookies', 'How cookies and similar technologies are used on the website.'],
  ['Complaints & Feedback Policy', '/complaints', 'How families and clinicians can provide feedback or raise a concern.'],
];

const PAGE_LINKS = [
  ['Our commitments', '#commitments'],
  ['How information is handled', '#information-handling'],
  ['How we protect information', '#information-protection'],
  ['Privacy by design', '#privacy-by-design'],
  ['Your privacy rights', '#privacy-rights'],
  ['Clinical boundaries', '#clinical-boundaries'],
  ['Quality and security', '#quality-security'],
  ['Trust & legal documents', '#trust-legal'],
];

export default function TrustOverviewPage() {
  return (
    <div className={`page-shell ${styles.page}`}>
      <SiteNavigation />
      <main className={styles.main}>
        <Section className={styles.heroSection}>
          <Container size="wide">
            <Surface tone="soft" className={styles.heroCard}>
              <Stack gap={8} className={styles.heroCopy}>
                <Stack gap={6}>
                  <Eyebrow>Trust &amp; security</Eyebrow>
                  <Heading as="h1" size="display">Privacy, security and trust</Heading>
                  <Text size="lg" tone="muted" className={styles.heroDescription}>Families share sensitive personal and health information with Threadline, including information about children. We design our service to protect that information, use it only for clear purposes, and give families meaningful control over how it is shared.</Text>
                </Stack>
                <Cluster className={styles.heroActions}>
                  <Button href="/privacy">Read our Privacy Policy</Button>
                  <Button href="/trust/privacy-impact-assessment" variant="secondary">View our privacy assessment</Button>
                </Cluster>
                <Text size="sm" tone="muted" className={styles.heroNote}>Threadline is developing formal information security and quality management systems. We are not currently ISO certified.</Text>
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

        <Section className={styles.commitmentsSection} id="commitments">
          <Container size="wide">
            <Stack gap={8}>
              <SectionHeader className={styles.sectionHeader} title="Our commitments" description="Clear commitments for the information families share with Threadline." />
              <Grid columns={4} className={styles.commitmentGrid}>
                {COMMITMENTS.map(([title, body]) => <Card className={styles.commitmentCard} title={title} key={title}>{body}</Card>)}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section className={styles.lifecycleSection} id="information-handling">
          <Container size="wide">
            <div className={styles.lifecycleLayout}>
              <SectionHeader className={styles.lifecycleHeading} title="How information is handled" description="From collection through to retention or deletion." />
              <div className={styles.lifecycleList}>
                {LIFECYCLE.map(([title, body]) => (
                  <article className={styles.lifecycleItem} key={title}>
                    <Heading as="h3" size="card">{title}</Heading>
                    <Text tone="muted">{body}</Text>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className={styles.protectionSection} id="information-protection">
          <Container size="wide">
            <Stack gap={8}>
              <SectionHeader className={styles.sectionHeader} title="How we protect information" />
              <Grid columns={3} className={styles.protectionGrid}>
                {PROTECTIONS.map(([title, body]) => <Card className={styles.protectionCard} title={title} key={title}>{body}</Card>)}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section className={styles.privacySection} id="privacy-by-design">
          <Container size="wide">
            <Surface tone="soft" className={styles.privacyPanel}>
              <SectionHeader
                className={styles.sectionHeader}
                eyebrow="Privacy by design"
                title="Privacy is considered from the start."
              />
              <Stack gap={6} className={styles.privacyCopy}>
                <Text tone="muted">Threadline uses a Privacy Impact Assessment process to understand how personal and health information moves through the service, identify potential privacy risks and determine how those risks should be managed.</Text>
                <Text tone="muted">Our public PIA summary describes what was assessed, the information and data flows considered, the key privacy risks identified, the safeguards introduced, and how and when the assessment will be reviewed.</Text>
                <TextLink href="/trust/privacy-impact-assessment">View the public summary</TextLink>
              </Stack>
            </Surface>
          </Container>
        </Section>

        <Section className={styles.rightsSection} id="privacy-rights">
          <Container size="wide">
            <div className={styles.rightsLayout}>
              <Stack gap={8} className={styles.rightsCopy}>
                <SectionHeader className={styles.sectionHeader} title="Your privacy rights" description="You can contact Threadline to:" />
                <CheckList className={styles.rightsList} items={[
                  'Ask what personal information we hold about you',
                  'Request access to your information',
                  'Ask us to correct inaccurate or incomplete information',
                  'Ask how your information has been used or shared',
                  'Request deletion where Threadline is legally and operationally able to do so',
                  'Raise a privacy concern or complaint',
                ]} />
              </Stack>
              <Surface tone="soft" className={styles.contactPanel}>
                <Eyebrow>Privacy requests</Eyebrow>
                <Text>Contact <a href="mailto:support@threadline.com.au">support@threadline.com.au</a> using the subject line “Privacy request” or “Privacy complaint”.</Text>
                <Text tone="muted">We aim to acknowledge privacy requests and complaints within 5 business days and to respond within 30 days.</Text>
              </Surface>
            </div>
          </Container>
        </Section>

        <Section className={styles.boundariesSection} id="clinical-boundaries">
          <Container size="wide">
            <Stack gap={8}>
              <SectionHeader className={styles.sectionHeader} title="Supporting assessment, not replacing it" />
              <Grid columns={2} className={styles.boundaryGrid}>
                <Card className={styles.boundaryCard} eyebrow="Threadline supports" title="What Threadline does"><CheckList items={['Helps families collect and organise information', 'Structures information for clinical review', 'Supports sharing with healthcare professionals', 'Identifies where information came from', 'Helps reduce administrative fragmentation']} /></Card>
                <Card className={styles.boundaryCard} eyebrow="Clinical boundaries" title="What Threadline does not do"><CheckList items={['Diagnose, screen for or predict ADHD', 'Recommend treatment', 'Replace clinical judgement', 'Guarantee that the available information is sufficient for diagnosis', 'Provide emergency or crisis services']} /></Card>
              </Grid>
              <Text tone="muted" className={styles.boundaryNote}>A qualified healthcare professional remains responsible for interpreting the information, determining whether anything further is required and making all diagnostic and treatment decisions.</Text>
            </Stack>
          </Container>
        </Section>

        <Section className={styles.programSection} id="quality-security">
          <Container size="wide">
            <div className={styles.programLayout}>
              <Stack gap={6} className={styles.programIntro}>
                <SectionHeader className={styles.sectionHeader} title="Quality and security program" description="Threadline is establishing an integrated information security and quality management system." />
                <Grid columns={2} className={styles.standardGrid}>
                  <Card className={styles.standardCard} title="ISO/IEC 27001:2022"><Text tone="muted">In progress (not certified)</Text></Card>
                  <Card className={styles.standardCard} title="ISO 13485:2016"><Text tone="muted">In progress (not certified)</Text></Card>
                </Grid>
                <Text size="sm" tone="muted">Control statuses for privacy governance, risk assessment, incident response, service-provider review, secure development and penetration testing are completed at publication after final verification.</Text>
              </Stack>
              <Surface tone="soft" className={styles.providerPanel}>
                <Stack gap={6}>
                  <Heading as="h3" size="card">Technology providers</Heading>
                  <Text tone="muted">Threadline uses selected technology providers to operate and support the service. Our Service Provider Register explains which providers may process personal information, what service each provider performs, what categories of information may be involved, and where information may be processed or stored.</Text>
                  <TextLink href="/trust/service-providers">View our Service Provider Register</TextLink>
                </Stack>
              </Surface>
            </div>
          </Container>
        </Section>

        <Section className={styles.documentsSection} id="trust-legal">
          <Container size="wide">
            <Stack gap={8}>
              <SectionHeader className={styles.sectionHeader} title="Trust &amp; legal documents" description="Policies and supporting documents for families and clinicians." />
              <Grid columns={3} className={styles.documentGrid}>
                {DOCUMENTS.map(([title, href, body]) => <Card className={styles.documentCard} title={title} footer={<TextLink href={href}>View document</TextLink>} key={title}>{body}</Card>)}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section className={styles.closingSection}>
          <Container size="wide">
            <Surface tone="soft" className={styles.closingPanel}>
              <Stack gap={6} className={styles.closingCopy}>
                <Eyebrow>Here to help</Eyebrow>
                <Heading as="h2">Questions or concerns?</Heading>
                <Text tone="muted">Contact <a href="mailto:support@threadline.com.au">support@threadline.com.au</a> using the subject line Privacy request, Privacy complaint, Security report, Refund request or General support. Please do not include personal or health information in an initial security report.</Text>
              </Stack>
              <Button href="/urgent-help" variant="secondary">View Urgent Help</Button>
            </Surface>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
