import { notFound } from 'next/navigation';
import PolicyDocumentPage from '../../src/PolicyDocumentPage.jsx';
import { getTopLevelDocument, TOP_LEVEL_DOCUMENTS } from '../../src/content/policy-documents.js';

export function generateStaticParams() {
  return Object.keys(TOP_LEVEL_DOCUMENTS).map((document) => ({ document }));
}

export async function generateMetadata({ params }) {
  const { document: slug } = await params;
  const document = getTopLevelDocument(slug);
  if (!document) return {};
  return { title: `${document.title} — Threadline`, description: document.description };
}

export default async function TopLevelDocumentRoute({ params }) {
  const { document: slug } = await params;
  const document = getTopLevelDocument(slug);
  if (!document) notFound();
  return <PolicyDocumentPage document={document} />;
}
