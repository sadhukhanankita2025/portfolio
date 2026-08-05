import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-purple-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5 text-pink-400" />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4"
          >
            EDUCATION & <span className="text-gradient-primary">DEGREES</span>
          </motion.h2>

          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Formal education in Computer Science & Engineering with strong academic honors.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-purple-500/50 relative overflow-hidden group"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/30 transition-all" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest block mb-1">
                    {edu.board}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-wide mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-500/40 text-white font-extrabold text-sm font-mono flex items-center gap-2 shadow-lg">
                    <Award className="w-4 h-4 text-pink-400" />
                    <span>CGPA: {edu.grade}</span>
                  </div>

                  <div className="px-3.5 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  Key Highlights & Specializations:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {edu.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
