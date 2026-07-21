import { notFound } from 'next/navigation';
import ResourceArticlePage from '../../../src/ResourceArticlePage.jsx';
import { getResourceArticle, RESOURCE_ARTICLES } from '../../../src/content/resource-articles.js';

export function generateStaticParams() {
  return RESOURCE_ARTICLES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getResourceArticle(slug);

  if (!article) return {};

  return {
    title: `${article.title} — Threadline`,
    description: article.description,
  };
}

export default async function ResourceArticleRoute({ params }) {
  const { slug } = await params;
  const article = getResourceArticle(slug);

  if (!article) notFound();

  return <ResourceArticlePage article={article} />;
}
