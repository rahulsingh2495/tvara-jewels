import { Hammer, ShieldCheck, Heart } from 'lucide-react';

const Craft = () => (
  <section id="craft" className="bg-green-dark text-white py-20 scroll-mt-28">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-16 text-center">
        <div className="flex flex-col items-center">
          <Hammer className="text-gold mb-6" size={40} strokeWidth={1} />
          <h3 className="font-serif text-3xl text-gold-light mb-4">Entirely Handcrafted</h3>
          <p className="text-white/70 text-sm">No mass production. Every piece is built from scratch by artisans who have mastered their craft over decades.</p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck className="text-gold mb-6" size={40} strokeWidth={1} />
          <h3 className="font-serif text-3xl text-gold-light mb-4">Finest Materials</h3>
          <p className="text-white/70 text-sm">We use only hallmarked gold, certified uncut diamonds, and natural gemstones to ensure your heirloom lasts forever.</p>
        </div>
        <div className="flex flex-col items-center">
          <Heart className="text-gold mb-6" size={40} strokeWidth={1} />
          <h3 className="font-serif text-3xl text-gold-light mb-4">Made for You</h3>
          <p className="text-white/70 text-sm">Jewelry is personal. We work closely with you to customize designs that reflect your personality and style.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Craft;
