import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import LazyImage from './LazyImage';
import gallery1 from '../assets/gallery1.webp'
import gallery2 from '../assets/gallery2.webp'
import gallery3 from '../assets/gallery3.webp'
import gallery4 from '../assets/gallery4.webp'
import gallery5 from '../assets/gallery5.webp'
import gallery6 from '../assets/gallery6.webp'
import gallery7 from '../assets/gallery7.webp'
import gallery8 from '../assets/gallery8.webp'

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background text parallax
  const textX = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  // Column parallax transforms
  const col1Y = useTransform(scrollYProgress, [0, 1], ["125%", "-125%"]);
  const col2Y = useTransform(scrollYProgress, [0, 1], ["60%", "-60%"]);
  const col3Y = useTransform(scrollYProgress, [0, 1], ["-60%", "60%"]);
  const col4Y = useTransform(scrollYProgress, [0, 1], ["-125%", "125%"]);

  // Mobile floating transforms
  const mobile1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const mobile2Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const products = [
    { name: 'The Lotus Ring', desc: 'Polki & Pink Enamel', image: gallery1 },
    { name: 'Chandbali Drops', desc: 'Uncut Diamonds & Pearls', image: gallery2 },
    { name: 'Royal Kada', desc: '22k Gold Hand-carved', image: gallery3 },
    { name: 'Temple Choker', desc: 'Heritage Gold Work', image: gallery4 },
    { name: 'Floral Studs', desc: 'Minimal Polki Design', image: gallery5 },
    { name: 'Bridal Nath', desc: 'Traditional Craftsmanship', image: gallery6 },
    { name: 'Emerald Drops', desc: 'Zambian Emeralds & Gold', image: gallery7 },
    { name: 'Ruby Bangle', desc: 'Burmese Rubies & Diamonds', image: gallery8 },
  ];

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
          <motion.span
            className="text-[40vw] font-serif text-green-dark whitespace-nowrap"
            style={{ x: textX }}
          >
            TVARA ATELIER
          </motion.span>
        </div>

        {/* Section Heading */}
        <div className="absolute top-75 lg:left-0 left-3 lg:right-0 right-3 z-20 text-center pt-10 pointer-events-none">
          <p className="text-xl md:text-3xl italic text-gold mb-8 font-serif">
            Timeless. Beautiful. You.
          </p>
        </div>

        <div className="container mx-auto px-4 lg:px-12 relative z-10 h-full flex items-center justify-center">

          {/* Left Side Collage */}
          <div className="hidden md:flex gap-4 lg:gap-8 absolute left-4 lg:left-12 h-full items-center">
            {/* Column 1 - Fast Up */}
            <motion.div
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 mt-[-50%]"
              style={{ y: col1Y, willChange: 'transform' }}
            >
              {col1.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-4/5 overflow-hidden">
                    <LazyImage src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>
            {/* Column 2 - Slow Up */}
            <motion.div
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 mt-48"
              style={{ y: col2Y, willChange: 'transform' }}
            >
              {col2.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-4/5 overflow-hidden">
                    <LazyImage src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side Collage */}
          <div className="hidden md:flex gap-4 lg:gap-8 absolute right-4 lg:right-12 h-full items-center">
            {/* Column 3 - Slow Down */}
            <motion.div
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 mt-[-150px]"
              style={{ y: col3Y, willChange: 'transform' }}
            >
              {col3.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-4/5 overflow-hidden">
                    <LazyImage src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>
            {/* Column 4 - Fast Down */}
            <motion.div
              className="flex flex-col gap-8 lg:gap-12 w-40 lg:w-64 mt-[50%]"
              style={{ y: col4Y, willChange: 'transform' }}
            >
              {col4.map((p, i) => (
                <div key={i} className="bg-white p-2 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-4/5 overflow-hidden">
                    <LazyImage src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile View Images (Floating) */}
          <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <motion.div
              className="absolute top-1/4 -left-10 w-40 h-52 bg-white p-2 shadow-lg"
              style={{ y: mobile1Y, rotate: -12 }}
            >
              <LazyImage src={products[0].image} alt={products[0].name} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 -right-10 w-40 h-52 bg-white p-2 shadow-lg"
              style={{ y: mobile2Y, rotate: 12 }}
            >
              <LazyImage src={products[4].image} alt={products[4].name} className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>

        {/* Scroll Progress Bar (Vertical) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-40 w-px bg-ivory-dark hidden lg:block">
          <motion.div
            className="w-full bg-gold"
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
