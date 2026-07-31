import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(packageRoot, 'dist');
const siteUrl = 'https://northpolesolicitors.com';
const sitemapSiteUrl = 'https://www.northpolesolicitors.com';
const siteName = 'NorthPole Solicitors';
const defaultTitle = 'NorthPole Solicitors | Full-Service Law Firm in Nigeria';
const defaultDescription =
  'NorthPole Solicitors is a full-service law firm in Nigeria providing practical legal solutions in Corporate & Commercial Law, Intellectual Property, Real Estate, Dispute Resolution and more.';
const defaultSocialImage = 'https://www.northpolesolicitors.com/images/social-preview.png?v=2';
const defaultSocialImageWidth = '1734';
const defaultSocialImageHeight = '907';

const fixedRoutes = {
  '/': {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
  },
  '/about': {
    title: 'About Us | NorthPole Solicitors',
    description: "Learn about NorthPole Solicitors' founding story, mission, and values.",
    type: 'website',
  },
  '/practice-areas': {
    title: 'Practice Areas | NorthPole Solicitors',
    description: 'Explore the comprehensive legal services offered by NorthPole Solicitors.',
    type: 'website',
  },
  '/team': {
    title: 'Our Team | NorthPole Solicitors',
    description: 'Meet the experienced legal professionals at NorthPole Solicitors.',
    type: 'website',
  },
  '/insights': {
    title: 'Insights | NorthPole Solicitors',
    description: 'Legal commentary, regulatory updates, and thought leadership from NorthPole Solicitors.',
    type: 'website',
  },
  '/contact': {
    title: 'Contact Us | NorthPole Solicitors',
    description: 'Get in touch with NorthPole Solicitors to discuss your legal requirements.',
    type: 'website',
  },
  '/privacy': {
    title: 'Privacy Notice | NorthPole Solicitors',
    description: 'Information on how NorthPole Solicitors collects, uses, and protects your personal data.',
    type: 'website',
  },
  '/disclaimer': {
    title: 'Legal Disclaimer | NorthPole Solicitors',
    description: 'Terms of use and legal disclaimer for the NorthPole Solicitors website.',
    type: 'website',
  },
};

async function loadPublicEnv() {
  const values = {};

  for (const filename of ['.env', '.env.production']) {
    try {
      const content = await readFile(join(packageRoot, filename), 'utf8');
      for (const line of content.split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*["']?([^"']*)["']?\s*$/);
        if (match) values[match[1]] = match[2];
      }
    } catch {
      // Vercel supplies build environment variables directly.
    }
  }

  return {
    projectId: process.env.VITE_SANITY_PROJECT_ID || values.VITE_SANITY_PROJECT_ID || 'e2i4v5d1',
    dataset: process.env.VITE_SANITY_DATASET || values.VITE_SANITY_DATASET || 'production',
    apiVersion: process.env.VITE_SANITY_API_VERSION || values.VITE_SANITY_API_VERSION || '2024-01-01',
  };
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function appendTitle(title) {
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
}

function imageUrlFromSanity(source, projectId, dataset) {
  const reference = source?.asset?._ref;
  const match = typeof reference === 'string'
    ? reference.match(/^image-([a-zA-Z0-9]+)-(\d+x\d+)-([a-zA-Z0-9]+)$/)
    : null;

  if (!match) return undefined;

  const [, assetId, dimensions, format] = match;
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-${dimensions}.${format}?auto=format&fit=max&w=1200&q=85`;
}

function metaTag(attribute, key, value) {
  return value ? `    <meta ${attribute}="${key}" content="${escapeHtml(value)}" />` : '';
}

function buildHeadMetadata(metadata) {
  const tags = [
    `    <meta name="robots" content="index, follow" />`,
    `    <title>${escapeHtml(metadata.title)}</title>`,
    metaTag('name', 'description', metadata.description),
    metaTag('property', 'og:title', metadata.socialTitle || metadata.title),
    metaTag('property', 'og:description', metadata.description),
    metaTag('property', 'og:site_name', siteName),
    metaTag('property', 'og:type', metadata.type),
    metaTag('property', 'og:url', metadata.url),
    metaTag('property', 'og:image', metadata.image),
    metaTag('property', 'og:image:secure_url', metadata.isArticle ? undefined : metadata.image),
    metaTag('property', 'og:image:type', metadata.isArticle ? undefined : 'image/png'),
    metaTag('property', 'og:image:width', metadata.isArticle ? undefined : defaultSocialImageWidth),
    metaTag('property', 'og:image:height', metadata.isArticle ? undefined : defaultSocialImageHeight),
    metaTag('property', 'og:image:alt', metadata.isArticle ? undefined : siteName),
    metaTag('name', 'twitter:card', 'summary_large_image'),
    metaTag('name', 'twitter:title', metadata.socialTitle || metadata.title),
    metaTag('name', 'twitter:description', metadata.description),
    metaTag('name', 'twitter:image', metadata.image),
    metaTag('name', 'twitter:image:alt', metadata.isArticle ? undefined : siteName),
    metaTag('property', 'article:published_time', metadata.publishedTime),
    metaTag('property', 'article:modified_time', metadata.modifiedTime),
    metaTag('property', 'article:author', metadata.author),
    metaTag('property', 'article:section', metadata.section),
    metadata.url ? `    <link rel="canonical" href="${escapeHtml(metadata.url)}" />` : '',
  ];

  return tags.filter(Boolean).join('\n');
}

function replaceHeadMetadata(html, metadata) {
  const metadataBlock = buildHeadMetadata(metadata);
  return html.replace(/    <title>[\s\S]*?<\/title>[\s\S]*?    <link rel="icon"/i, `${metadataBlock}\n    <link rel="icon"`);
}

async function fetchInsights(config) {
  const apiVersionPath = config.apiVersion.startsWith('v') ? config.apiVersion : `v${config.apiVersion}`;
  const endpoint = `https://${config.projectId}.api.sanity.io/${apiVersionPath}/data/query/${config.dataset}`;
  const query = `*[_type == "insight" && defined(slug.current) && !(_id in path("drafts.**"))] | order(datePublished desc) {
    _id,
    title,
    "slug": slug.current,
    featuredImage,
    socialImage,
    summary,
    author,
    category,
    datePublished,
    seoTitle,
    seoDescription,
    _updatedAt
  }`;

  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
  } catch (error) {
    throw new Error(`Unable to reach Sanity during prerendering: ${error.message}`);
  }

  if (!response.ok) {
    throw new Error(`Sanity prerender query failed (${response.status}): ${await response.text()}`);
  }

  const payload = await response.json();
  if (!Array.isArray(payload.result)) {
    throw new Error('Sanity prerender query returned an invalid result.');
  }

  return payload.result;
}

async function writeRoute(shell, route, metadata) {
  const outputDirectory = route === '/' ? distRoot : join(distRoot, route.slice(1));
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(join(outputDirectory, 'index.html'), replaceHeadMetadata(shell, metadata));
}

function getSitemapLastmod(article) {
  const value = article._updatedAt || article.datePublished;

  if (!value) {
    return undefined;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

async function writeSitemap(insights) {
  const buildLastmod = new Date().toISOString();
  const staticEntries = [
    { path: '/', changefreq: 'weekly', priority: '1.0', lastmod: buildLastmod },
    { path: '/about', changefreq: 'monthly', priority: '0.8', lastmod: buildLastmod },
    { path: '/practice-areas', changefreq: 'monthly', priority: '0.8', lastmod: buildLastmod },
    { path: '/team', changefreq: 'monthly', priority: '0.7', lastmod: buildLastmod },
    { path: '/insights', changefreq: 'weekly', priority: '0.9', lastmod: buildLastmod },
    { path: '/contact', changefreq: 'monthly', priority: '0.8', lastmod: buildLastmod },
    { path: '/privacy-notice', changefreq: 'yearly', priority: '0.3', lastmod: buildLastmod },
    { path: '/legal-disclaimer', changefreq: 'yearly', priority: '0.3', lastmod: buildLastmod },
  ];
  const articleEntries = insights
    .filter((article) => article.slug)
    .map((article) => ({
      path: `/insights/${article.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: getSitemapLastmod(article),
    }));
  const entries = [...staticEntries, ...articleEntries];
  const urls = entries
    .map((entry) => [
      '  <url>',
      `    <loc>${escapeXml(`${sitemapSiteUrl}${entry.path}`)}</loc>`,
      entry.lastmod ? `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : '',
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      '  </url>',
    ].filter(Boolean).join('\n'))
    .join('\n');
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  await writeFile(join(distRoot, 'sitemap.xml'), sitemap);
  console.log(`Generated sitemap.xml with ${entries.length} URLs.`);
  return entries.length;
}

const shell = await readFile(join(distRoot, 'index.html'), 'utf8');
const config = await loadPublicEnv();

if (!config.projectId || !config.dataset) {
  throw new Error('VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET are required for prerendering.');
}

await rm(join(distRoot, 'about'), { recursive: true, force: true });
await rm(join(distRoot, 'practice-areas'), { recursive: true, force: true });
await rm(join(distRoot, 'team'), { recursive: true, force: true });
await rm(join(distRoot, 'insights'), { recursive: true, force: true });
await rm(join(distRoot, 'contact'), { recursive: true, force: true });
await rm(join(distRoot, 'privacy'), { recursive: true, force: true });
await rm(join(distRoot, 'disclaimer'), { recursive: true, force: true });

for (const [route, metadata] of Object.entries(fixedRoutes)) {
  await writeRoute(shell, route, {
    ...metadata,
    url: `${siteUrl}${route === '/' ? '/' : route}`,
    image: defaultSocialImage,
    isArticle: false,
  });
}

const insights = await fetchInsights(config);
for (const article of insights) {
  if (!article.slug || !article.title) continue;

  const route = `/insights/${article.slug}`;
  const articleTitle = appendTitle(article.seoTitle || article.title);
  const articleUrl = `${siteUrl}${route}`;
  const image = imageUrlFromSanity(article.socialImage || article.featuredImage, config.projectId, config.dataset);

  await writeRoute(shell, route, {
    title: articleTitle,
    socialTitle: article.title,
    description: article.seoDescription || article.summary || defaultDescription,
    type: 'article',
    url: articleUrl,
    image: image || defaultSocialImage,
    isArticle: true,
    publishedTime: article.datePublished,
    modifiedTime: article._updatedAt,
    author: article.author,
    section: article.category,
  });
}

await writeSitemap(insights);
console.log(`Prerendered ${Object.keys(fixedRoutes).length} fixed routes and ${insights.length} Insight routes.`);