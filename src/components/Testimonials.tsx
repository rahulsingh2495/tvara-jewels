const Testimonials = () => (
  <section id="testimonials" className="bg-ivory-mid py-20 scroll-mt-28">
    <div className="container mx-auto px-6">
      <h2 className="text-center text-4xl text-green-dark mb-10">Voices of Tvara.</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Ananya R.', text: '"The necklace I ordered for my wedding was beyond beautiful. The craftsmanship is so fine, it truly felt like an heirloom piece."' },
          { name: 'Meera S.', text: '"Prinkle helped me design a custom ring that was exactly what I had in mind. The attention to detail is incredible."' },
          { name: 'Priya K.', text: '"I love how Tvara pieces are traditional yet so wearable with modern outfits. My go-to for statement jewelry."' },
        ].map((t, i) => (
          <div key={i} className="bg-white p-12 text-center border border-ivory-dark">
            <p className="italic text-lg text-muted mb-8">{t.text}</p>
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
