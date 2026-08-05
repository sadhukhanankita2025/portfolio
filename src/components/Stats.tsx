import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/portfolioData';
import { Award, Code, Cpu, GraduationCap, Flame } from 'lucide-react';

export const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // ms
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        STATS.map((stat) => {
          const val = stat.value * Math.min(progress, 1);
          return stat.decimals ? parseFloat(val.toFixed(2)) : Math.floor(val);
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  const icons = [
    <Code className="w-6 h-6 text-purple-400" />,
    <Cpu className="w-6 h-6 text-pink-400" />,
    <Award className="w-6 h-6 text-cyan-400" />,
    <GraduationCap className="w-6 h-6 text-emerald-400" />,
    <Flame className="w-6 h-6 text-amber-400 animate-bounce" />,
  ];

  return (
    <section ref={ref} className="py-12 relative z-10 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center relative group overflow-hidden border border-slate-800/80 hover:border-purple-500/50 ${
                idx === STATS.length - 1 && STATS.length % 2 !== 0 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600/10 rounded-full blur-xl group-hover:bg-purple-600/30 transition-all" />

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 mb-3 shadow-inner">
                {icons[idx] || <Code className="w-6 h-6 text-purple-400" />}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-mono flex items-center justify-center">
                <span>{counts[idx]}</span>
                <span className="text-gradient-purple ml-0.5">{stat.suffix}</span>
              </div>

              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
