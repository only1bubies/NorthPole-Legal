import { Link } from 'wouter';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Our Team', path: '/team' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1 */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4 group outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm w-fit">
            <div className="flex items-center gap-3">
              <div style={{ width: 44, height: 44, overflow: 'hidden', mixBlendMode: 'screen', flexShrink: 0 }}>
                <img
                  src="/logo-mark.png"
                  alt=""
                  style={{ width: 71, height: 71, marginLeft: -13, marginTop: -2 }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-white text-base font-semibold tracking-wide">NorthPole</span>
                <span className="font-sans text-secondary text-[0.55rem] tracking-[0.25em] uppercase">Solicitors</span>
              </div>
            </div>
          </Link>
          <p className="font-serif italic text-secondary text-lg">
            Legal Excellence.<br/>Trusted Guidance.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-sans font-semibold uppercase tracking-[0.1em] text-sm mb-6 text-white/50">Quick Links</h3>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className="text-white hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-sans font-semibold uppercase tracking-[0.1em] text-sm mb-6 text-white/50">Contact</h3>
          <address className="not-italic text-white space-y-3">
            <p>
              {/* PLACEHOLDER: Insert firm address here */}
              12 Boardroom Avenue<br/>
              Victoria Island, Lagos<br/>
              Nigeria
            </p>
            <p className="pt-2">
              {/* PLACEHOLDER: Insert phone number here */}
              <a href="tel:+234000000000" className="hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm">+234 (0) 123 456 7890</a>
            </p>
            <p>
              {/* PLACEHOLDER: Insert email address here */}
              <a href="mailto:info@northpolesolicitors.com" className="hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm">info@northpolesolicitors.com</a>
            </p>
          </address>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-sans font-semibold uppercase tracking-[0.1em] text-sm mb-6 text-white/50">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="p-2 border border-white/20 rounded-sm hover:border-secondary hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 border border-white/20 rounded-sm hover:border-secondary hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 border border-white/20 rounded-sm hover:border-secondary hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
        <p>© {new Date().getFullYear()} NorthPole Solicitors. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm">Privacy Notice</Link>
          <Link href="/disclaimer" className="hover:text-secondary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm">Legal Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
