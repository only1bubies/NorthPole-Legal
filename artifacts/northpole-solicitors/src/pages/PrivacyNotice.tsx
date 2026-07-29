/*
 * EDITING GUIDE — PrivacyNotice.tsx
 * ---------------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function PrivacyNotice() {
  useDocumentMeta("Privacy Notice", "Information on how NorthPole Solicitors collects, uses, and protects your personal data.");

  return (
    <div className="min-h-screen bg-background">
      <PageHero title="Privacy Notice" />

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm text-muted font-semibold tracking-[0.1em] uppercase mb-12 border-b border-muted/20 pb-4">
              Effective Date: {/* PLACEHOLDER: Insert effective date */} October 1, 2024
            </p>

            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-foreground/80 prose-a:text-secondary hover:prose-a:text-primary">
              
              <h2>1. Introduction</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                This Privacy Notice explains how NorthPole Solicitors ("we," "us," or "our") collects, uses, and shares personal data when you use our website or engage our legal services. We are committed to protecting your privacy and complying with applicable data protection laws, including the Nigeria Data Protection Regulation (NDPR).
              </p>

              <h2>2. Who We Are</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                NorthPole Solicitors is a commercial law firm registered in Nigeria. For the purposes of data protection legislation, we are the data controller of the personal information we hold about you.
              </p>

              <h2>3. What Personal Data We Collect</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                We may collect and process the following categories of personal data:
              </p>
              <ul>
                <li>Identity Data (names, titles, identification documents)</li>
                <li>Contact Data (email addresses, phone numbers, physical addresses)</li>
                <li>Financial Data (billing details, bank account information)</li>
                <li>Matter Data (information related to the legal matters we handle for you, which may include sensitive personal data)</li>
                <li>Technical Data (IP addresses, browser types, usage data collected via cookies)</li>
              </ul>

              <h2>4. How We Use Your Personal Data</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                We use your personal data to:
              </p>
              <ul>
                <li>Provide legal advice and representation</li>
                <li>Manage our client relationships and administer accounts</li>
                <li>Comply with our legal and regulatory obligations, including anti-money laundering checks</li>
                <li>Send legal updates and insights (only where you have consented)</li>
                <li>Improve our website and services</li>
              </ul>

              <h2>5. Legal Basis for Processing</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                Our processing of your personal data is based on one or more of the following legal grounds:
              </p>
              <ul>
                <li>Performance of a contract (our letter of engagement)</li>
                <li>Compliance with legal obligations</li>
                <li>Our legitimate business interests</li>
                <li>Your explicit consent</li>
              </ul>

              <h2>6. Data Retention</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                We will retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h2>7. Your Rights</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                Under applicable data protection laws, you have rights including:
              </p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
              </ul>

              <h2>8. Cookies</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                Our website uses minimal cookies to distinguish you from other users, providing a better experience and allowing us to improve our site. For detailed information on the cookies we use, please contact us.
              </p>

              <h2>9. Third-Party Links</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                This website may include links to third-party websites. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>

              <h2>10. Changes to This Notice</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                We keep our privacy notice under regular review. Any changes we make in the future will be posted on this page.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                {/* PLACEHOLDER: Insert privacy notice content here */}
                If you have any questions about this Privacy Notice or our data protection practices, please contact us at: <a href="mailto:info@northpolesolicitors.com">info@northpolesolicitors.com</a>.
              </p>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
