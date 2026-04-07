import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Icons from './Icons';

const Collection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { 
      name: 'Rings', 
      Icon: Icons.Ring, 
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&h=1600&q=80", 
      desc: "Handcrafted rings that tell a story of elegance and grace. Each piece is a testament to heritage and modern artistry.",
      msg: "I'm interested in your Rings collection." 
    },
    { 
      name: 'Earrings', 
      Icon: Icons.Earrings, 
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&h=1600&q=80", 
      desc: "Timeless earrings designed to catch every light. From delicate studs to statement drops, find your perfect pair.",
      msg: "I'm interested in your Earrings collection." 
    },
    { 
      name: 'Necklaces', 
      Icon: Icons.Necklace, 
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1200&h=1600&q=80", 
      desc: "Statement necklaces that bridge heritage and modern design. Pieces made to be worn forever.",
      msg: "I'm interested in your Necklaces collection." 
    },
    { 
      name: 'Bangles & Kadas', 
      Icon: Icons.Bangle, 
      image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=1200&h=1600&q=80", 
      desc: "Exquisite bangles and kadas for the modern woman. Handcrafted with real gold, polki, and uncut diamonds.",
      msg: "I'm interested in your Bangles collection." 
    },
    { 
      name: 'Bridal Sets', 
      Icon: Icons.Bridal, 
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=1600&q=80", 
      desc: "Complete bridal sets for your most precious moments. Timeless jewelry for the modern bride.",
      msg: "I'm interested in your Bridal collection." 
    },
    { 
      name: 'Custom Orders', 
      Icon: Icons.Custom, 
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&h=1600&q=80", 
      desc: "Bespoke creations tailored to your unique vision. Work with us to design a piece that is uniquely yours.",
      msg: "I'd like to discuss a Custom Order." 
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest * categories.length), categories.length - 1);
      if (idx !== activeIdx) setActiveIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeIdx, categories.length]);

  return (
    <section id="collection" ref={containerRef} className="relative bg-ivory scroll-mt-28">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Side: Large Dynamic Image */}
        <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-full overflow-hidden bg-green-dark">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={categories[activeIdx].image} 
                alt={categories[activeIdx].name} 
                className="w-full h-full object-cover opacity-70"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Texture Overlay */}
              <div className="absolute inset-0 bg-green-dark/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ivory/10" />
            </motion.div>
          </AnimatePresence>
          
          {/* Floating Category Label (Mobile) */}
          <div className="absolute bottom-8 left-8 lg:hidden">
            <motion.span 
              key={`label-${activeIdx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold"
            >
              Collection 0{activeIdx + 1}
            </motion.span>
          </div>
        </div>

        {/* Right Side: Content & Navigation */}
        <div className="relative w-full lg:w-1/2 h-[55vh] lg:h-full flex flex-col justify-center px-8 lg:px-24 bg-ivory">
          {/* Section Heading (Static) */}
          <div className="absolute top-12 left-8 lg:left-24 right-8 lg:right-24 flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-dark/40">
              The Collection
            </span>
            <div className="w-12 h-px bg-gold/30" />
          </div>

          <div className="max-w-md">
            <motion.div
              key={`icon-${activeIdx}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-16 h-16 mb-10 text-gold"
            >
              {(() => {
                const ActiveIcon = categories[activeIdx].Icon;
                return <ActiveIcon />;
              })()}
            </motion.div>

            <motion.div
              key={`text-${activeIdx}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-5xl lg:text-8xl text-green-dark mb-8 leading-[0.9] tracking-tighter">
                {categories[activeIdx].name}
              </h2>
              <p className="text-green-dark/70 text-lg mb-12 leading-relaxed font-light max-w-sm">
                {categories[activeIdx].desc}
              </p>
              
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(categories[activeIdx].msg)}`}
                className="inline-flex items-center gap-6 group"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                  Explore Designs
                </span>
                <div className="relative flex items-center">
                  <div className="w-12 h-px bg-gold transition-all duration-700 group-hover:w-24" />
                  <ArrowRight size={16} className="text-gold absolute right-0 transition-all duration-700 group-hover:-right-4" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Progress & Navigation Indicator */}
          <div className="absolute bottom-12 left-8 lg:left-24 right-8 lg:right-24">
            <div className="flex items-center gap-6 mb-4">
              <span className="text-[10px] font-mono text-gold">0{activeIdx + 1}</span>
              <div className="flex-1 h-px bg-gold/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gold"
                  animate={{ width: `${((activeIdx + 1) / categories.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-[10px] font-mono text-gold">0{categories.length}</span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-green-dark/30 text-center lg:text-left">
              Scroll to discover more
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Spacers: This drives the sticky transition logic */}
      <div className="h-[500vh] pointer-events-none" />
    </section>
  );
};

export default Collection;
