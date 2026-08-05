import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechLogo } from './TechLogo';
import {
  ArrowUp,
  Mail,
  Heart,
  MapPin,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Send,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Brain
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer className="relative bg-[#060A12] pt-20 pb-10 border-t border-purple-500/20 overflow-hidden text-slate-300">
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-purple-600/15 via-pink-600/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative Wave Header Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none opacity-25">
        <svg
          className="relative block w-full h-12 text-purple-600"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Call-To-Action Banner Card */}
        <div className="relative mb-16 rounded-3xl p-8 sm:p-10 bg-slate-900/80 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Full-Time Roles & AI Engineering Opportunities</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
                Let's Build Intelligent <span className="text-gradient-primary">AI Solutions</span> Together
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Interested in collaboration, medical AI research, or full-stack software development? Feel free to reach out.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2.5 shadow-lg shadow-purple-600/30 hover:scale-105 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 text-slate-200 text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer hover:bg-slate-900"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-pink-400 shadow-md">
                  <Brain className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xl font-black text-white tracking-wider block">
                    ANKITA SADHUKHAN
                  </span>
                  <span className="text-xs font-mono text-purple-300 font-medium block">
                    AI Developer & Computer Science Engineer
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Specializing in Explainable AI, Medical Deep Learning, and Full-Stack Systems. Passionate about turning complex medical datasets into actionable clinical decision support software.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Connection Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500 hover:scale-110 transition-all flex items-center justify-center group shadow-md"
              >
                <TechLogo name="GitHub" className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-400 hover:scale-110 transition-all flex items-center justify-center group shadow-md"
              >
                <TechLogo name="LinkedIn" className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.naukri}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Naukri Profile"
                className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400 hover:scale-110 transition-all flex items-center justify-center group shadow-md"
              >
                <TechLogo name="Naukri" className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-400 hover:scale-110 transition-all flex items-center justify-center group shadow-md"
              >
                <Mail className="w-4 h-4 text-pink-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest block mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Navigation</span>
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Me', href: '#about' },
                { name: 'Featured Projects', href: '#projects' },
                { name: 'Education', href: '#education' },
                { name: 'Contact Info', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-pink-400 hover:translate-x-1 transition-all inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Stack & Expertise (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest block mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Technical Stack</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Python',
                'PyTorch',
                'TensorFlow',
                'React 18',
                'Flask',
                'MySQL',
                'SHAP',
                'Scikit-learn',
                'OpenCV',
                'PHP',
                'Tailwind CSS',
                'Streamlit'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:border-purple-500/50 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Academic Credential Note */}
            <div className="mt-5 p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs">
              <p className="font-mono text-purple-300 font-bold mb-1">B.Tech CS Engineering</p>
              <p className="text-[11px] text-slate-300">TECHNO INSTITUTE OF ENGINEERING & MANAGEMENT(Techno Engineering College Banipur) • CGPA: 8.63</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>Designed & Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-current animate-pulse" />
            <span>by <strong className="text-slate-200">Ankita Sadhukhan</strong></span>
          </div>

          <div className="flex items-center gap-4">


            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-purple-500/40 text-xs font-bold text-slate-200 hover:text-white hover:border-pink-500 transition-all cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-pink-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

