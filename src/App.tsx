/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Craft from './components/Craft';
import Gallery from './components/Gallery';
import Founder from './components/Founder';
import Order from './components/Order';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <About />
        <Collection />
        <Craft />
        <Gallery />
        <Founder />
        <Order />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl z-[100] transition-transform hover:scale-110 hover:rotate-12"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
