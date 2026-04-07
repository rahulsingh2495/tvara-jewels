const Founder = () => (
  <section id="founder" className="bg-ivory pt-40 pb-24 scroll-mt-28">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative p-12 bg-white border border-ivory-mid group">
          <div className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-gold z-10" />
          <div className="aspect-[4/5] bg-ivory-mid flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=1000&q=80" 
              alt="Prinkle Bafna" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div>
          <p className="font-serif text-3xl italic text-green-mid mb-10 leading-relaxed">
            "Jewelry is the most intimate form of art. It carries memories, celebrates milestones, and becomes a part of who you are."
          </p>
          <span className="text-2xl text-gold block mb-1">Prinkle Bafna</span>
          <span className="text-xs uppercase tracking-widest text-muted mb-8 block">Founder & Creative Director</span>
          <div className="space-y-4 text-muted">
            <p>Prinkle's vision for Tvara is rooted in her deep appreciation for Indian craftsmanship. With a background in design and a passion for storytelling, she curates each collection to be a balance of heritage and contemporary flair.</p>
            <p>Her approach is personal—she believes in building relationships with her clients, understanding their vision, and bringing it to life through the hands of her master artisans.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
