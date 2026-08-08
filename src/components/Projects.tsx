import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { TechLogo } from './TechLogo';
import {
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  Brain,
  Activity,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  Dna,
  ShieldCheck,
  Cpu,
  Server,
  Microscope,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const categories = [
    { name: 'All', label: 'All Projects', icon: Layers },
    { name: 'Full Stack Web Application', label: 'Full Stack EMR', icon: Server },
    { name: 'Explainable AI Healthcare Platform', label: 'Explainable AI', icon: Brain },
    { name: 'AI Disease Prediction Platform', label: 'Disease Predictor', icon: Stethoscope },
    { name: 'Machine Learning Healthcare', label: 'Cognitive ML', icon: Cpu },
    { name: 'AI Medical Diagnosis', label: 'Audio Diagnosis', icon: Activity },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);
  const clampedIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleCategoryChange = (catName: string) => {
    setActiveCategory(catName);
    setCurrentIndex(0);
  };

  const getAccentStyles = (accent: string) => {
    switch (accent) {
      case 'blue':
        return {
          border: 'border-blue-500/40 hover:border-purple-400',
          glow: 'group-hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]',
          gradient: 'from-purple-600 via-indigo-600 to-blue-500',
          badgeBg: 'bg-blue-950/80 text-blue-300 border-blue-500/40',
          bulletIcon: 'text-blue-400',
          btnBg: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-purple-600/25'
        };
      case 'rose':
        return {
          border: 'border-rose-500/40 hover:border-pink-400',
          glow: 'group-hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]',
          gradient: 'from-purple-600 via-pink-600 to-rose-500',
          badgeBg: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
          bulletIcon: 'text-rose-400',
          btnBg: 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 shadow-purple-600/25'
        };
      case 'emerald':
        return {
          border: 'border-emerald-500/40 hover:border-emerald-400',
          glow: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
          gradient: 'from-purple-600 via-pink-600 to-emerald-400',
          badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
          bulletIcon: 'text-emerald-400',
          btnBg: 'bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 shadow-purple-600/25'
        };
      case 'purple':
        return {
          border: 'border-purple-500/40 hover:border-purple-300',
          glow: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]',
          gradient: 'from-purple-600 via-pink-600 to-cyan-500',
          badgeBg: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
          bulletIcon: 'text-purple-400',
          btnBg: 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-purple-600/25'
        };
      case 'cyan':
      default:
        return {
          border: 'border-cyan-500/40 hover:border-pink-400',
          glow: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]',
          gradient: 'from-purple-600 via-pink-500 to-cyan-400',
          badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
          bulletIcon: 'text-cyan-400',
          btnBg: 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-purple-600/25'
        };
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      {/* Circuit / Medical Ambient Floating Background Assets in Signature Purple/Pink Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[200px] pointer-events-none" />
      
      {/* Decorative Floating Medical & AI Icons */}
      <div className="absolute top-20 left-8 text-purple-500/10 animate-pulse pointer-events-none">
        <Stethoscope className="w-24 h-24" />
      </div>
      <div className="absolute top-40 right-12 text-pink-500/10 animate-pulse pointer-events-none">
        <Dna className="w-28 h-28" />
      </div>
      <div className="absolute bottom-20 left-16 text-cyan-500/10 animate-pulse pointer-events-none">
        <HeartPulse className="w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <ShieldCheck className="w-4 h-4 text-pink-400" />
            <span>AI CLINICAL INVENTORIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
          >
            Healthcare & <span className="text-gradient-primary">AI Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
          >
            Building intelligent healthcare solutions powered by Artificial Intelligence, Machine Learning, and Modern Web Technologies.
          </motion.p>
        </div>

        {/* Filter Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 max-w-5xl mx-auto"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count =
              cat.name === 'All'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.name).length;
            const isActive = activeCategory === cat.name;

            return (
              <button
                key={cat.name}
                onClick={() => handleCategoryChange(cat.name)}
                className={`relative group px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white border-purple-400 shadow-[0_0_25px_rgba(236,72,153,0.35)] scale-105'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-purple-500/40 hover:text-white hover:scale-102'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-white' : 'text-purple-400 group-hover:text-pink-300'
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white font-black'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Carousel Navigation Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
            <span>
              Showing <strong className="text-white">{Math.min(itemsPerPage, filteredProjects.length)}</strong> of{' '}
              <strong className="text-white">{filteredProjects.length}</strong> Healthcare & AI Inventories
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={filteredProjects.length <= itemsPerPage}
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-slate-800/80 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 text-purple-400" />
            </button>

            <span className="text-xs font-mono font-bold text-purple-300 px-1">
              Page {clampedIndex + 1} of {maxIndex + 1}
            </span>

            <button
              onClick={handleNext}
              disabled={filteredProjects.length <= itemsPerPage}
              className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-slate-800/80 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 text-pink-400" />
            </button>
          </div>
        </div>

        {/* Single Line Carousel Slider Track with Side Floating Swipe Buttons */}
        <div
          className="relative py-4 group/carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Floating Left Swipe Button */}
          {filteredProjects.length > itemsPerPage && (
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-slate-900/90 border border-purple-500/60 text-purple-300 hover:text-white hover:bg-purple-600 hover:border-pink-400 shadow-[0_0_25px_rgba(168,85,247,0.5)] backdrop-blur-md transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-110 active:scale-95 group/btn"
              aria-label="Swipe Left / Previous Projects"
              title="Swipe Left to see Previous Project"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5] group-hover/btn:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Floating Right Swipe Button */}
          {filteredProjects.length > itemsPerPage && (
            <button
              onClick={handleNext}
              className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-slate-900/90 border border-pink-500/60 text-pink-300 hover:text-white hover:bg-pink-600 hover:border-purple-400 shadow-[0_0_25px_rgba(236,72,153,0.5)] backdrop-blur-md transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-110 active:scale-95 group/btn"
              aria-label="Swipe Right / Next Projects"
              title="Swipe Right to see Next Project"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5] group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Overflow Container */}
          <div className="overflow-hidden py-2 -mx-2 px-2">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(calc(-${clampedIndex} * (100% / ${itemsPerPage} + ${24 / itemsPerPage}px)))`,
              }}
            >
            {filteredProjects.map((project) => {
              const styles = getAccentStyles(project.cardAccent);

              return (
                <div
                  key={project.id}
                  className="shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex flex-col"
                >
                  <div
                    className={`group relative rounded-3xl bg-slate-900/80 backdrop-blur-xl border ${styles.border} ${styles.glow} transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:-translate-y-1 h-full`}
                  >
                    {/* Top Glowing Header Accent Bar */}
                    <div className={`h-1.5 w-1.5 bg-gradient-to-r ${styles.gradient}`} />

                    <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
                      <div>
                        {/* Top Media Image Banner */}
                        <div className="relative h-59 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-inner group-hover:border-slate-700 transition-colors">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover:scale-95 transition-transform duration-700 filter brightness-95"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                          {/* Category Pill Tag */}
                          <div className="absolute top-3 left-3">
                            <span
                              className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${styles.badgeBg}`}
                            >
                              <Microscope className="w-3.5 h-3.5" />
                              <span>{project.category}</span>
                            </span>
                          </div>

                          {/* Metrics Badge */}
                          {project.metrics && (
                            <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
                              <span className="text-xs font-mono font-bold text-slate-200 truncate">
                                {project.metrics}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Title & Category */}
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-xs font-mono text-purple-300 mb-3 font-semibold">
                            {project.subtitle}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                          {project.description}
                        </p>

                        {/* Features List */}
                        {project.features && project.features.length > 0 && (
                          <div className="mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2.5 flex items-center gap-1.5">
                              <Activity className="w-3.5 h-3.5 text-pink-400" />
                              <span>Key Capabilities & Features</span>
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {project.features.map((feat) => (
                                <div key={feat} className="flex items-center gap-2 text-xs text-slate-200">
                                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${styles.bulletIcon}`} />
                                  <span className="line-clamp-1">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technology Stack Badges */}
                        <div className="mb-6">
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                            Technologies Used
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono font-medium text-slate-300 hover:text-white hover:border-purple-500/50 transition-colors flex items-center gap-1.5 shadow-sm"
                              >
                                <TechLogo name={tech} className="w-3.5 h-3.5" />
                                <span>{tech}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Bottom Action Buttons */}
                      <div className="pt-5 border-t border-slate-800/80 flex items-center gap-2.5">
                        {/* GitHub Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 transition-all cursor-pointer flex items-center justify-center gap-2 text-xs font-bold shadow-md"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>

                        {/* Live Demo Button */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 py-2.5 px-3.5 rounded-xl ${styles.btnBg} text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:scale-102`}
                            title="Live Demo Application"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* Slide Indicator Dots */}
        {filteredProjects.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === clampedIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.5)]'
                    : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
