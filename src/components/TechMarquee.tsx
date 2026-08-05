import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { TechLogo } from './TechLogo';

export const TechMarquee: React.FC = () => {
  const marqueeItems: Array<{
    name: string;
    category: string;
    logo?: string;
    logos?: string[];
  }> = [
    { name: 'PyTorch', category: 'Deep Learning', logo: 'PyTorch' },
    { name: 'TensorFlow', category: 'Neural Networks', logo: 'TensorFlow' },
    { name: 'PHP & MySQL', category: 'Backend & Relational DB', logos: ['PHP', 'MySQL'] },
    { name: 'Python', category: 'AI Core', logo: 'Python' },
    { name: 'React', category: 'Frontend UI', logo: 'React' },
    { name: 'TypeScript', category: 'Full Stack', logo: 'TypeScript' },
    { name: 'MySQL', category: 'Relational Database', logo: 'MySQL' },
    { name: 'OpenCV', category: 'Computer Vision', logo: 'OpenCV' },
    { name: 'Flask & FastAPI', category: 'Backend Microservices', logos: ['Flask', 'FastAPI'] },
    { name: 'AI Core / Grad-CAM', category: 'Explainable AI', logo: 'AI Core' },
    { name: 'Scikit-Learn', category: 'Machine Learning', logo: 'Scikit-learn' },
    { name: 'Pandas & NumPy', category: 'Data Science', logos: ['Pandas', 'NumPy'] },
    { name: 'C++', category: 'Core Systems', logo: 'C++' },
    { name: 'Node.js & Express', category: 'Backend API', logos: ['Node.js', 'Express'] },
    { name: 'Git & GitHub', category: 'Version Control', logos: ['Git', 'GitHub'] },
  ];

  // Repeat array twice for seamless continuous loop
  const doubleItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full py-8 bg-slate-950/60 border-y border-purple-500/20 backdrop-blur-md overflow-hidden relative z-10 my-10">
      {/* Side Fade Masks for Seamless Edge Effect */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 30,
        }}
        className="flex items-center gap-6 whitespace-nowrap w-max"
      >
        {doubleItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg group cursor-pointer hover:scale-105"
          >
            {item.logos ? (
              <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                {item.logos.map((logoName) => (
                  <TechLogo key={logoName} name={logoName} className="w-5 h-5" />
                ))}
              </div>
            ) : (
              <div className="p-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                <TechLogo name={item.logo || item.name} className="w-5 h-5" />
              </div>
            )}
            <div className="flex flex-col text-left">
              <span className="text-sm font-extrabold text-white group-hover:text-pink-300 transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                {item.category}
              </span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
