import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Sparkles, Brain } from 'lucide-react';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING NEURAL NETWORKS...');

  useEffect(() => {
    const textList = [
      'INITIALIZING NEURAL NETWORKS...',
      'LOADING AI CORE & COMPUTER VISION MODELS...',
      'OPTIMIZING FULL STACK ARCHITECTURE...',
      'INITIALIZING ANKITA SADHUKHAN PORTFOLIO...'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 600);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentTextIndex = Math.min(
          Math.floor((next / 100) * textList.length),
          textList.length - 1
        );
        setLoadingText(textList[currentTextIndex]);
        return Math.min(next, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Central AI Logo */}
        <div className="relative mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="w-28 h-28 border-2 border-purple-500/30 border-t-purple-500 border-r-pink-500 rounded-full flex items-center justify-center p-2 glow-purple"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 border border-cyan-400/40 border-b-cyan-400 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-4 bg-purple-950/80 rounded-full border border-purple-400/40"
            >
              <Brain className="w-10 h-10 text-pink-400" />
            </motion.div>
          </div>
        </div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-extrabold tracking-wider text-gradient-primary mb-2"
        >
          ANKITA SADHUKHAN
        </motion.h1>

        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/90 font-mono mb-8">
          AI & Computer Science Engineer
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/90 p-1 rounded-full border border-purple-500/30 mb-4 shadow-lg">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Percentage & Status Text */}
        <div className="flex justify-between w-full text-xs font-mono text-slate-400 mb-2">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-pink-400 animate-spin" />
            {loadingText}
          </span>
          <span className="text-pink-400 font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
