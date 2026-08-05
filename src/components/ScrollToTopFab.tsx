import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const ScrollToTopFab: React.FC = () => {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    // Scroll to top or element with id="hero"
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {showFab && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToHero}
          id="scroll-to-top-fab"
          aria-label="Return to Hero Section"
          className="fixed bottom-6 left-6 z-40 p-3.5 sm:p-4 rounded-full bg-slate-900/90 border border-purple-500/50 text-white shadow-2xl shadow-purple-900/50 backdrop-blur-md cursor-pointer group flex items-center gap-2 hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all"
        >
          <div className="relative">
            <ArrowUp className="w-5 h-5 text-pink-400 group-hover:-translate-y-1 transition-transform duration-300" />
            <Sparkles className="w-2.5 h-2.5 text-cyan-400 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="hidden md:inline-block text-xs font-mono font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
