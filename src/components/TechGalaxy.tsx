import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECH_CATEGORIES } from '../data/portfolioData';
import { TechLogo } from './TechLogo';
import {
  Code,
  Layout,
  Server,
  BrainCircuit,
  Database,
  Wrench,
  Sparkles,
  Search,
  Grid,
  Target,
  BarChart2,
} from 'lucide-react';

type ViewMode = 'bento' | 'radar' | 'matrix';

export const TechGalaxy: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<ViewMode>('bento');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Category Icon Map
  const categoryIcons: Record<string, React.ReactNode> = {
    Programming: <Code className="w-5 h-5 text-purple-400" />,
    Frontend: <Layout className="w-5 h-5 text-pink-400" />,
    Backend: <Server className="w-5 h-5 text-cyan-400" />,
    'AI / ML': <BrainCircuit className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-amber-400" />,
    Tools: <Wrench className="w-5 h-5 text-indigo-400" />,
  };

  // Color theme mapping per category
  const categoryThemes: Record<string, { border: string; bg: string; badge: string; text: string; glow: string }> = {
    Programming: {
      border: 'border-purple-500/30 hover:border-purple-500/60',
      bg: 'bg-purple-950/20',
      badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      text: 'text-purple-400',
      glow: 'shadow-purple-500/20',
    },
    Frontend: {
      border: 'border-pink-500/30 hover:border-pink-500/60',
      bg: 'bg-pink-950/20',
      badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
      text: 'text-pink-400',
      glow: 'shadow-pink-500/20',
    },
    Backend: {
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      bg: 'bg-cyan-950/20',
      badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20',
    },
    'AI / ML': {
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      bg: 'bg-emerald-950/20',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20',
    },
    Database: {
      border: 'border-amber-500/30 hover:border-amber-500/60',
      bg: 'bg-amber-950/20',
      badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      text: 'text-amber-400',
      glow: 'shadow-amber-500/20',
    },
    Tools: {
      border: 'border-indigo-500/30 hover:border-indigo-500/60',
      bg: 'bg-indigo-950/20',
      badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      text: 'text-indigo-400',
      glow: 'shadow-indigo-500/20',
    },
  };

  // Flattened skills list
  const allSkills = useMemo(() => {
    return TECH_CATEGORIES.flatMap((cat) =>
      cat.skills.map((skill) => ({
        ...skill,
        category: cat.title,
      }))
    );
  }, []);

  // Filtered categories & skills
  const filteredCategories = useMemo(() => {
    return TECH_CATEGORIES.map((cat) => {
      const matchingSkills = cat.skills.filter((skill) => {
        const matchesCategory = activeCategory === 'All' || cat.title === activeCategory;
        const matchesSearch =
          !searchTerm ||
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cat.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      return {
        ...cat,
        skills: matchingSkills,
      };
    }).filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchTerm]);

  // Flattened filtered skills for matrix / radar
  const filteredSkillsList = useMemo(() => {
    return filteredCategories.flatMap((cat) =>
      cat.skills.map((skill) => ({
        ...skill,
        category: cat.title,
      }))
    );
  }, [filteredCategories]);

  // Stats summary calculations
  const totalSkillsCount = allSkills.length;

  return (
    <section id="tech" className="py-24 relative z-10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-lg shadow-purple-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>FULL-STACK & AI SPECIALIZATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4"
          >
            TECHNICAL <span className="text-gradient-primary">SKILLS & TOOLING</span>
          </motion.h2>

          {/* Interactive Stack Highlight Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-medium flex items-center gap-2">
              <TechLogo name="Python" className="w-4 h-4" />
              <TechLogo name="C++" className="w-4 h-4" />
              <span>Python & C/C++</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-medium flex items-center gap-2">
              <TechLogo name="React" className="w-4 h-4" />
              <TechLogo name="TypeScript" className="w-4 h-4" />
              <span>React & TypeScript</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-medium flex items-center gap-2">
              <TechLogo name="PHP" className="w-4 h-4" />
              <TechLogo name="MySQL" className="w-4 h-4" />
              <span>PHP & MySQL</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-2">
              <TechLogo name="PyTorch" className="w-4 h-4" />
              <span>PyTorch & Deep Learning</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-300 text-xs font-medium flex items-center gap-2">
              <TechLogo name="Node.js" className="w-4 h-4" />
              <TechLogo name="Express" className="w-4 h-4" />
              <span>Node.js & Express</span>
            </span>
          </motion.div>
        </div>

        {/* Toolbar & Filter Bar */}
        <div className="glass-panel rounded-3xl p-4 sm:p-6 mb-10 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search technology (e.g. PHP, MySQL, Python)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 text-xs sm:text-sm font-medium transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full lg:w-auto">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'All'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                All ({totalSkillsCount})
              </button>
              {TECH_CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(cat.title)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.title
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {categoryIcons[cat.title]}
                  <span>{cat.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                    {cat.skills.length}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-950/80 rounded-2xl border border-slate-800 w-full sm:w-auto justify-center">
              <button
                onClick={() => setViewMode('bento')}
                title="Bento Category Cards"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Bento</span>
              </button>
              <button
                onClick={() => setViewMode('radar')}
                title="Interactive Tech Radar"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'radar'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>Radar</span>
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                title="Skill Level Matrix"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Bento Grid Layout */}
        {viewMode === 'bento' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category) => {
                const theme = categoryThemes[category.title] || categoryThemes.Programming;
                return (
                  <motion.div
                    key={category.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`glass-card p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${theme.border} ${theme.bg}`}
                  >
                    {/* Background Subtle Accent Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                    {/* Category Title Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-700/60 shadow-inner">
                          {categoryIcons[category.title]}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                          <span className="text-xs font-mono text-slate-400">
                            {category.skills.length} Technologies
                          </span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${theme.badge}`}>
                        DOMAIN
                      </span>
                    </div>

                    {/* Skills Grid within Category - Round Moving Cards */}
                    <div className="space-y-3">
                      {category.skills.map((skill, index) => {
                        return (
                          <motion.div
                            key={skill.name}
                            onMouseEnter={() => setHoveredTech(skill.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                            animate={{
                              y: [0, index % 2 === 0 ? -3 : 3, 0],
                            }}
                            transition={{
                              duration: 4 + (index % 3),
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="p-3 rounded-2xl sm:rounded-full bg-slate-900/90 border border-slate-800/90 hover:border-purple-500/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-3.5 group/skill cursor-pointer relative overflow-hidden"
                          >
                            {/* Round Animated Circular Gauge */}
                            <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-950 border border-slate-800/90 group-hover/skill:border-purple-500/60 transition-colors shadow-inner">
                              <svg className="w-11 h-11 -rotate-90 transform" viewBox="0 0 36 36">
                                <path
                                  className="text-slate-800/80"
                                  strokeWidth="3"
                                  stroke="currentColor"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                  className="text-pink-400 transition-all duration-1000"
                                  strokeDasharray={`${skill.level}, 100`}
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  stroke="currentColor"
                                  fill="none"
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center p-2.5">
                                <TechLogo name={skill.name} className="w-5 h-5" />
                              </div>
                            </div>

                            {/* Info Content */}
                            <div className="flex-1 min-w-0 pr-1">
                              <div className="flex items-center justify-between mb-0.5">
                                <h4 className="text-sm font-bold text-slate-100 truncate group-hover/skill:text-purple-300 transition-colors">
                                  {skill.name}
                                </h4>
                                <span className="text-[11px] font-mono font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20 shadow-sm flex-shrink-0">
                                  {skill.level}%
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 truncate font-sans">
                                {skill.experience}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* View Mode 2: Interactive Tech Radar */}
        {viewMode === 'radar' && (
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Tech Competency Radar</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                Organized into concentric bands based on depth of experience: <strong className="text-purple-300">Core Mastery (90%+)</strong>, <strong className="text-pink-300">Production Ready (85-89%)</strong>, and <strong className="text-cyan-300">Specialized Tools (&lt;85%)</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Radar Target Diagram */}
              <div className="lg:col-span-7 flex justify-center items-center py-6 relative">
                <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                  {/* Concentric Rings */}
                  <div className="absolute inset-0 rounded-full border border-slate-800 bg-slate-950/40 flex items-center justify-center" />
                  <div className="absolute inset-[15%] rounded-full border border-purple-500/20 bg-purple-950/10 flex items-center justify-center" />
                  <div className="absolute inset-[35%] rounded-full border border-pink-500/30 bg-pink-950/20 flex items-center justify-center" />
                  <div className="absolute inset-[55%] rounded-full border border-cyan-500/40 bg-cyan-950/30 flex items-center justify-center" />

                  {/* Axis Crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-px bg-slate-800/80" />
                    <div className="h-full w-px bg-slate-800/80" />
                  </div>

                  {/* Ring Labels */}
                  <span className="absolute top-2 text-[10px] font-mono text-cyan-400 bg-slate-900/90 px-2 py-0.5 rounded-full border border-cyan-500/30">
                    Emerging & Tools (&lt;85%)
                  </span>
                  <span className="absolute top-[20%] text-[10px] font-mono text-pink-400 bg-slate-900/90 px-2 py-0.5 rounded-full border border-pink-500/30">
                    Production Stack (85-89%)
                  </span>
                  <span className="absolute top-[38%] text-[10px] font-mono text-purple-300 bg-slate-900/90 px-2 py-0.5 rounded-full border border-purple-500/30">
                    Core Mastery (90%+)
                  </span>

                  {/* Plot Skills as Orbital Points */}
                  {filteredSkillsList.map((skill, idx) => {
                    // Radius based on level (higher level = closer to center)
                    let ringRadiusPercent = 40; // Core
                    if (skill.level >= 90) {
                      ringRadiusPercent = 18;
                    } else if (skill.level >= 85) {
                      ringRadiusPercent = 32;
                    } else {
                      ringRadiusPercent = 44;
                    }

                    const total = filteredSkillsList.length || 1;
                    const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
                    const leftPercent = 50 + ringRadiusPercent * Math.cos(angle);
                    const topPercent = 50 + ringRadiusPercent * Math.sin(angle);
                    const isHovered = hoveredTech === skill.name;

                    return (
                      <motion.button
                        key={skill.name}
                        onClick={() => setHoveredTech(skill.name)}
                        onMouseEnter={() => setHoveredTech(skill.name)}
                        style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 border shadow-lg ${
                          isHovered
                            ? 'bg-purple-600 text-white border-white scale-125 z-30 shadow-purple-500/50'
                            : 'bg-slate-900/90 text-slate-200 border-slate-700/80 hover:border-purple-400 z-10 hover:scale-110'
                        }`}
                      >
                        <TechLogo name={skill.name} className="w-4 h-4" />
                        <span className="text-[11px] font-bold font-mono whitespace-nowrap">
                          {skill.name}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Radar Selected Detail Panel */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {hoveredTech ? (
                  (() => {
                    const skill = allSkills.find((s) => s.name === hoveredTech);
                    if (!skill) return null;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-6 rounded-3xl bg-slate-900/90 border border-purple-500/40 shadow-2xl relative"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-purple-950/40 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                            <TechLogo name={skill.name} className="w-8 h-8" />
                          </div>
                          <div>
                            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
                              {skill.category}
                            </span>
                            <h4 className="text-2xl font-bold text-white">{skill.name}</h4>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-xs font-mono mb-1.5">
                            <span className="text-slate-400">Proficiency Score</span>
                            <span className="text-pink-400 font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans mb-4">
                          <strong className="text-white block mb-1 font-mono">Scope & Experience:</strong>
                          {skill.experience}
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-cyan-300 font-mono">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Fully integrated in portfolio projects</span>
                        </div>
                      </motion.div>
                    );
                  })()
                ) : (
                  <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 text-center flex flex-col items-center justify-center min-h-[220px]">
                    <Target className="w-10 h-10 text-purple-400/50 mb-3 animate-pulse" />
                    <h4 className="text-sm font-bold text-white mb-1">Hover or Tap any Technology Node</h4>
                    <p className="text-xs text-slate-400 max-w-xs">
                      Explore detailed experience metrics, domain specialization, and skill level for each item on the radar.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* View Mode 3: Skill Level Matrix */}
        {viewMode === 'matrix' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white">Full Stack Proficiency Matrix</h3>
                <p className="text-xs text-slate-400">Sorted by technical confidence score</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800 px-3 py-1 rounded-full">
                Showing {filteredSkillsList.length} Technologies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSkillsList
                .slice()
                .sort((a, b) => b.level - a.level)
                .map((skill) => {
                  return (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                            <TechLogo name={skill.name} className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                            <span className="text-[10px] font-mono text-purple-400">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-base font-black font-mono text-gradient-primary">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 mb-3 font-sans">
                        {skill.experience}
                      </p>

                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
