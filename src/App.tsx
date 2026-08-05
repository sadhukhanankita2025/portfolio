import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollToTopFab } from './components/ScrollToTopFab';
import { TechMarquee } from './components/TechMarquee';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Loading Screen Entrance */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Scroll Progress Bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Particle Neural Background */}
      <ParticleBackground />

      {/* Spotlight Custom Cursor */}
      <CustomCursor />

      {/* Main Content Layout */}
      {!isLoading && (
        <div className="relative z-10">
          <Navbar onOpenResume={() => setResumeOpen(true)} />
          <main>
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <TechMarquee />
            <Stats />
            <About onOpenResume={() => setResumeOpen(true)} />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />

          {/* Resume Modal */}
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

          {/* Floating Action Button (FAB) Scroll To Top */}
          <ScrollToTopFab />
        </div>
      )}
    </div>
  );
}
