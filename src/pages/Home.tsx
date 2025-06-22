import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TracksSection from '../components/TracksSection';
import FacilitiesSection from '../components/FacilitiesSection';
import ChiefGuestsSection from '../components/ChiefGuestsSection';
import PrizePoolSection from '../components/PrizePoolSection';
import BrochureSection from '../components/BrochureSection';
import ScheduleSection from '../components/ScheduleSection';
import FaqSection from '../components/FaqSection';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';

export default function Home() {
  
  useEffect(() => {
  console.log("Home component rendered");
}, []);

  return (
    <div className="min-h-screen bg-[var(--background)] cyber-grid">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <HeroSection />
        
        {/* About Section */}
        <section id="about" className="py-16">
          <div className="glass-panel p-8 max-w-4xl mx-auto scanline">
            <h2 className="text-3xl font-bold mb-6 neon-text text-center">ABOUT NEONEXUS</h2>
            <p className="mb-6 text-lg text-[var(--foreground-muted-dark)]">
              NeoNexus 2025 is a 36-hour national-level hackathon hosted by Ballari Institute of Technology and Management IEEE Student Branch. 
              We bring together the brightest minds to solve complex challenges at the intersection of technology and innovation.
            </p>
            <p className="mb-8 text-lg text-[var(--foreground-muted-dark)]">
              Our mission is to foster creativity, collaboration, and technical excellence through a competitive yet supportive environment. 
              Join us to bridge reality and digital frontiers through cutting-edge solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="glass-panel p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-[var(--secondary)]">2 CATEGORIES</h3>
                <p>Software & Hardware tracks with specialized challenges</p>
              </div>
              <div className="glass-panel p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-[var(--accent)]">₹50,000+</h3>
                <p>Prize pool with separate rewards for each track</p>
              </div>
            </div>
          </div>
        </section>
        
        <TracksSection />
        <FacilitiesSection />
        <ChiefGuestsSection />
        <PrizePoolSection />
        <BrochureSection />
        <ScheduleSection />
        <FaqSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}
