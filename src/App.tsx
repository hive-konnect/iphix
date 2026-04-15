import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PickupBanner from './components/PickupBanner';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Reviews from './components/Reviews';
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import AppointmentModal from './components/AppointmentModal';
import './App.css';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="app">
      <Navbar 
        onQuoteClick={() => setIsQuoteModalOpen(true)} 
        onAppointmentClick={() => setIsAppointmentModalOpen(true)} 
      />
      <Hero 
        onQuoteClick={() => setIsQuoteModalOpen(true)} 
        onAppointmentClick={() => setIsAppointmentModalOpen(true)} 
      />
      <div className="container">
        <PickupBanner />
        <Services />
        <Process />
        <Gallery />
        <WhyChooseUs />
        <About />
        <Reviews />
        <Statistics />
        <CTA 
          onQuoteClick={() => setIsQuoteModalOpen(true)} 
          onAppointmentClick={() => setIsAppointmentModalOpen(true)} 
        />
      </div>
      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  );
}

export default App;