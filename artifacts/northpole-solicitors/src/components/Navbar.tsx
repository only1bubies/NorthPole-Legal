import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location === '/';
  const navBg = isHome && !isScrolled ? 'bg-transparent' : 'bg-primary shadow-sm';
  const isTransparent = isHome && !isScrolled;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Our Team', path: '/team' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${navBg} ${isTransparent ? 'text-white' : 'text-primary-foreground'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm">
          <img src="/logo.png" alt="" className="h-20 w-auto" />
          <span className="font-serif text-secondary text-3xl font-semibold tracking-wide leading-tight">
            NorthPole<br />
            <span className="text-lg font-normal tracking-[0.22em] uppercase">Solicitors</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm font-medium tracking-[0.1em] uppercase relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm p-1 ${location === link.path ? 'text-secondary' : 'hover:text-secondary transition-colors'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-secondary transform origin-left transition-transform duration-300 ${location === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
          <Link 
            href="/contact"
            className="ml-4 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors px-6 py-2.5 text-sm tracking-[0.1em] uppercase font-medium outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-current outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden absolute top-24 left-0 w-full bg-primary border-t border-primary/20 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium tracking-[0.1em] uppercase py-2 border-b border-white/10 text-white outline-none focus-visible:ring-2 focus-visible:ring-secondary ${location === link.path ? 'text-secondary' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 border border-secondary text-secondary text-center py-3 text-sm tracking-[0.1em] uppercase font-medium outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
