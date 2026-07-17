import {
  Badge,
  Button,
  Callout,
  Card,
  Cluster,
  Container,
  Divider,
  Eyebrow,
  Footer,
  Grid,
  Heading,
  Section,
  SectionHeader,
  Stack,
  Stat,
  Surface,
  Text,
  TopNavigation,
} from '../../src/design-system/index.js';

export const metadata = {
  title: 'Design system — Threadline',
  description: 'Threadline design tokens, styles, primitives and reusable components.',
};

const colours = [
  ['Forest 900', '--ds-color-forest-900', '#0b4636'],
  ['Forest 700', '--ds-color-forest-700', '#108560'],
  ['Forest 200', '--ds-color-forest-200', '#8acdb7'],
  ['Forest 50', '--ds-color-forest-50', '#e6f4ed'],
  ['Canvas', '--ds-color-canvas', '#f5f7f6'],
  ['Surface', '--ds-color-surface', '#ffffff'],
  ['Wash blue', '--ds-color-wash-blue', '#dfeef1'],
  ['Wash cream', '--ds-color-wash-cream', '#f4eee2'],
];

const spacing = [
  ['2', '--ds-space-2', '8px'],
  ['4', '--ds-space-4', '16px'],
  ['6', '--ds-space-6', '24px'],
  ['8', '--ds-space-8', '32px'],
  ['12', '--ds-space-12', '48px'],
  ['16', '--ds-space-16', '64px'],
  ['24', '--ds-space-24', '96px'],
];

const cornerStyles = [
  ['Small', '--ds-radius-sm', '8px'],
  ['Medium', '--ds-radius-md', '16px'],
  ['Large', '--ds-radius-lg', '32px'],
  ['Organic', '--ds-radius-organic', '0 64px 0 0'],
];

const guideLinks = [
  { label: 'Tokens', href: '#tokens' },
  { label: 'Styles', href: '#styles' },
  { label: 'Sections', href: '#sections' },
  { label: 'Primitives', href: '#primitives' },
  { label: 'Components', href: '#components' },
];

const websiteSections = [
  ['HeroSection', 'Page opening with editorial heading, primary action, report action and layered imagery.'],
  ['GuidelineSection', 'Evidence or standards statement with supporting copy and an external reference.'],
  ['ProblemSection', 'High-impact narrative panel paired with a concise list of user pain points.'],
  ['IntroSection', 'Reusable section transition for output, process, benefits and pricing chapters.'],
  ['ReportSection', 'Structured evidence list, supporting note, sample action and report preview.'],
  ['ProcessSection', 'Numbered preparation steps paired with layered product imagery.'],
  ['BenefitsSection', 'Responsive benefit-card collection over a branded image surface.'],
  ['PricingSection', 'Included-items list paired with price, billing context and primary action.'],
  ['FaqSection', 'Accessible disclosure group driven by question-and-answer data.'],
  ['ImportantSection', 'Prominent disclaimer or safety notice for clinical boundaries.'],
];

function TokenSwatch({ name, token, value }) {
  return (
    <article className="style-guide__swatch">
      <div className="style-guide__swatch-color" style={{ '--swatch': `var(${token})` }} />
      <Stack gap={2} className="style-guide__swatch-copy">
        <Text as="strong" size="sm">{name}</Text>
        <code>{value}</code>
        <code>{token}</code>
      </Stack>
    </article>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="style-guide" id="top">
      <TopNavigation
        brand="Threadline system"
        links={guideLinks}
        ariaLabel="Style guide"
        action={<Button href="/" variant="secondary" size="sm">Back to site</Button>}
      />

      <main>
        <div className="style-guide__hero">
          <Container size="wide">
            <Stack gap={6} className="style-guide__hero-copy">
              <Badge>Design system · v1</Badge>
              <Heading as="h1" size="display">A calm, credible system for assessment preparation.</Heading>
              <Text size="lg" tone="muted">Threadline’s system pairs clinical clarity with a warm editorial character. Each layer below is implemented in code and available to the product.</Text>
              <Cluster>
                <Button href="#components">Browse components</Button>
                <Button href="#tokens" variant="secondary">View tokens</Button>
              </Cluster>
            </Stack>
          </Container>
        </div>

        <Section id="tokens">
          <Container size="wide">
            <Stack gap={12}>
              <SectionHeader
                eyebrow="01 · Tokens"
                title="Shared decisions, named once."
                description="Primitive values map to semantic roles so product code expresses intent instead of hard-coded values."
              />
              <Stack gap={6}>
                <Heading as="h3" size="card">Colour</Heading>
                <div className="style-guide__token-grid">
                  {colours.map(([name, token, value]) => <TokenSwatch key={token} name={name} token={token} value={value} />)}
                </div>
              </Stack>
              <Stack gap={6}>
                <Heading as="h3" size="card">Spacing</Heading>
                {spacing.map(([name, token, value]) => (
                  <div className="style-guide__spacing-row" key={token}>
                    <code className="style-guide__token-name">{name}</code>
                    <div className="style-guide__spacing-bar" style={{ '--space-width': `var(${token})` }} />
                    <Text size="sm" tone="muted">{value}</Text>
                  </div>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Section>

        <Divider />

        <Section id="styles">
          <Container size="wide">
            <Stack gap={12}>
              <SectionHeader
                eyebrow="02 · Styles"
                title="Editorial warmth, practical hierarchy."
                description="Fraunces carries the human voice while Funnel Sans keeps interfaces direct and readable."
              />
              <div>
                <div className="style-guide__type-row">
                  <code className="style-guide__token-name">Display / Fraunces</code>
                  <p className="style-guide__type-sample style-guide__type-sample--display">Be assessment ready.</p>
                </div>
                <div className="style-guide__type-row">
                  <code className="style-guide__token-name">Section / Fraunces</code>
                  <p className="style-guide__type-sample style-guide__type-sample--section">A clearer starting point.</p>
                </div>
                <div className="style-guide__type-row">
                  <code className="style-guide__token-name">Card / Fraunces</code>
                  <p className="style-guide__type-sample style-guide__type-sample--card">Tell your child’s story.</p>
                </div>
                <div className="style-guide__type-row">
                  <code className="style-guide__token-name">Body / Funnel Sans</code>
                  <p className="style-guide__type-sample style-guide__type-sample--body">Bring every source together in a structured, clinician-ready report.</p>
                </div>
                <div className="style-guide__type-row">
                  <code className="style-guide__token-name">Label / Funnel Sans</code>
                  <p className="style-guide__type-sample style-guide__type-sample--label">Assessment preparation</p>
                </div>
              </div>
              <Stack gap={6} id="shape">
                <Stack gap={3} className="style-guide__section-copy">
                  <Heading as="h3" size="card">Corner radius</Heading>
                  <Text tone="muted">Soft corners make interface surfaces feel approachable, while the organic corner gives editorial sections a recognisable Threadline silhouette.</Text>
                </Stack>
                <div className="style-guide__shape-grid">
                  {cornerStyles.map(([name, token, value]) => (
                    <article className="style-guide__shape-card" key={token}>
                      <div className="style-guide__shape-preview" style={{ '--shape-radius': `var(${token})` }} />
                      <Stack gap={2}>
                        <Text as="strong" size="sm">{name}</Text>
                        <code>{value}</code>
                        <code>{token}</code>
                      </Stack>
                    </article>
                  ))}
                </div>
              </Stack>
            </Stack>
          </Container>
        </Section>

        <Surface tone="soft">
          <Section id="primitives">
            <Container size="wide">
              <Stack gap={12}>
                <SectionHeader
                  eyebrow="03 · Primitives"
                  title="Small layout tools with clear jobs."
                  description="Container, Section, Stack, Cluster, Grid, Surface, Heading, Text, Eyebrow and Divider create consistent composition without page-specific CSS."
                />
                <Surface padded bordered>
                  <Grid columns={3}>
                    <Stack gap={3}>
                      <Eyebrow>Stack</Eyebrow>
                      <Heading as="h3" size="card">Vertical rhythm</Heading>
                      <Text tone="muted">A predictable flow for related content.</Text>
                    </Stack>
                    <Stack gap={3}>
                      <Eyebrow>Grid</Eyebrow>
                      <Heading as="h3" size="card">Responsive structure</Heading>
                      <Text tone="muted">Equal columns collapse cleanly on smaller screens.</Text>
                    </Stack>
                    <Stack gap={3}>
                      <Eyebrow>Surface</Eyebrow>
                      <Heading as="h3" size="card">Semantic grouping</Heading>
                      <Text tone="muted">Tone, border, depth and padding are explicit props.</Text>
                    </Stack>
                  </Grid>
                </Surface>
              </Stack>
            </Container>
          </Section>
        </Surface>

        <Section id="components">
          <Container size="wide">
            <Stack gap={12}>
              <SectionHeader
                eyebrow="04 · Components"
                title="Ready-to-use product patterns."
                description="Components compose the primitives and keep interaction, tone and spacing consistent. The top navigation and footer on this page are live instances."
              />

              <Stack gap={6} id="sections">
                <Stack gap={3} className="style-guide__section-copy">
                  <Eyebrow>Website sections</Eyebrow>
                  <Heading as="h3" size="section">Compose new pages from proven sections.</Heading>
                  <Text size="lg" tone="muted">Each section is a server component with content, imagery and anchors supplied through props. The homepage now uses this same public section API.</Text>
                </Stack>
                <Grid columns={3}>
                  {websiteSections.map(([name, description]) => (
                    <Card eyebrow="Section component" title={name} key={name}>{description}</Card>
                  ))}
                </Grid>
              </Stack>

              <Stack gap={8}>
                <Surface padded bordered>
                  <Stack gap={6}>
                    <Heading as="h3" size="card">Actions and status</Heading>
                    <Cluster>
                      <Button>Primary action</Button>
                      <Button variant="secondary">Secondary action</Button>
                      <Button variant="quiet">Quiet action</Button>
                      <Button size="sm">Small</Button>
                      <Badge>Evidence received</Badge>
                    </Cluster>
                  </Stack>
                </Surface>

                <Grid columns={3}>
                  <Card
                    eyebrow="Parent input"
                    title="Tell your child’s story"
                    footer={<Button variant="secondary" size="sm">Continue</Button>}
                  >
                    Record developmental history, daily functioning and the context your clinician needs.
                  </Card>
                  <Card
                    eyebrow="School input"
                    title="Invite a teacher"
                    footer={<Button variant="secondary" size="sm">Send invite</Button>}
                  >
                    Collect observations from school without chasing paper forms.
                  </Card>
                  <Card
                    eyebrow="Your report"
                    title="See what is ready"
                    footer={<Button variant="secondary" size="sm">Preview report</Button>}
                  >
                    Review every source and spot information that may still need follow-up.
                  </Card>
                </Grid>

                <div className="style-guide__preview">
                  <Grid columns={2}>
                    <Stack gap={4}>
                      <Callout title="Clinician responsibility">Threadline organises assessment evidence. It does not diagnose ADHD or replace clinical judgement.</Callout>
                      <Callout title="Before sharing" tone="warning" marker="!">Check that names, dates and uploaded reports are accurate.</Callout>
                    </Stack>
                    <Grid columns={2}>
                      <Stat value="4 of 5" label="Sources complete" detail="Teacher response is outstanding" />
                      <Stat value="82%" label="Preparation progress" detail="Updated just now" />
                    </Grid>
                  </Grid>
                </div>
              </Stack>
            </Stack>
          </Container>
        </Section>
      </main>

      <Footer
        brand="Threadline system"
        description="Built from the live product language and available to every Threadline surface."
        links={guideLinks}
        legal="© 2026 Threadline · Design system v1"
        action={<Button href="#top" variant="quiet" size="sm">Back to top</Button>}
      />
    </div>
  );
}
