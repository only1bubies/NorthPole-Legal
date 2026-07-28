/*
 * EDITING GUIDE — About.tsx
 * -------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ShieldCheck, Star, Users } from 'lucide-react';

export default function About() {
  useDocumentMeta("About Us", "Learn about NorthPole Solicitors' founding story, mission, and values.");

  return (
    <div className="min-h-screen bg-background">
      <PageHero title="About NorthPole Solicitors" subtitle="Rigorous counsel. Relentless dedication." />

      {/* Our Story */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold text-primary mb-10 relative inline-block group">
              Our Story
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </h2>
            
            <div className="prose prose-lg prose-headings:font-serif prose-p:text-foreground/80 max-w-none space-y-6">
              <p>
                {/* PLACEHOLDER: Founding year and context */}
                Founded in [Year], NorthPole Solicitors was established with a singular vision: to deliver world-class commercial legal services within the Nigerian jurisdiction. We recognized a growing need among businesses and creators for counsel that was not merely legally sound, but commercially pragmatic.
              </p>
              <p>
                {/* PLACEHOLDER: Founding partners / history */}
                Our founding partners brought together decades of collective experience from top-tier firms, corporate boardrooms, and specialized intellectual property practices. This convergence of expertise allows us to view legal challenges through a multi-disciplinary lens.
              </p>
              <p>
                {/* PLACEHOLDER: Current state and future outlook */}
                Today, we continue to serve a diverse roster of clients—from ambitious startups to established multinational corporations. We remain steadfast in our commitment to excellence, continually adapting our practice to address the evolving complexities of the modern commercial landscape.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 md:px-12 bg-background border-y border-muted/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6 relative inline-block group">
                Our Mission & Values
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Integrity</h3>
                <p className="text-foreground/70">
                  {/* PLACEHOLDER: 1-2 sentences */}
                  We operate with unimpeachable ethics. Trust is the currency of our profession, and we safeguard it rigorously in every engagement.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-foreground/70">
                  {/* PLACEHOLDER: 1-2 sentences */}
                  We accept nothing less than the highest standard of legal craft. Every document, negotiation, and strategy is executed with meticulous precision.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Partnership</h3>
                <p className="text-foreground/70">
                  {/* PLACEHOLDER: 1-2 sentences */}
                  We view ourselves as strategic partners to our clients. Your commercial objectives become our legal imperatives.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 lg:col-span-3">
            <ScrollReveal>
              <h2 className="font-serif text-4xl font-bold text-primary">Our Approach</h2>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-8 lg:col-span-9 relative">
            <ScrollReveal delay={0.2}>
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-secondary hidden md:block"></div>
              <div className="md:pl-10 space-y-6 text-lg text-foreground/80">
                <p>
                  {/* PLACEHOLDER: Approach paragraph 1 */}
                  Legal counsel in isolation is rarely sufficient. Our approach begins with a comprehensive audit of the commercial context. Before we cite precedence or draft clauses, we understand the business model, the market dynamics, and the ultimate strategic goal.
                </p>
                <p>
                  {/* PLACEHOLDER: Approach paragraph 2 */}
                  This contextual understanding allows us to craft solutions that are not merely protective, but proactive. We anticipate regulatory shifts, identify potential liabilities before they materialize, and structure agreements that facilitate growth rather than constrain it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
