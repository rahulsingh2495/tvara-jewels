import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Icons from './Icons';

const Hero = () => {
  const signaturePieces = [
    {
      id: 1,
      title: "Heritage Necklace Set",
      desc: "Classic polki set with emerald drops.",
      Icon: Icons.Necklace,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&h=800&q=80"
    },
    {
      id: 2,
      title: "Statement Bangle",
      desc: "Hand-carved gold with uncut diamonds.",
      Icon: Icons.Bangle,
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600&h=800&q=80"
    },
    {
      id: 3,
      title: "Polki Drop Earrings",
      desc: "Elegant pearls and uncut diamond drops.",
      Icon: Icons.Earrings,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&h=800&q=80"
    }
  ];

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 bg-white overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 justify-center items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="text-[10px] md:text-[12px] tracking-[0.3em] text-muted uppercase mb-6 block">
              Handcrafted Fine Jewelry · By Prinkle Bafna
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl text-green-dark mb-6 leading-[1.2] lg:leading-[1.1] max-w-md md:max-w-4xl">
              Where heritage <br className="hidden md:block" />
              <span className="italic font-light">meets modern design.</span>
            </h1>
            <p className="text-xl md:text-3xl italic text-gold mb-8 font-serif">
              Timeless. Beautiful. You.
            </p>
            <p className="text-base md:text-lg text-muted mb-10 max-w-sm md:max-w-lg">
              Real gold. Uncut diamonds. Crafted by hand. Each piece is made to be worn, remembered, and passed on.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full sm:w-auto">
              <a href="#collection" className="w-full sm:w-auto bg-gold hover:bg-green-dark text-white px-10 py-4 text-[12px] font-medium uppercase tracking-widest transition-all hover:-translate-y-1 text-center">
                View the Collection
              </a>
              <a href="#craft" className="group flex items-center gap-2 text-[12px] uppercase tracking-widest text-green-dark font-semibold border-b border-gold pb-1">
                View the craft <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Rail */}
          <div className="relative flex gap-3 md:gap-6 h-[400px] md:h-[550px] w-full max-w-md mx-auto lg:max-w-none">
            {signaturePieces.map((piece, idx) => (
              <motion.div
                key={piece.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex-1 relative group bg-ivory-mid border border-gold/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              >
                {piece.image && (
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/90 via-transparent to-transparent" />
                <div className="relative h-full p-4 md:p-8 flex flex-col items-center justify-end text-center">
                  <div className="card-info text-white">
                    <h3 className="font-serif text-lg md:text-2xl mb-1 md:mb-2">{piece.title}</h3>
                    <p className="text-[8px] md:text-[10px] text-white/70 mb-4 md:mb-6 line-clamp-1 md:line-clamp-2 uppercase tracking-widest leading-relaxed">{piece.desc}</p>
                    <a href="https://wa.me/919876543210" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gold opacity-100 lg:opacity-0 lg:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-1">
                      Enquire <span className="lg:hidden text-[12px] mt-0.5">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
