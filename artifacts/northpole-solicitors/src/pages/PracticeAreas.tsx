/*
 * EDITING GUIDE — PracticeAreas.tsx
 * ---------------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { practiceAreas } from '@/data/practiceAreas';

export default function PracticeAreas() {
  useDocumentMeta("Practice Areas", "Explore the comprehensive legal services offered by NorthPole Solicitors.");

  return (
    <div className="min-h-screen bg-background">
      <PageHero title="Practice Areas" subtitle="Specialist expertise. Strategic execution." />

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xl text-foreground/80 leading-relaxed font-serif">
              {/* PLACEHOLDER: Brief intro to the firm's practice coverage */}
              Our practice is highly focused. By concentrating on core commercial disciplines, we offer depth of knowledge rather than mere breadth. We provide rigorous, strategic counsel tailored to the unique demands of the corporate, creative, and technological sectors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {practiceAreas.map((area, index) => (
            <section key={area.id} id={area.id} className="mb-24 last:mb-12 scroll-mt-32">
              <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{area.title}</h2>
                <div className="w-16 h-1 bg-secondary mb-8"></div>
                
                <div className="grid md:grid-cols-12 gap-12">
                  <div className="md:col-span-7 lg:col-span-8 space-y-6 text-foreground/80 text-lg">
                    {area.fullDescription.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="md:col-span-5 lg:col-span-4">
                    <div className="bg-white p-8 border border-muted/20 h-full shadow-sm">
                      <h3 className="font-sans font-semibold uppercase tracking-[0.1em] text-sm text-primary mb-6 pb-4 border-b border-muted/20">Key Services</h3>
                      <ul className="space-y-4">
                        {area.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
