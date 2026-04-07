import logo from '../assets/Tvara logo.png';

const Footer = () => (
  <footer className="bg-[#050d0a] text-white py-20 border-t border-gold/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="inline-block transition-transform hover:scale-105 duration-300">
            <img
              src={logo}
              alt="Tvara Jewels"
              className="h-auto w-[180px] object-contain mb-8 brightness-110"
            />
          </a>
          <p className="text-white/50 text-sm max-w-xs md:max-w-none">Handcrafted fine jewelry where heritage meets modern design. Crafted with love in India.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-gold text-sm uppercase tracking-widest mb-8">Explore</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#collection" className="hover:text-gold transition-colors">Collection</a></li>
            <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            <li><a href="#craft" className="hover:text-gold transition-colors">The Craft</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-gold text-sm uppercase tracking-widest mb-8">Support</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#order" className="hover:text-gold transition-colors">How to Order</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Care Guide</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-gold text-sm uppercase tracking-widest mb-8">Connect</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="https://instagram.com/tvarajewels" className="hover:text-gold transition-colors">Instagram</a></li>
            <li><a href="https://wa.me/919876543210" className="hover:text-gold transition-colors">WhatsApp</a></li>
            <li><a href="mailto:hello@tvarajewels.com" className="hover:text-gold transition-colors">Email Us</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40 tracking-widest">
        <p>© 2026 TVARA JEWELS. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED BY PRINKLE BAFNA</p>
      </div>
    </div>
  </footer>
);

export default Footer;
