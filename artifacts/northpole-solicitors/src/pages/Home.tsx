/*
 * EDITING GUIDE — Home.tsx
 * -------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { Link } from 'wouter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Shield, Music, Briefcase, Lock, Scale, Hammer, ArrowRight } from 'lucide-react';

export default function Home() {
  useDocumentMeta("Home", "Specialist commercial law counsel for businesses and rights holders across Nigeria and beyond.");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-primary flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          {/* Pure CSS subtle diagonal texture / radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-foreground/5 via-primary to-primary pointer-events-none"></div>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-16">
          <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-6">
              Legal Excellence, <br className="hidden md:block"/>
              Trusted Guidance
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="font-serif italic text-xl md:text-3xl text-secondary max-w-3xl mx-auto mb-12">
              Specialist commercial law counsel for businesses and rights holders across Nigeria and beyond.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/practice-areas"
              className="w-full sm:w-auto bg-secondary text-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-white transition-colors duration-300"
            >
              Our Practice Areas
            </Link>
            <Link 
              href="/team"
              className="w-full sm:w-auto border border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Meet Our Team
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold text-primary mb-8 relative inline-block group">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <div className="text-foreground/80 space-y-6 text-lg">
              <p>
                {/* PLACEHOLDER: Replace this with 2–3 sentences describing the firm's founding story, mission, and values. */}
                NorthPole Solicitors is a commercial law firm dedicated to providing strategic legal solutions that empower businesses to grow with confidence. We combine rigorous legal analysis with a deep understanding of the Nigerian business landscape.
              </p>
              <p>
                {/* PLACEHOLDER: Add a second paragraph about the firm's commitment to clients, jurisdiction coverage, or core philosophy. */}
                Our practice is built on a foundation of integrity, discretion, and an unwavering commitment to achieving our clients' commercial objectives. We act for multinational corporations, domestic enterprises, and high-net-worth individuals who demand precise, actionable counsel.
              </p>
            </div>
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-secondary font-semibold uppercase tracking-[0.1em] hover:text-primary transition-colors"
            >
              Read More About Us <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="relative">
            <div className="absolute inset-0 border border-secondary translate-x-4 translate-y-4"></div>
            <div className="bg-primary p-12 relative z-10 text-center flex items-center justify-center min-h-[300px]">
              <p className="font-serif italic text-2xl text-white leading-relaxed">
                "{/* PLACEHOLDER: Add a firm motto or short client-focused statement here. */}Precision in counsel, partnership in business. We measure our success by the success of our clients."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-primary mb-4 relative inline-block group">
                Our Practice Areas
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Intellectual Property", desc: "Comprehensive protection and enforcement of trademarks, patents, and copyright." },
              { icon: Music, title: "Entertainment & Media", desc: "Strategic counsel for artists, producers, and media organizations." },
              { icon: Briefcase, title: "Corporate & Commercial", desc: "Advising on governance, transactions, and corporate structuring." },
              { icon: Lock, title: "Tech & Data Protection", desc: "Navigating regulatory compliance and data privacy requirements." },
              { icon: Scale, title: "Dispute Resolution", desc: "Alternative dispute resolution and arbitration strategies." },
              { icon: Hammer, title: "Litigation", desc: "Robust representation in complex commercial litigation." }
            ].map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href="/practice-areas" className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
                  <div className="bg-primary p-8 h-full group hover:bg-primary/90 transition-colors duration-300 border border-transparent hover:border-secondary/30">
                    <area.icon className="w-10 h-10 text-secondary mb-6" />
                    <h3 className="font-serif text-2xl text-white mb-4">{area.title}</h3>
                    {/* PLACEHOLDER: One-sentence description of services */}
                    <p className="text-white/70 mb-8">{area.desc}</p>
                    <span className="inline-flex items-center text-secondary text-sm font-semibold uppercase tracking-[0.1em] group-hover:translate-x-2 transition-transform duration-300">
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Commercial Acumen", desc: "We don't just know the law; we understand the business environment." },
              { title: "Rigorous Analysis", desc: "Leaving no stone unturned to secure the most advantageous position." },
              { title: "Client-First Approach", desc: "Responsive, clear, and tailored communication at every step." },
              { title: "Discreet & Trusted", desc: "Absolute confidentiality for sensitive corporate and personal matters." }
            ].map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
                {/* PLACEHOLDER: 1–2 sentences */}
                <p className="text-white/70">{pillar.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <ScrollReveal>
              <h2 className="font-serif text-4xl font-bold text-primary relative inline-block group">
                Our Team
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link 
                href="/team"
                className="inline-flex items-center text-primary border-b border-primary pb-1 font-semibold uppercase tracking-[0.1em] hover:text-secondary hover:border-secondary transition-colors"
              >
                View Full Team <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 border border-muted/10 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-32 h-32 mx-auto rounded-full bg-muted/10 border-2 border-secondary flex items-center justify-center mb-6">
                    <span className="font-serif text-3xl text-primary font-bold">
                      {/* PLACEHOLDER: Lawyer initials */}
                      L{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-primary font-bold mb-2">
                    {/* PLACEHOLDER: Lawyer name */}
                    Lawyer Name
                  </h3>
                  <p className="text-secondary font-medium tracking-[0.1em] uppercase text-sm mb-4">
                    {/* PLACEHOLDER: Title */}
                    Senior Partner
                  </p>
                  <p className="text-foreground/70 text-sm">
                    {/* PLACEHOLDER: Specialism */}
                    Corporate & Commercial
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6 relative inline-block group">
                Insights
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </h2>
              <p className="text-foreground/70 text-lg">Legal commentary and updates from our team.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((_, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group">
                  <div className="text-xs font-semibold tracking-[0.1em] uppercase text-secondary mb-3">
                    {/* PLACEHOLDER: Category & Date */}
                    Corporate Law · Oct 12, 2024
                  </div>
                  <h3 className="font-serif text-2xl text-primary font-bold mb-4 group-hover:text-secondary transition-colors">
                    {/* PLACEHOLDER: Article title */}
                    Navigating the New Data Protection Regulations
                  </h3>
                  <p className="text-foreground/70 mb-6 line-clamp-3">
                    {/* PLACEHOLDER: One-sentence excerpt */}
                    An overview of the recent legislative changes and what they mean for businesses operating within the region.
                  </p>
                  <Link href="/insights" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-secondary transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <ScrollReveal delay={0.3}>
              <Link 
                href="/insights"
                className="inline-block border border-primary text-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-primary hover:text-white transition-colors duration-300"
              >
                View All Insights
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary text-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold mb-6">Ready to discuss your matter?</h2>
            <p className="text-white/80 text-lg mb-10">Our team is available to advise on commercial legal matters across Nigeria.</p>
            <Link 
              href="/contact"
              className="inline-block bg-secondary text-primary px-10 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-white transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
