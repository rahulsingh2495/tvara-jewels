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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Craft', href: '#craft' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Founder', href: '#founder' },
    { name: 'Order', href: '#order' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center ${isScrolled ? 'h-20 glass-nav' : 'h-28 bg-white/50 backdrop-blur-sm border-b border-gold/10'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group transition-transform hover:scale-105 duration-300">
            <img
              src={logo}
              alt="Tvara Jewels"
              className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-12 brightness-110' : 'h-13 lg:h-13'}`}
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
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-green-dark z-[110] flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <img src={logo} alt="Tvara Jewels" className="h-14 object-contain" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-white hover:text-gold transition-colors text-center"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="p-6 flex flex-col gap-6 items-center">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                href="https://wa.me/919876543210"
                className="w-full max-w-xs bg-gold text-white text-center py-4 text-[12px] font-bold uppercase tracking-[0.3em] hover:bg-gold-light transition-colors shadow-2xl"
              >
                Enquire Now
              </motion.a>
              <div className="flex gap-8 text-white/60">
                <a href="https://instagram.com/tvarajewels" target="_blank" className="hover:text-gold transition-colors"><Instagram size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
