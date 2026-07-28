/*
 * EDITING GUIDE — Team.tsx
 * ------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Team() {
  useDocumentMeta("Our Team", "Meet the experienced legal professionals at NorthPole Solicitors.");

  const teamMembers = [
    {
      id: "1",
      name: "Jane Doe", /* PLACEHOLDER */
      title: "Managing Partner", /* PLACEHOLDER */
      specialism: "Corporate Structuring & Governance", /* PLACEHOLDER */
      initials: "JD"
    },
    {
      id: "2",
      name: "John Smith", /* PLACEHOLDER */
      title: "Partner", /* PLACEHOLDER */
      specialism: "Intellectual Property & Media", /* PLACEHOLDER */
      initials: "JS"
    },
    {
      id: "3",
      name: "Alice Johnson", /* PLACEHOLDER */
      title: "Senior Associate", /* PLACEHOLDER */
      specialism: "Commercial Litigation", /* PLACEHOLDER */
      initials: "AJ"
    },
    {
      id: "4",
      name: "Robert Brown", /* PLACEHOLDER */
      title: "Associate", /* PLACEHOLDER */
      specialism: "Technology & Data Protection", /* PLACEHOLDER */
      initials: "RB"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHero title="Our Team" subtitle="Rigorous minds. Strategic thinkers." />

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xl text-foreground/80 leading-relaxed font-serif">
              {/* PLACEHOLDER: Brief statement about the team's expertise and ethos */}
              Our strength lies in our people. We have assembled a team of specialists whose deep legal knowledge is matched only by their commercial acumen. We are unyielding advocates for our clients' interests.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <ScrollReveal key={member.id} delay={idx * 0.1}>
                <div className="bg-white p-10 border border-muted/10 text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center mb-8 border-[3px] border-secondary/30 relative group">
                    <span className="font-serif text-4xl text-white font-bold">{member.initials}</span>
                    <div className="absolute inset-0 rounded-full border border-secondary scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="font-serif text-2xl text-primary font-bold mb-2">{member.name}</h3>
                  <p className="text-secondary font-semibold tracking-[0.1em] uppercase text-sm mb-4">{member.title}</p>
                  
                  <div className="w-12 h-px bg-muted/20 my-4 mx-auto"></div>
                  
                  <p className="text-foreground/70 text-sm mb-8 flex-grow">{member.specialism}</p>
                  
                  <a 
                    href="#" 
                    aria-label={`LinkedIn profile for ${member.name}`}
                    className="p-2 border border-muted/20 rounded-full hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary text-primary"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-white/80 text-lg mb-10">
              {/* PLACEHOLDER: Recruitment pitch paragraph */}
              We are always interested in meeting exceptional legal talent. If you possess a rigorous mind, a commercial focus, and an uncompromising commitment to excellence, we invite you to explore a career with NorthPole Solicitors.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-secondary text-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-white transition-colors duration-300"
            >
              Send Us Your CV <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
