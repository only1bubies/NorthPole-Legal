import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import type { PortableTextBlock } from '@portabletext/react';

import { PageHero } from '@/components/PageHero';
import PortableTextContent from '@/components/PortableTextContent';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { getInsightBySlug, type InsightArticle, urlFor } from '@/lib/sanity';

interface InsightsArticleProps {
  params?: {
    slug?: string;
  };
}

function formatDate(value?: string) {
  if (!value) {
    return 'Date to be published';
  }

  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function getFeaturedImageAlt(image: InsightArticle['featuredImage'], fallbackTitle: string) {
  if (typeof image === 'object' && image && 'alt' in image && typeof image.alt === 'string' && image.alt.trim()) {
    return image.alt;
  }

  return fallbackTitle;
}

function getFeaturedImageSrcSet(image: InsightArticle['featuredImage']) {
  if (!image) {
    return null;
  }

  const widths = [400, 800, 1200, 1600];
  const srcSet = widths
    .map((width) => `${urlFor(image, { width, quality: 85 })} ${width}w`)
    .join(', ');

  return {
    src: urlFor(image, { width: 1200, quality: 85 }),
    srcSet,
  };
}

export default function InsightsArticle({ params }: InsightsArticleProps) {
  const slug = params?.slug;
  const [article, setArticle] = useState<InsightArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useDocumentMeta(
    article?.seoTitle || 'Insight',
    article?.seoDescription || 'Legal commentary and thought leadership from NorthPole Solicitors.'
  );

  useEffect(() => {
    let isMounted = true;

    async function loadArticle() {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const data = await getInsightBySlug(slug);

      if (isMounted) {
        setArticle(data);
        setIsLoading(false);
      }
    }

    loadArticle();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <PageHero title={article?.title || 'Insight'} subtitle={article?.category || 'Legal commentary'} />

      <section className="py-16 px-6 md:px-12 bg-white border-b border-muted/10">
        <div className="max-w-4xl mx-auto">
          <Link href="/insights" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.1em] text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>

          {isLoading ? (
            <p className="text-foreground/70">Loading article…</p>
          ) : !article ? (
            <div className="rounded-3xl border border-muted/10 bg-background p-10 text-center">
              <p className="text-foreground/70">This insight is not available yet. Publish it in Sanity to make it appear here.</p>
            </div>
          ) : (
            <>
              {article.featuredImage ? (() => {
                const featuredImage = getFeaturedImageSrcSet(article.featuredImage);

                if (!featuredImage) {
                  return null;
                }

                return (
                  <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-muted/10 bg-muted/5 p-2 md:p-3">
                    <img
                      src={featuredImage.src}
                      srcSet={featuredImage.srcSet}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
                      alt={getFeaturedImageAlt(article.featuredImage, article.title)}
                      loading="eager"
                      decoding="async"
                      className="block h-auto w-full rounded-[calc(1.5rem-0.25rem)] object-contain object-center"
                    />
                  </div>
                );
              })() : null}

              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.1em] text-secondary mb-6">
                <span>{article.category || 'Insight'}</span>
                <span className="text-muted">•</span>
                <span>{formatDate(article.datePublished)}</span>
                {article.author ? (
                  <>
                    <span className="text-muted">•</span>
                    <span>{article.author}</span>
                  </>
                ) : null}
              </div>

              <div className="space-y-6">
                <PortableTextContent
                  value={article.body ? (article.body as unknown as PortableTextBlock[]) : null}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
