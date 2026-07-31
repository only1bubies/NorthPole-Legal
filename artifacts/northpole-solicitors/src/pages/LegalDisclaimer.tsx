/*
 * EDITING GUIDE — LegalDisclaimer.tsx
 * -----------------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function LegalDisclaimer() {
  useDocumentMeta("Legal Disclaimer", "Terms of use and legal disclaimer for the NorthPole Solicitors website.", {
    url: 'https://www.northpolesolicitors.com/disclaimer',
  });

  return (
    <div className="min-h-screen bg-background">
      <PageHero title="Legal Disclaimer" />

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-foreground/80 prose-a:text-secondary hover:prose-a:text-primary">
              
              <h2>1. General Information Only</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                The content provided on this website—including articles, insights, and service descriptions—is for general informational purposes only. It does not constitute legal advice and should not be relied upon as such. The law is subject to change, and information on this site may not reflect current legal developments.
              </p>

              <h2>2. No Lawyer-Client Relationship</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                Accessing this website, reading its content, or contacting NorthPole Solicitors via email or the website's contact forms does not create a lawyer-client relationship. A formal relationship is only established upon the execution of a written engagement letter signed by both you and a partner of the firm. Please do not send confidential information until a formal relationship has been established.
              </p>

              <h2>3. No Guarantee of Accuracy</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                While we strive to keep the information on this site accurate and up to date, NorthPole Solicitors makes no warranties or representations regarding the accuracy, completeness, or suitability of the information. We expressly disclaim all liability in respect to actions taken or not taken based on any or all the contents of this site.
              </p>

              <h2>4. Jurisdiction</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                NorthPole Solicitors operates primarily within the jurisdiction of the Federal Republic of Nigeria. Our lawyers are licensed to practice law only in the jurisdictions indicated in their individual profiles. This website is not intended to solicit clients outside of the jurisdictions where the firm is authorized to practice.
              </p>

              <h2>5. External Links</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                This website may contain links to external, third-party websites. These links are provided for convenience only. NorthPole Solicitors does not endorse, sponsor, or control these external sites and is not responsible for their content or privacy practices.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                To the fullest extent permitted by applicable law, NorthPole Solicitors, its partners, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this website.
              </p>

              <h2>7. Intellectual Property</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                All content on this website, including text, graphics, logos, and layout, is the intellectual property of NorthPole Solicitors unless otherwise stated. Unauthorized use, reproduction, or distribution of this content is strictly prohibited. You may download and print content for personal, non-commercial use only.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                {/* PLACEHOLDER: Insert disclaimer content here */}
                If you have questions concerning this disclaimer or wish to seek formal legal counsel, please contact us via the <a href="/contact">Contact</a> page.
              </p>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
