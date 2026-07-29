import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

type SanityImageSource = Record<string, unknown> | string;

type SanityQueryParams = Record<string, unknown>;

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
const apiVersionPath = apiVersion.startsWith('v') ? apiVersion : `v${apiVersion}`;
const useCdn = import.meta.env.PROD && import.meta.env.VITE_SANITY_USE_CDN !== 'false';

function getSanityApiUrl() {
  if (import.meta.env.DEV) {
    return `/api/sanity/${apiVersionPath}/data/query/${dataset}`;
  }

  return `https://${projectId}.api.sanity.io/${apiVersionPath}/data/query/${dataset}`;
}

async function sanityFetch<T>(query: string, params?: SanityQueryParams): Promise<T> {
  const response = await fetch(getSanityApiUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, params }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Sanity request failed (${response.status}): ${errorBody}`);
  }

  const payload = await response.json();
  return payload.result as T;
}

export interface InsightArticle {
  _id: string;
  title: string;
  slug?: string;
  featuredImage?: SanityImageSource;
  summary?: string;
  body?: Array<Record<string, unknown>>;
  author?: string;
  category?: string;
  tags?: string[];
  datePublished?: string;
  seoTitle?: string;
  seoDescription?: string;
  featuredArticle?: boolean;
}

const hasSanityConfig = Boolean(projectId);

export const sanityClient = hasSanityConfig
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  return builder?.image(source).auto('format').fit('max').url() || '';
}

const insightProjection = `{
  _id,
  title,
  "slug": slug.current,
  featuredImage,
  summary,
  body,
  author,
  category,
  tags,
  datePublished,
  seoTitle,
  seoDescription,
  featuredArticle
}`;

export async function getInsights(limit = 12): Promise<InsightArticle[]> {
  if (!sanityClient) {
    return [];
  }

  const query = `*[_type == "insight" && !(_id in path("drafts.**"))] | order(datePublished desc) [0...$limit] ${insightProjection}`;

  return sanityFetch<InsightArticle[]>(query, { limit });
}

export async function getLatestInsights(limit = 3): Promise<InsightArticle[]> {
  return getInsights(limit);
}

export async function getInsightBySlug(slug: string): Promise<InsightArticle | null> {
  if (!sanityClient || !slug) {
    return null;
  }

  const query = `*[_type == "insight" && slug.current == $slug && !(_id in path("drafts.**"))][0] ${insightProjection}`;

  return sanityFetch<InsightArticle | null>(query, { slug });
}
