import type { LucideIcon } from 'lucide-react';
import { Briefcase, Gavel, Globe2, Lock, Scale, Shield } from 'lucide-react';

export interface PracticeAreaItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  order: number;
  fullDescription: string[];
  services: string[];
}

export const practiceAreas: PracticeAreaItem[] = [
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    description:
      'Strategic protection for brands, content, technology and commercial assets.',
    icon: Lock,
    href: '/practice-areas#intellectual-property',
    order: 1,
    fullDescription: [
      'In an increasingly knowledge-based economy, intellectual property is often a company\'s most valuable asset. NorthPole Solicitors offers comprehensive services to secure, manage, and enforce your IP rights.',
      'We assist clients in navigating the complexities of trademark, copyright, and patent registration, ensuring robust protection against infringement.',
      'Our team also provides strategic advice on IP commercialization, including licensing, franchising, and technology transfer agreements.',
    ],
    services: [
      'Trademark and Copyright Registration',
      'IP Portfolio Management',
      'Licensing and Franchising Agreements',
      'Anti-Counterfeiting and Enforcement',
      'IP Due Diligence in M&A Transactions',
    ],
  },
  {
    id: 'entertainment-media',
    title: 'Entertainment & Media',
    description:
      'Practical counsel for creators, production houses and media businesses.',
    icon: Globe2,
    href: '/practice-areas#entertainment-media',
    order: 2,
    fullDescription: [
      'The entertainment and media sector operates at a rapid pace, requiring legal counsel that is both responsive and deeply knowledgeable about industry standards.',
      'We represent artists, producers, labels, and production companies, structuring deals that protect creative control while maximizing commercial yield.',
      'From talent agreements to distribution rights and defamation defense, we provide full-spectrum representation for the creative industries.',
    ],
    services: [
      'Talent and Management Contracts',
      'Music Publishing and Recording Agreements',
      'Film and Television Production Clearances',
      'Defamation and Reputation Management',
      'Digital Media and Streaming Rights',
    ],
  },
  {
    id: 'corporate-commercial',
    title: 'Corporate & Commercial Law',
    description:
      'Clear, commercially focused advice for formation, governance and transactions.',
    icon: Briefcase,
    href: '/practice-areas#corporate-commercial',
    order: 3,
    fullDescription: [
      'Solid corporate governance and meticulously drafted commercial agreements are the bedrock of any successful enterprise.',
      'We advise businesses at every stage of their lifecycle, from formation and structuring to corporate governance, compliance, and eventual exit strategies.',
      'Our commercial contract drafting focuses on clarity, risk allocation, and enforceability, ensuring our clients\' operations run smoothly.',
    ],
    services: [
      'Company Formation and Structuring',
      'Mergers and Acquisitions',
      'Corporate Governance and Compliance',
      'Joint Ventures and Strategic Alliances',
      'General Commercial Contracts',
    ],
  },
  {
    id: 'technology-data',
    title: 'Technology & Data Protection',
    description:
      'Guidance on compliance, cyber risk and technology transactions.',
    icon: Shield,
    href: '/practice-areas#technology-data',
    order: 4,
    fullDescription: [
      'As technology reshapes commerce, regulatory frameworks are continually evolving. We help tech companies and traditional businesses alike navigate this shifting landscape.',
      'Data privacy is a paramount concern. We provide comprehensive audits and compliance strategies aligned with the NDPR and other relevant data protection legislation.',
      'We also advise on software licensing, SaaS agreements, and e-commerce compliance.',
    ],
    services: [
      'Data Protection Audits and Compliance (NDPR)',
      'Software as a Service (SaaS) Agreements',
      'E-commerce Regulations',
      'Cybersecurity Incident Response',
      'Technology Joint Ventures',
    ],
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution',
    description:
      'Practical strategy to resolve commercial disputes efficiently and discreetly.',
    icon: Scale,
    href: '/practice-areas#dispute-resolution',
    order: 5,
    fullDescription: [
      'When disputes arise, they require swift, strategic intervention to mitigate financial and reputational risk.',
      'We prioritize Alternative Dispute Resolution (ADR), including mediation and arbitration, to achieve confidential, commercial outcomes where possible.',
      'Our negotiators are formidable advocates, focused on resolving conflicts efficiently without protracted litigation when appropriate.',
    ],
    services: [
      'Commercial Arbitration',
      'Mediation and Negotiation',
      'Pre-Litigation Strategy',
      'Debt Recovery',
      'Settlement Agreements',
    ],
  },
  {
    id: 'litigation',
    title: 'Litigation',
    description:
      'Robust advocacy in complex disputes before Nigerian courts and tribunals.',
    icon: Gavel,
    href: '/practice-areas#litigation',
    order: 6,
    fullDescription: [
      'When litigation is unavoidable, NorthPole Solicitors provides robust, uncompromising representation before all tiers of the Nigerian judicial system.',
      'We handle complex commercial disputes involving breach of contract, shareholder disagreements, intellectual property infringement, and regulatory actions.',
      'Our litigation strategy is always aligned with our clients\' broader business objectives, balancing aggressive advocacy with commercial reality.',
    ],
    services: [
      'Complex Commercial Litigation',
      'Intellectual Property Enforcement Actions',
      'Shareholder and Board Disputes',
      'Employment Litigation',
      'Regulatory and Administrative Actions',
    ],
  },
].sort((a, b) => a.order - b.order);
