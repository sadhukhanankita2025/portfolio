import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Sparkles,
  ArrowRight,
  Brain,
  Cpu,
  Bot
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentTitle = PERSONAL_INFO.roleTitles[titleIndex];

  // Typing Effect Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.roleTitles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentTitle.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, currentTitle]);

  // Mouse Parallax Effect for 3D card tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: PERSONAL_INFO.github,
      icon: <TechLogo name="GitHub" className="w-5 h-5" />,
      color: 'hover:text-white hover:border-slate-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]',
    },
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.linkedin,
      icon: <TechLogo name="LinkedIn" className="w-5 h-5" />,
      color: 'hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]',
    },
    {
      name: 'Naukri',
      url: PERSONAL_INFO.naukri,
      icon: <TechLogo name="Naukri" className="w-5 h-5" />,
      color: 'hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]',
    },
    {
      name: 'Email',
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail className="w-5 h-5 text-pink-400" />,
      color: 'hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-6 shadow-lg shadow-purple-950/40"
          >
            <span className="text-xl">Hello</span>
            <span className="animate-bounce">👋</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping ml-1" />
            <span className="text-xs text-slate-400 font-mono">AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Large Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 leading-none">
            ANKITA <br />
            <span className="text-gradient-primary">SADHUKHAN</span>
          </h1>

          {/* Typing Animation Subtitle */}
          <div className="h-12 flex items-center mb-6">
            <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400 animate-spin" />
              <span>{displayText}</span>
              <span className="w-0.5 h-7 bg-pink-400 animate-pulse ml-0.5" />
            </span>
          </div>

          {/* Short Bio Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
            {PERSONAL_INFO.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 w-full sm:w-auto relative z-20">
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-extrabold text-sm tracking-wider shadow-xl shadow-purple-600/30 hover:shadow-purple-600/60 transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer touch-manipulation"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-200 font-bold text-sm tracking-wider hover:bg-purple-950/50 hover:border-pink-500 transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer touch-manipulation"
            >
              <span>CONTACT ME</span>
            </button>
          </div>

          {/* Social Icons Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 relative z-20">
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase mr-1 sm:mr-2">
              CONNECT:
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 transition-all duration-300 cursor-pointer touch-manipulation active:scale-90 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Floating Pic (No Background Rings or Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -14, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0"
        >
          <div className="relative max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl w-full flex items-center justify-center p-0">
            {/* Pure Floating Picture */}
            <img
              src={PERSONAL_INFO.avatarUrl || "/ankita-character.svg"}
              alt="Ankita Sadhukhan"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/ankita-character.svg";
              }}
              className="w-full h-auto max-h-[620px] sm:max-h-[700px] lg:max-h-[800px] object-contain drop-shadow-[0_30px_60px_rgba(168,85,247,0.5)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
