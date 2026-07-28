/*
 * EDITING GUIDE — PracticeAreas.tsx
 * ---------------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function PracticeAreas() {
  useDocumentMeta("Practice Areas", "Explore the comprehensive legal services offered by NorthPole Solicitors.");

  const practiceAreas = [
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: [
        /* PLACEHOLDER: Paragraphs for this practice area */
        "In an increasingly knowledge-based economy, intellectual property is often a company's most valuable asset. NorthPole Solicitors offers comprehensive services to secure, manage, and enforce your IP rights.",
        "We assist clients in navigating the complexities of trademark, copyright, and patent registration, ensuring robust protection against infringement.",
        "Our team also provides strategic advice on IP commercialization, including licensing, franchising, and technology transfer agreements."
      ],
      services: [
        /* PLACEHOLDER: Key services list */
        "Trademark and Copyright Registration",
        "IP Portfolio Management",
        "Licensing and Franchising Agreements",
        "Anti-Counterfeiting and Enforcement",
        "IP Due Diligence in M&A Transactions"
      ]
    },
    {
      id: "entertainment-media",
      title: "Entertainment & Media",
      description: [
        /* PLACEHOLDER: Paragraphs for this practice area */
        "The entertainment and media sector operates at a rapid pace, requiring legal counsel that is both responsive and deeply knowledgeable about industry standards.",
        "We represent artists, producers, labels, and production companies, structuring deals that protect creative control while maximizing commercial yield.",
        "From talent agreements to distribution rights and defamation defense, we provide full-spectrum representation for the creative industries."
      ],
      services: [
        /* PLACEHOLDER: Key services list */
        "Talent and Management Contracts",
        "Music Publishing and Recording Agreements",
        "Film and Television Production Clearances",
        "Defamation and Reputation Management",
        "Digital Media and Streaming Rights"
      ]
    },
    {
      id: "corporate-commercial",
      title: "Corporate & Commercial Law",
      description: [
        /* PLACEHOLDER: Paragraphs for this practice area */
        "Solid corporate governance and meticulously drafted commercial agreements are the bedrock of any successful enterprise.",
        "We advise businesses at every stage of their lifecycle, from formation and structuring to corporate governance, compliance, and eventual exit strategies.",
        "Our commercial contract drafting focuses on clarity, risk allocation, and enforceability, ensuring our clients' operations run smoothly."
      ],
      services: [
        /* PLACEHOLDER: Key services list */
        "Company Formation and Structuring",
        "Mergers and Acquisitions",
        "Corporate Governance and Compliance",
        "Joint Ventures and Strategic Alliances",
        "General Commercial Contracts"
      ]
    },
    {
      id: "technology-data",
      title: "Technology & Data Protection",
      description: [
        /* PLACEHOLDER: Paragraphs for this practice area */
        "As technology reshapes commerce, regulatory frameworks are continually evolving. We help tech companies and traditional businesses alike navigate this shifting landscape.",
        "Data privacy is a paramount concern. We provide comprehensive audits and compliance strategies aligned with the NDPR and other relevant data protection legislation.",
        "We also advise on software licensing, SaaS agreements, and e-commerce compliance."
      ],
      services: [
        /* PLACEHOLDER: Key services list */
        "Data Protection Audits and Compliance (NDPR)",
        "Software as a Service (SaaS) Agreements",
        "E-commerce Regulations",
        "Cybersecurity Incident Response",
        "Technology Joint Ventures"
      ]
    },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      description: [
        /* PLACEHOLDER: Paragraphs for this practice area */
        "When disputes arise, they require swift, strategic intervention to mitigate financial and reputational risk.",
        "We prioritize Alternative Dispute Resolution (ADR), including mediation and arbitration, to achieve confidential, commercial outcomes where possible.",
        "Our negotiators are formidable advocates, focused on resolving conflicts efficiently without protracted litigation when appropriate."
      ],
      services: [
        /* PLACEHOLDER: Key services list */
        "Commercial Arbitration",
        "Mediation and Negotiation",
        "Pre-Litigation Strategy",
        "Debt Recovery",
        "Settlement Agreements"
      ]
    },
    {
      id: "litigation",
      title: "Litigation",
      description: [
        /* PLACEHOLDER: Paragraphs for this practice area */
        "When litigation is unavoidable, NorthPole Solicitors provides robust, uncompromising representation before all tiers of the Nigerian judicial system.",
        "We handle complex commercial disputes involving breach of contract, shareholder disagreements, intellectual property infringement, and regulatory actions.",
        "Our litigation strategy is always aligned with our clients' broader business objectives, balancing aggressive advocacy with commercial reality."
      ],
      services: [
        /* PLACEHOLDER: Key services list */
        "Complex Commercial Litigation",
        "Intellectual Property Enforcement Actions",
        "Shareholder and Board Disputes",
        "Employment Litigation",
        "Regulatory and Administrative Actions"
      ]
    }
  ];

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
                    {area.description.map((paragraph, i) => (
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
