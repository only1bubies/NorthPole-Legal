import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

import { PageHero } from '@/components/PageHero';
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

function renderPortableText(blocks?: Array<Record<string, unknown>>) {
  if (!Array.isArray(blocks)) {
    return null;
  }

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const blockData = block as { _type?: string; children?: Array<{ text?: string }> };

        if (blockData._type !== 'block' || !Array.isArray(blockData.children)) {
          return null;
        }

        return (
          <p key={index} className="text-lg leading-relaxed text-foreground/80">
            {blockData.children.map((child) => child.text || '').join('')}
          </p>
        );
      })}
    </div>
  );
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
              {article.featuredImage ? (
                <img
                  src={urlFor(article.featuredImage)}
                  alt={article.title}
                  className="w-full h-[320px] object-cover rounded-3xl border border-muted/10 mb-8"
                />
              ) : null}

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

              <div className="prose max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-foreground/80 prose-a:text-secondary">
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  {article.summary}
                </p>
                {renderPortableText(article.body)}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
