const Order = () => (
  <section id="order" className="bg-white py-20 scroll-mt-28">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-5xl text-green-dark mb-10">How to own a Tvara piece.</h2>
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {[
          { num: '01', title: 'Browse & Choose', desc: 'Explore our collections online or on Instagram. Find a piece that speaks to you.' },
          { num: '02', title: 'WhatsApp Us', desc: "Send us a message with the piece you like. We'll discuss details, pricing, and customization." },
          { num: '03', title: 'Crafted for You', desc: "Once confirmed, our artisans begin crafting your piece. We ship securely to your doorstep." },
        ].map((step) => (
          <div key={step.num} className="bg-ivory p-10 border border-ivory-mid">
            <span className="font-serif text-5xl text-gold-light mb-6 block">{step.num}</span>
            <h3 className="font-serif text-2xl text-green-dark mb-4">{step.title}</h3>
            <p className="text-sm text-muted">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="mb-12">
        <a href="https://wa.me/919876543210" className="bg-gold hover:bg-green-dark text-white px-12 py-4 text-sm font-medium uppercase tracking-widest transition-all">
          Start on WhatsApp →
        </a>
      </div>
    </div>
  </section>
);

export default Order;
