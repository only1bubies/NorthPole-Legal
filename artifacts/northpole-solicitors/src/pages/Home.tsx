/*
 * EDITING GUIDE — Home.tsx
 * -------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ArrowRight } from 'lucide-react';
import { getLatestInsights, type InsightArticle } from '@/lib/sanity';
import { practiceAreas } from '@/data/practiceAreas';

export default function Home() {
  useDocumentMeta(
    "NorthPole Solicitors | Full-Service Law Firm in Nigeria",
    "NorthPole Solicitors is a full-service law firm in Nigeria providing practical legal solutions in Corporate & Commercial Law, Intellectual Property, Real Estate, Dispute Resolution and more.",
    {
      titleIsComplete: true,
      url: 'https://www.northpolesolicitors.com/',
    },
  );

  const [latestInsights, setLatestInsights] = useState<InsightArticle[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function loadInsights() {
      const data = await getLatestInsights(3);

      if (isMounted) {
        setLatestInsights(data);
      }
    }

    loadInsights();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-primary flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--brand-navy))_0%,hsl(var(--brand-navy)/0.95)_55%,hsl(var(--brand-navy))_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.06),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_18%)] pointer-events-none" />
        <div className="absolute inset-0" style={{ opacity: 0.07, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 40px)' }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-16">
          <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-6">
              Practical Legal Solutions.<br className="hidden md:block" />
              Trusted Representation.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-serif italic text-xl md:text-3xl text-secondary max-w-3xl mx-auto mb-12">
              Providing comprehensive legal services to individuals, businesses and institutions with integrity, precision and a commitment to achieving practical results.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-secondary text-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-white transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/practice-areas"
              className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Explore Our Practice Areas
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Clients Choose NorthPole Solicitors */}
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                Why Clients Choose NorthPole Solicitors
              </h2>
              <p className="text-foreground/70 max-w-3xl mx-auto">
                We offer broad legal support across multiple areas of law, helping clients move forward with confidence and clarity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Comprehensive Expertise",
                desc: "We provide legal services across a broad range of practice areas, delivering practical solutions tailored to the needs of individuals, businesses and institutions.",
              },
              {
                title: "Client-Centred Approach",
                desc: "Every matter receives careful attention, clear communication and strategic legal advice focused on the client’s objectives.",
              },
              {
                title: "Integrity & Professionalism",
                desc: "Our commitment to ethical practice, diligence and professional excellence guides every instruction we undertake.",
              },
            ].map((card, idx) => (
              <ScrollReveal key={card.title} delay={idx * 0.1}>
                <div className="rounded-3xl border border-primary/10 bg-white/5 p-8 shadow-sm">
                  <h3 className="font-serif text-2xl text-primary font-semibold mb-4">{card.title}</h3>
                  <p className="text-foreground/75 leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
            {practiceAreas.map((area, idx) => {
              const Icon = area.icon;

              return (
                <ScrollReveal key={area.id} delay={idx * 0.1}>
                  <Link href={area.homeHref} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
                    <div className="bg-primary p-8 h-full group hover:bg-primary/90 transition-colors duration-300 border border-transparent hover:border-secondary/30">
                      <Icon className="w-10 h-10 text-secondary mb-6" />
                      <h3 className="font-serif text-2xl text-white mb-4">{area.title}</h3>
                      <p className="text-white/70 mb-8">{area.shortDescription}</p>
                      <span className="inline-flex items-center text-secondary text-sm font-semibold uppercase tracking-[0.1em] group-hover:translate-x-2 transition-transform duration-300">
                        Explore <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal delay={0.2}>
              <Link
                href="/practice-areas"
                className="inline-block border border-primary text-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-primary hover:text-white transition-colors duration-300"
              >
                View All Practice Areas
              </Link>
            </ScrollReveal>
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
                href="/our-team"
                className="inline-flex items-center text-primary border-b border-primary pb-1 font-semibold uppercase tracking-[0.1em] hover:text-secondary hover:border-secondary transition-colors"
              >
                View Full Team <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { initials: "EO", name: "Ebubechukwu Odo", title: "Partner", specialism: "Intellectual Property, Energy and Property Law Practice", photo: "/team-odo.jpg" },
              { initials: "BA", name: "Benita Riagbayire", title: "Partner", specialism: "Data Privacy and Corporate Governance", photo: "/team-riagbayire.jpg" },
            ].map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 border border-muted/10 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary border-2 border-secondary flex items-center justify-center mb-6 overflow-hidden">
                    {member.photo
                      ? <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                      : <span className="font-serif text-3xl text-white font-bold">{member.initials}</span>
                    }
                  </div>
                  <h3 className="font-serif text-2xl text-primary font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium tracking-[0.1em] uppercase text-sm mb-4">
                    {member.title}
                  </p>
                  <p className="text-foreground/70 text-sm">
                    {member.specialism}
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
            {latestInsights.length === 0 ? (
              <div className="md:col-span-3 rounded-3xl border border-muted/10 bg-background p-8 text-center text-foreground/70">
                Publish insights in Sanity to populate this section.
              </div>
            ) : (
              latestInsights.map((article, idx) => (
                <ScrollReveal key={article._id} delay={idx * 0.1}>
                  <div className="group">
                    <div className="text-xs font-semibold tracking-[0.1em] uppercase text-secondary mb-3">
                      {article.category || 'Insight'}
                    </div>
                    <h3 className="font-serif text-2xl text-primary font-bold mb-4 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 line-clamp-3">
                      {article.summary}
                    </p>
                    <Link href={`/insights/${article.slug}`} className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-secondary transition-colors">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))
            )}
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
