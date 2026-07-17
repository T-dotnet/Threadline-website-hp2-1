import { Frank_Ruhl_Libre, Fraunces, Funnel_Sans } from 'next/font/google';
import '../src/design-system/tokens.css';
import '../src/design-system/styles.css';
import '../src/design-system/style-guide.css';
import '../src/styles.css';

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-funnel-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  axes: ['SOFT', 'WONK', 'opsz'],
  display: 'swap',
  variable: '--font-fraunces',
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-frank-ruhl-libre',
});

export const metadata = {
  title: 'Threadline — ADHD assessment preparation',
  description: "Threadline organises everything your child's clinician needs before an ADHD assessment.",
  icons: { icon: '/threadline-logo.svg' },
};

export const viewport = {
  themeColor: '#f5f7f6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${funnelSans.variable} ${fraunces.variable} ${frankRuhlLibre.variable}`}>
      <body>{children}</body>
    </html>
  );
}
