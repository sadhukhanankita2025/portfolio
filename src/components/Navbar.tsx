import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileDown, Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll Spy for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-950/40'
          : 'py-4 sm:py-5 bg-gradient-to-b from-slate-950/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none relative z-50 touch-manipulation active:scale-95"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/50 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-xl tracking-tighter group-hover:scale-105 transition-transform">
              A
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-xl text-white group-hover:text-purple-300 transition-colors">
              ANKITA
            </span>
            <span className="text-[9px] tracking-[0.2em] text-cyan-400 font-mono font-medium -mt-1">
              FULL STACK & AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full shadow-md shadow-purple-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side Action Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white overflow-hidden glass-button cursor-pointer touch-manipulation hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download className="w-3.5 h-3.5 relative z-10 text-pink-400 group-hover:text-white transition-colors group-hover:animate-bounce" />
            <span className="relative z-10 tracking-wide">RESUME</span>
            <Sparkles className="w-3 h-3 relative z-10 text-cyan-300 opacity-80" />
          </button>
        </div>

        {/* Mobile & Tablet Action Header Buttons */}
        <div className="lg:hidden flex items-center gap-2.5 relative z-50">
          <button
            onClick={onOpenResume}
            className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-900 cursor-pointer touch-manipulation active:scale-90 transition-transform shadow-md"
            title="Download Resume"
            aria-label="Resume"
          >
            <FileDown className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-pink-500 cursor-pointer touch-manipulation active:scale-90 transition-transform shadow-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-pink-400" /> : <Menu className="w-6 h-6 text-purple-400" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-purple-500/30 px-6 py-6 relative z-50 shadow-2xl shadow-purple-950/80"
          >
            <div className="flex flex-col gap-2.5 max-w-md mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer touch-manipulation active:scale-98 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-900/80 to-pink-900/80 text-white border border-purple-500/50 shadow-lg shadow-purple-900/30'
                      : 'text-slate-300 bg-slate-900/60 hover:bg-slate-900 hover:text-white border border-slate-800/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_10px_#EC4899]" />
                  )}
                </button>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="mt-3 w-full py-4 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white flex items-center justify-center gap-2.5 shadow-xl shadow-purple-600/30 cursor-pointer touch-manipulation active:scale-98"
              >
                <Download className="w-4.5 h-4.5" />
                <span>DOWNLOAD RESUME PDF</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

