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
  const navBg = isHome ? (isScrolled ? 'bg-primary' : 'bg-transparent') : 'bg-primary';
  const headerBorder = isHome ? (isScrolled ? 'border-b border-primary/10' : '') : 'border-b border-primary/10';
  const mobileNavBg = 'bg-primary';
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
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${navBg} ${headerBorder} ${isTransparent ? 'text-white' : 'text-primary-foreground'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-24 flex items-center justify-between gap-10">
        <Link href="/" className="flex items-center gap-4 group outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm min-w-0">
          <img src="/logo.png" alt="NorthPole Solicitors logo" className="h-24 w-auto" />
          <span className="font-serif text-secondary text-3xl font-semibold tracking-wide leading-tight">
            NorthPole<br />
            <span className="text-lg font-normal tracking-[0.22em] uppercase">Solicitors</span>
          </span>
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm font-medium tracking-[0.1em] uppercase relative whitespace-nowrap flex-shrink-0 group outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm px-3 py-1 ${location === link.path ? 'text-secondary' : 'text-current hover:text-secondary transition-colors'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-secondary transform origin-left transition-transform duration-300 ${location === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
        </nav>

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
        className={`lg:hidden absolute top-24 left-0 w-full ${mobileNavBg} border-t border-primary/20 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
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
        </nav>
      </div>
    </header>
  );
}
