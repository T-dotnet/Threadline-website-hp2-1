import { notFound } from 'next/navigation';
import PolicyDocumentPage from '../../../src/PolicyDocumentPage.jsx';
import { getTrustDocument, TRUST_DOCUMENTS } from '../../../src/content/policy-documents.js';

export function generateStaticParams() {
  return Object.keys(TRUST_DOCUMENTS).map((document) => ({ document }));
}

export async function generateMetadata({ params }) {
  const { document: slug } = await params;
  const document = getTrustDocument(slug);
  if (!document) return {};
  return { title: `${document.title} — Threadline`, description: document.description };
}

export default async function TrustDocumentRoute({ params }) {
  const { document: slug } = await params;
  const document = getTrustDocument(slug);
  if (!document) notFound();
  return <PolicyDocumentPage document={document} />;
}
