/*
 * EDITING GUIDE — Contact.tsx
 * ---------------------------
 * Search for <!-- PLACEHOLDER: --> comments to find all content that needs updating.
 * Replace placeholder text with real firm content before publishing.
 */

import { useRef, useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  useDocumentMeta("Contact Us", "Get in touch with NorthPole Solicitors to discuss your legal requirements.", {
    url: 'https://www.northpolesolicitors.com/contact',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [acknowledgementSent, setAcknowledgementSent] = useState(false);
  const [formError, setFormError] = useState('');
  const formStartedAt = useRef(Date.now());
  const submissionInFlight = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionInFlight.current) return;

    submissionInFlight.current = true;
    setFormState('submitting');
    setFormError('');

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          email: formData.get('email'),
          telephone: formData.get('telephone'),
          enquiry: formData.get('enquiry'),
          message: formData.get('message'),
          website: formData.get('website'),
          submittedAt: formStartedAt.current,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setFormState('idle');
        setFormError(result?.error || 'Unable to send your enquiry right now. Please try again.');
        return;
      }

      const result = await response.json().catch(() => null);
      setAcknowledgementSent(result?.acknowledgementSent === true);
      setFormState('success');
    } catch {
      setFormState('idle');
      setFormError('Unable to send your enquiry right now. Please try again.');
    } finally {
      submissionInFlight.current = false;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero title="Contact Us" subtitle="We are ready to assist you." />

      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Contact Details */}
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-8 relative inline-block group">
                  Get in Touch
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </h2>
                
                <div className="space-y-8 mt-12 text-lg text-foreground/80">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-primary font-sans font-semibold mb-1">Office Address</strong>
                      <address className="not-italic">
                        19 Oguntuga Street<br />
                        Yaba, Lagos<br />
                        Nigeria
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-primary font-sans font-semibold mb-1">Telephone</strong>
                      {/* PLACEHOLDER: Insert phone number here */}
                      <a href="tel:+2348143542771" className="hover:text-secondary transition-colors">+234 8143542771</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-primary font-sans font-semibold mb-1">Email Address</strong>
                      {/* PLACEHOLDER: Insert email address here */}
                      <a href="mailto:info@northpolesolicitors.com" className="hover:text-secondary transition-colors">info@northpolesolicitors.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-primary font-sans font-semibold mb-1">Office Hours</strong>
                      {/* PLACEHOLDER: Office hours */}
                      Monday–Friday, 9:00 AM–6:00 PM (WAT)
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-muted/20">
                  <strong className="block text-primary font-sans font-semibold mb-4 uppercase tracking-[0.1em] text-sm">Follow Us</strong>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/company/northpole-solicitors/" target="_blank" rel="noopener noreferrer" aria-label="NorthPole Solicitors on LinkedIn" className="p-3 bg-primary text-white hover:bg-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/northpolelp" target="_blank" rel="noopener noreferrer" aria-label="NorthPole Solicitors on X" className="p-3 bg-primary text-white hover:bg-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/northpole_solicitors" target="_blank" rel="noopener noreferrer" aria-label="NorthPole Solicitors on Instagram" className="p-3 bg-primary text-white hover:bg-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Contact Form */}
            <ScrollReveal delay={0.2}>
              <div className="bg-background p-8 md:p-10 border border-muted/10 shadow-sm">
                {formState === 'success' ? (
                  <div className="text-center py-16 px-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Message Sent</h3>
                    <p className="text-foreground/80">
                      {acknowledgementSent
                        ? 'Thank you. Your enquiry has been received successfully. We have also sent a confirmation to the email address you provided.'
                        : 'Thank you. Your enquiry has been received successfully. A member of our team will be in touch shortly.'}
                    </p>
                    <button 
                      onClick={() => {
                        formStartedAt.current = Date.now();
                        setAcknowledgementSent(false);
                        setFormError('');
                        setFormState('idle');
                      }}
                      className="mt-8 text-secondary font-semibold uppercase tracking-[0.1em] hover:text-primary transition-colors text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold uppercase tracking-[0.05em] text-primary mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="fullName"
                        required
                        className="w-full bg-white border border-muted/30 px-4 py-3 text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-[0.05em] text-primary mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full bg-white border border-muted/30 px-4 py-3 text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold uppercase tracking-[0.05em] text-primary mb-2">Telephone *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="telephone"
                        required
                        className="w-full bg-white border border-muted/30 px-4 py-3 text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="enquiry_type" className="block text-sm font-semibold uppercase tracking-[0.05em] text-primary mb-2">General Nature of Enquiry *</label>
                      <select 
                        id="enquiry_type" 
                        name="enquiry"
                        required
                        className="w-full bg-white border border-muted/30 px-4 py-3 text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                      >
                        <option value="">Please select</option>
                        <option value="ip">Intellectual Property</option>
                        <option value="entertainment">Entertainment & Media</option>
                        <option value="corporate">Corporate & Commercial Law</option>
                        <option value="tech">Technology & Data Protection</option>
                        <option value="dispute">Dispute Resolution</option>
                        <option value="litigation">Litigation</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold uppercase tracking-[0.05em] text-primary mb-2">Message *</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={5}
                        required
                        className="w-full bg-white border border-muted/30 px-4 py-3 text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-y"
                      ></textarea>
                    </div>

                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />

                    {formError && (
                      <p role="alert" className="text-sm text-red-700" aria-live="polite">
                        {formError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-primary text-secondary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                    </button>
                    
                    <p className="text-xs text-muted leading-relaxed italic mt-4">
                      Submitting this form does not create a lawyer-client relationship. Please do not send confidential or time-sensitive information.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
