import { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const products = [
    { name: 'The Lotus Ring', desc: 'Polki & Pink Enamel', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&h=1000&q=80' },
    { name: 'Chandbali Drops', desc: 'Uncut Diamonds & Pearls', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&h=1000&q=80' },
    { name: 'Royal Kada', desc: '22k Gold Hand-carved', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&h=1000&q=80' },
    { name: 'Temple Choker', desc: 'Heritage Gold Work', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&h=1200&q=80' },
    { name: 'Floral Studs', desc: 'Minimal Polki Design', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&h=1000&q=80' },
    { name: 'Bridal Nath', desc: 'Traditional Craftsmanship', image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?auto=format&fit=crop&w=800&h=1000&q=80' },
    { name: 'Emerald Drops', desc: 'Zambian Emeralds & Gold', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&h=1000&q=80' },
    { name: 'Ruby Bangle', desc: 'Burmese Rubies & Diamonds', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&h=1000&q=80' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current!.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          
          const totalScrollHeight = rect.height - viewHeight;
          const currentScroll = -rect.top;
          
          let progress = currentScroll / totalScrollHeight;
          progress = Math.max(0, Math.min(1, progress));
          
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split into 4 groups for 4 floating columns
  const col1 = [products[0], products[1]];
  const col2 = [products[2], products[3]];
  const col3 = [products[4], products[5]];
  const col4 = [products[6], products[7]];

  return (
    <section id="gallery" ref={containerRef} className="relative bg-ivory-mid" style={{ height: '400vh' }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Text Decor */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none overflow-hidden">
          <span 
            className="text-[40vw] font-serif text-green-dark whitespace-nowrap transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${(scrollProgress - 0.5) * -30}%)` }}
          >
            TVARA ATELIER
          </span>
        </div>

        {/* Section Heading */}
        <div className="absolute top-0 left-0 right-0 z-20 text-center pt-10 pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted block mb-3">
            The Atelier
          </span>
          <h2 className="font-serif text-5xl text-green-dark">
            A Glimpse Into Our World.
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-px bg-gold/50" />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-12 relative z-10 h-full flex items-center justify-center">
          
          {/* Left Side Collage */}
          <div className="hidden md:flex gap-4 lg:gap-8 absolute left-4 lg:left-12 h-full items-center">
            {/* Column 1 - Fast Up */}
            <div 
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 transition-transform duration-500 ease-out"
              style={{ transform: `translateY(${(scrollProgress - 0.5) * -250}%)` }}
            >
              {col1.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
            {/* Column 2 - Slow Up */}
            <div 
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 transition-transform duration-500 ease-out mt-48"
              style={{ transform: `translateY(${(scrollProgress - 0.5) * -120}%)` }}
            >
              {col2.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Collage */}
          <div className="hidden md:flex gap-4 lg:gap-8 absolute right-4 lg:right-12 h-full items-center">
            {/* Column 3 - Slow Down */}
            <div 
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 transition-transform duration-500 ease-out mt-[-150px]"
              style={{ transform: `translateY(${(scrollProgress - 0.5) * 120}%)` }}
            >
              {col3.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
            {/* Column 4 - Fast Down */}
            <div 
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 transition-transform duration-500 ease-out"
              style={{ transform: `translateY(${(scrollProgress - 0.5) * 250}%)` }}
            >
              {col4.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View Images (Floating) */}
          <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div 
              className="absolute top-1/4 -left-10 w-40 h-52 bg-white p-2 shadow-lg transition-transform duration-500"
              style={{ transform: `translateY(${(scrollProgress - 0.5) * -100}px) rotate(-12deg)` }}
            >
              <img src={products[0].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div 
              className="absolute bottom-1/4 -right-10 w-40 h-52 bg-white p-2 shadow-lg transition-transform duration-500"
              style={{ transform: `translateY(${(scrollProgress - 0.5) * 100}px) rotate(12deg)` }}
            >
              <img src={products[4].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

        </div>

        {/* Scroll Progress Bar (Vertical) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-40 w-px bg-ivory-dark hidden lg:block">
          <div 
            className="w-full bg-gold transition-all duration-100"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
