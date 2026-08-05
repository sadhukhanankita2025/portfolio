import React from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiVite,
} from 'react-icons/si';
import { FaJava, FaLinkedin } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-5 h-5', size }) => {
  const normalized = name.trim().toLowerCase();

  const wrapIcon = (IconComponent: React.ComponentType<{ size?: string | number }>, colorClass: string) => (
    <span className={`inline-flex items-center justify-center ${className} ${colorClass}`}>
      <IconComponent size={size || '100%'} />
    </span>
  );

  switch (normalized) {
    // PYTHON - Real official 2-snake logo (Yellow & Blue snakes)
    case 'python':
    case 'py':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 128 128" className="w-full h-full">
            <defs>
              <linearGradient id="python-blue-grad" x1="12" y1="12" x2="78" y2="78" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3776AB" />
                <stop offset="1" stopColor="#4B8BBE" />
              </linearGradient>
              <linearGradient id="python-yellow-grad" x1="50" y1="50" x2="116" y2="116" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD43B" />
                <stop offset="1" stopColor="#FFE873" />
              </linearGradient>
            </defs>
            <path
              fill="url(#python-blue-grad)"
              d="M62.6 12c-23.7 0-22.3 10.3-22.3 10.3l.1 10.7h22.7v3.2H31.6S12 34 12 57.7c0 23.7 17.2 22.8 17.2 22.8h10.3v-12.7s-.3-15.2 15-15.2h22.6s14.4.2 14.4-14.1V24.8s1.6-12.8-28.9-12.8zm-12.2 7c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2z"
            />
            <path
              fill="url(#python-yellow-grad)"
              d="M65.3 116c23.7 0 22.3-10.3 22.3-10.3l-.1-10.7H64.8v-3.2h31.5s19.6 2.2 19.6-21.5c0-23.7-17.2-22.8-17.2-22.8H88.4v12.7s.3 15.2-15 15.2H50.8s-14.4-.2-14.4 14.1v12.7s-1.6 12.8 28.9 12.8zm12.2-7c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"
            />
          </svg>
        </span>
      );

    // AI CORE / MACHINE LEARNING / DEEP LEARNING / AI
    case 'ai core':
    case 'ai':
    case 'ai / ml':
    case 'ai/ml':
    case 'machine learning':
    case 'deep learning':
    case 'explainable ai':
    case 'neural network':
    case 'ai clinical inventories':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="ai-core-main" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="ai-core-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E1035" />
                <stop offset="100%" stopColor="#0B132B" />
              </linearGradient>
            </defs>
            {/* Outer Processor Microchip */}
            <rect x="18" y="18" width="64" height="64" rx="14" fill="url(#ai-core-bg)" stroke="url(#ai-core-main)" strokeWidth="3.5" />
            <rect x="34" y="34" width="32" height="32" rx="8" fill="url(#ai-core-main)" opacity="0.95" />
            {/* Connector Pins */}
            <path
              d="M32 8v10M50 8v10M68 8v10M32 82v10M50 82v10M68 82v10M8 32h10M8 50h10M8 68h10M82 32h10M82 50h10M82 68h10"
              stroke="#EC4899"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Synaptic Core Grid */}
            <circle cx="50" cy="50" r="7" fill="#FFFFFF" />
            <circle cx="42" cy="42" r="3" fill="#38BDF8" />
            <circle cx="58" cy="42" r="3" fill="#F43F5E" />
            <circle cx="42" cy="58" r="3" fill="#A855F7" />
            <circle cx="58" cy="58" r="3" fill="#10B981" />
            <path d="M42 42L58 58M58 42L42 58" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
          </svg>
        </span>
      );

    // STREAMLIT - Official Crown Logo
    case 'streamlit':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path fill="#FF4B4B" d="M12 72L50 18L88 72H12Z" />
            <path fill="#FF2B2B" d="M28 72L50 38L72 72H28Z" />
            <path fill="#FFFFFF" d="M42 72L50 58L58 72H42Z" opacity="0.9" />
          </svg>
        </span>
      );

    // KERAS
    case 'keras':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#D00000" />
            <path d="M24 18V82H40V56L63 82H84L57 50L82 18H62L40 43V18H24Z" fill="#FFFFFF" />
          </svg>
        </span>
      );

    // XGBOOST
    case 'xgboost':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#22643B" />
            <path d="M25 25L50 50L25 75H38L56 57L75 75H88L63 50L88 25H75L56 43L38 25H25Z" fill="#29B635" />
            <path d="M35 35L50 50L35 65" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
      );

    // SHAP
    case 'shap':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#0F172A" />
            <path d="M20 70L38 35L56 60L70 40L82 70" stroke="#EC4899" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="38" cy="35" r="5" fill="#38BDF8" />
            <circle cx="56" cy="60" r="5" fill="#A855F7" />
            <circle cx="70" cy="40" r="5" fill="#10B981" />
          </svg>
        </span>
      );

    // RANDOM FOREST
    case 'random forest':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#064E3B" />
            <path d="M35 75V55L22 55L38 25L54 55L41 55V75H35Z" fill="#10B981" />
            <path d="M62 75V58L52 58L65 32L78 58L68 58V75H62Z" fill="#34D399" />
          </svg>
        </span>
      );

    // LIBROSA
    case 'librosa':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#1E1B4B" />
            <path d="M20 50H28M36 30V70M44 20V80M52 10V90M60 25V75M68 35V65M76 45V55M84 50H90" stroke="#06B6D4" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </span>
      );

    // REPORTLAB / PDF
    case 'reportlab':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#B91C1C" />
            <path d="M30 20H55L72 37V80H30V20Z" fill="#FFFFFF" />
            <path d="M55 20V37H72" fill="#E2E8F0" />
            <text x="36" y="65" fill="#B91C1C" fontSize="20" fontWeight="bold" fontFamily="sans-serif">PDF</text>
          </svg>
        </span>
      );

    // MATPLOTLIB
    case 'matplotlib':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#111827" />
            <path d="M20 80C35 80 35 30 50 30C65 30 65 60 80 20" stroke="#38BDF8" strokeWidth="5" fill="none" />
            <path d="M20 80C35 80 35 50 50 50C65 50 65 70 80 40" stroke="#EC4899" strokeWidth="4" fill="none" opacity="0.8" />
          </svg>
        </span>
      );

    // RECHARTS
    case 'recharts':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#221551" />
            <rect x="22" y="50" width="12" height="30" rx="3" fill="#22B5BF" />
            <rect x="42" y="30" width="12" height="50" rx="3" fill="#8884D8" />
            <rect x="62" y="20" width="12" height="60" rx="3" fill="#82CA9D" />
          </svg>
        </span>
      );

    case 'java':
      return wrapIcon(FaJava, 'text-[#ED8B00]');
    case 'javascript':
    case 'js':
      return wrapIcon(SiJavascript, 'text-[#F7DF1E]');
    case 'typescript':
    case 'ts':
      return wrapIcon(SiTypescript, 'text-[#3178C6]');
    case 'php':
      return wrapIcon(SiPhp, 'text-[#777BB4]');
    case 'c++':
    case 'cpp':
    case 'c':
      return wrapIcon(SiCplusplus, 'text-[#00599C]');
    case 'react':
    case 'react 18':
    case 'react.js':
    case 'reactjs':
      return wrapIcon(SiReact, 'text-[#61DAFB]');
    case 'next.js':
    case 'nextjs':
    case 'next':
      return wrapIcon(SiNextdotjs, 'text-white');
    case 'html':
    case 'html5':
      return wrapIcon(SiHtml5, 'text-[#E34F26]');
    case 'css':
    case 'css3':
      return wrapIcon(SiCss, 'text-[#1572B6]');
    case 'bootstrap':
      return wrapIcon(SiBootstrap, 'text-[#7952B3]');
    case 'tailwind':
    case 'tailwindcss':
    case 'tailwind css':
      return wrapIcon(SiTailwindcss, 'text-[#06B6D4]');
    case 'node.js':
    case 'nodejs':
    case 'node':
      return wrapIcon(SiNodedotjs, 'text-[#5FA04E]');
    case 'express':
    case 'express.js':
    case 'expressjs':
      return wrapIcon(SiExpress, 'text-white');
    case 'flask':
      return wrapIcon(SiFlask, 'text-white');
    case 'fastapi':
      return wrapIcon(SiFastapi, 'text-[#009688]');
    case 'tensorflow':
      return wrapIcon(SiTensorflow, 'text-[#FF6F00]');
    case 'pytorch':
      return wrapIcon(SiPytorch, 'text-[#EE4C2C]');
    case 'opencv':
      return wrapIcon(SiOpencv, 'text-[#5C3EE8]');
    case 'scikit-learn':
    case 'scikitlearn':
    case 'sklearn':
      return wrapIcon(SiScikitlearn, 'text-[#F7931E]');
    case 'pandas':
      return wrapIcon(SiPandas, 'text-[#E70488]');
    case 'numpy':
      return wrapIcon(SiNumpy, 'text-[#4D77CF]');
    case 'mysql':
      return wrapIcon(SiMysql, 'text-[#4479A1]');
    case 'postgresql':
    case 'postgres':
      return wrapIcon(SiPostgresql, 'text-[#4169E1]');
    case 'vite':
      return wrapIcon(SiVite, 'text-[#646CFF]');
    case 'git':
      return wrapIcon(SiGit, 'text-[#F05032]');
    case 'github':
      return wrapIcon(SiGithub, 'text-white');
    case 'vs code':
    case 'vscode':
    case 'visual studio code':
      return wrapIcon(VscVscode, 'text-[#007ACC]');
    case 'linkedin':
      return wrapIcon(FaLinkedin, 'text-[#0A66C2]');
    case 'naukri':
    case 'naukri.com':
      return (
        <span className={`inline-flex items-center justify-center ${className}`}>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect width="100" height="100" rx="20" fill="#0275B8" />
            <path
              d="M25 72V28H38L56 55V28H68V72H55L37 45V72H25Z"
              fill="#FFFFFF"
            />
            <circle cx="75" cy="30" r="7" fill="#FF7555" />
          </svg>
        </span>
      );
    default:
      // Fallback: AI / Tech Pulse Chip Icon for any unhandled tech
      return (
        <span className={`inline-flex items-center justify-center ${className} text-purple-400`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="20" fill="#1E1B4B" stroke="#A855F7" strokeWidth="4" />
            <circle cx="50" cy="50" r="16" fill="#EC4899" />
            <path d="M50 20V80M20 50H80" stroke="#FFFFFF" strokeWidth="4" />
          </svg>
        </span>
      );
  }
};
