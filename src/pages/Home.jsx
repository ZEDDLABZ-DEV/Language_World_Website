import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Screenshots from '../components/sections/Screenshots';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FAQ from '../components/sections/FAQ';
import DownloadCTA from '../components/sections/DownloadCTA';
import Contact from '../components/sections/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.hash, location.key]);

  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <WhyChooseUs />
      <FAQ />
      <DownloadCTA />
      <Contact />
    </>
  );
}
