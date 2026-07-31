/*
 * EDITING GUIDE — Insights.tsx
 * ----------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ArrowRight } from 'lucide-react';
import { getInsights, type InsightArticle } from '@/lib/sanity';

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

export default function Insights() {
  useDocumentMeta("Insights", "Legal commentary, regulatory updates, and thought leadership from NorthPole Solicitors.", {
    url: 'https://www.northpolesolicitors.com/insights',
  });

  const [articles, setArticles] = useState<InsightArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadArticles() {
      setIsLoading(true);
      const data = await getInsights(12);

      if (isMounted) {
        setArticles(data);
        setIsLoading(false);
      }
    }

    loadArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageHero title="Insights" subtitle="Perspective and analysis." />

      <section className="py-16 px-6 md:px-12 bg-white border-b border-muted/10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xl text-foreground/80 leading-relaxed font-serif">
              Legal commentary, regulatory updates and thought leadership from the NorthPole Solicitors team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <p className="text-foreground/70 text-center">Loading insights…</p>
          ) : articles.length === 0 ? (
            <div className="rounded-3xl border border-muted/10 bg-white p-10 text-center text-foreground/70">
              No published insights yet. Create your first insight in Sanity to see it here.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <ScrollReveal key={article._id} delay={(idx % 3) * 0.1}>
                  <article className="bg-white border border-muted/10 p-8 h-full flex flex-col group hover:border-secondary/50 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary/5 text-secondary px-3 py-1 text-xs font-bold tracking-[0.1em] uppercase">
                        {article.category || 'Insight'}
                      </span>
                      <span className="text-muted text-sm">
                        {formatDate(article.datePublished)}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-8 flex-grow line-clamp-4">
                      {article.summary}
                    </p>
                    
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-secondary transition-colors mt-auto w-fit"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
