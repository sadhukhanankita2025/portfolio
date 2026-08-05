import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, Sparkles, Brain, Cpu, Terminal, CheckCircle2, Award } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const highlights = [
    'Full Stack Web Architecture (React 18, Node.js, Express & TypeScript)',
    'Database Engineering & Relational Schemas (MySQL & PHP)',
    'Specializing in Deep Learning, PyTorch & Computer Vision (Grad-CAM)',
    '8.63 CGPA in B.Tech Computer Science & Engineering',
  ];

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase mb-3"
          >
            <Brain className="w-3.5 h-3.5 text-pink-400" />
            <span>DISCOVER MY JOURNEY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            ABOUT <span className="text-gradient-primary">ANKITA SADHUKHAN</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Illustration / Neural Node Diagram Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative glass-panel p-8 rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl group">
              {/* Background Neon Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

              {/* Animated Floating Graphic Element featuring Image in Circle */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 p-1.5 shadow-2xl shadow-purple-600/40 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden relative flex items-center justify-center">
                      <img
                        src={PERSONAL_INFO.avatarUrl || "/ankita-character.svg"}
                        alt="Ankita Sadhukhan"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/ankita-character.svg";
                        }}
                        className="w-full h-full object-cover object-top filter saturate-110 brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 pointer-events-none" />
                      <div className="absolute bottom-3 left-2 right-2 px-2 text-center pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border border-purple-500/50 backdrop-blur-md text-[10px] font-mono font-bold text-pink-300 uppercase tracking-wider">
                          <Brain className="w-3 h-3 text-pink-400" />
                          FULL STACK & AI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metrics Badge */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-xs text-slate-400 font-mono block">B.Tech CGPA</span>
                    <span className="text-xl font-extrabold text-pink-400 font-mono">8.63</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-xs text-slate-400 font-mono block">Diploma Score</span>
                    <span className="text-xl font-extrabold text-cyan-400 font-mono">72%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="glass-card p-5 rounded-2xl border border-slate-800/80">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-bold text-sm tracking-wider shadow-xl shadow-purple-600/30 hover:shadow-purple-600/60 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>DOWNLOAD RESUME</span>
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
