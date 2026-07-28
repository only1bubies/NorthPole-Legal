/*
 * EDITING GUIDE — Insights.tsx
 * ----------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ArrowRight } from 'lucide-react';

export default function Insights() {
  useDocumentMeta("Insights", "Legal commentary, regulatory updates, and thought leadership from NorthPole Solicitors.");

  const articles = [
    {
      id: 1,
      category: "Corporate Law", /* PLACEHOLDER */
      date: "October 12, 2024", /* PLACEHOLDER */
      title: "Navigating the New Data Protection Regulations", /* PLACEHOLDER */
      excerpt: "An overview of the recent legislative changes and what they mean for businesses operating within the region. We explore compliance strategies for SMEs and large corporations alike." /* PLACEHOLDER */
    },
    {
      id: 2,
      category: "Intellectual Property", /* PLACEHOLDER */
      date: "September 28, 2024", /* PLACEHOLDER */
      title: "Protecting Digital Assets in the Web3 Era", /* PLACEHOLDER */
      excerpt: "As blockchain technology matures, the definition of intellectual property expands. This briefing covers the enforceability of IP rights concerning NFTs and decentralized platforms." /* PLACEHOLDER */
    },
    {
      id: 3,
      category: "Dispute Resolution", /* PLACEHOLDER */
      date: "September 15, 2024", /* PLACEHOLDER */
      title: "Arbitration vs. Litigation: A Commercial Perspective", /* PLACEHOLDER */
      excerpt: "When contracts are breached, choosing the right venue for dispute resolution is critical. We analyze the cost-benefit ratio of arbitration compared to traditional court proceedings." /* PLACEHOLDER */
    },
    {
      id: 4,
      category: "Entertainment & Media", /* PLACEHOLDER */
      date: "August 30, 2024", /* PLACEHOLDER */
      title: "The Evolution of Streaming Rights Agreements", /* PLACEHOLDER */
      excerpt: "How independent artists and producers can secure favorable terms in an landscape dominated by major digital streaming platforms." /* PLACEHOLDER */
    },
    {
      id: 5,
      category: "Commercial Law", /* PLACEHOLDER */
      date: "August 12, 2024", /* PLACEHOLDER */
      title: "Structuring Cross-Border Joint Ventures", /* PLACEHOLDER */
      excerpt: "Key legal considerations for Nigerian companies entering into strategic alliances with foreign entities, focusing on tax implications and governance." /* PLACEHOLDER */
    },
    {
      id: 6,
      category: "Technology", /* PLACEHOLDER */
      date: "July 22, 2024", /* PLACEHOLDER */
      title: "AI and Liability: Who is Responsible?", /* PLACEHOLDER */
      excerpt: "As artificial intelligence integrates into enterprise workflows, we examine the emerging legal frameworks assigning liability for AI-driven decisions and errors." /* PLACEHOLDER */
    }
  ];

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <ScrollReveal key={article.id} delay={(idx % 3) * 0.1}>
                <article className="bg-white border border-muted/10 p-8 h-full flex flex-col group hover:border-secondary/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/5 text-secondary px-3 py-1 text-xs font-bold tracking-[0.1em] uppercase">
                      {article.category}
                    </span>
                    <span className="text-muted text-sm">
                      {article.date}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-8 flex-grow line-clamp-4">
                    {article.excerpt}
                  </p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-secondary transition-colors mt-auto w-fit"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
