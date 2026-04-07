import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Menu, X } from 'lucide-react';
import logo from '../assets/Tvara logo.png';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Craft', href: '#craft' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Founder', href: '#founder' },
    { name: 'Order', href: '#order' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center ${isScrolled ? 'h-20 glass-nav' : 'h-28 bg-white/50 backdrop-blur-sm border-b border-gold/10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group transition-transform hover:scale-105 duration-300">
          <img 
            src={logo} 
            alt="Tvara Jewels" 
            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-12 brightness-110' : 'h-16 lg:h-20'}`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-gold ${isScrolled ? 'text-white/80' : 'text-green-dark/80'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/tvarajewels" target="_blank" className={`transition-colors hover:text-gold hidden sm:block ${isScrolled ? 'text-white/80' : 'text-green-dark/80'}`}>
            <Instagram size={20} />
          </a>
          <a 
            href="https://wa.me/919876543210" 
            className="hidden sm:block bg-gold hover:bg-green-mid text-white px-6 py-2.5 text-[12px] font-medium uppercase tracking-widest transition-all hover:-translate-y-0.5"
          >
            Enquire Now
          </a>
          <button className={`lg:hidden ${isScrolled ? 'text-white' : 'text-green-dark'}`} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-green-dark z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-4xl text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/919876543210" 
                className="bg-gold text-white text-center py-4 text-sm font-medium uppercase tracking-widest mt-8"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
