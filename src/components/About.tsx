import { motion } from 'motion/react';

const About = () => (
  <section id="about" className="bg-ivory-mid pt-40 pb-24 scroll-mt-28">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] bg-white p-10 border border-ivory-dark overflow-hidden group"
        >
          <div className="absolute inset-6 border border-gold/30 pointer-events-none z-10" />
          <img 
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&h=1000&q=80" 
            alt="About Tvara" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl text-green-dark mb-8">The Story of Tvara</h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Tvara was born from a desire to bridge the gap between the grandeur of Indian heritage and the clean lines of modern aesthetics. Founded by Prinkle Bafna, our journey began with a simple belief: that jewelry should be more than just an ornament.
            </p>
            <p>
              Every piece at Tvara Jewels is a labor of love, handcrafted by master artisans who have kept the ancient techniques of jewelry making alive for generations. We specialize in real gold, polki, and uncut diamonds, accented with the finest pearls.
            </p>
            <p>
              Our designs are rooted in tradition but created for the woman of today—someone who values authenticity, appreciates the quiet luxury of handmade craft, and seeks pieces that tell her unique story.
            </p>
          </div>
          <a href="#collection" className="mt-10 inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-all">
            Explore our world
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
