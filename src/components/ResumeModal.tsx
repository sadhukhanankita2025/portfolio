import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  FileText,
  ExternalLink,
  GraduationCap,
  Code,
  Briefcase,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { generateResumePDF } from '../utils/generateResumePDF';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    generateResumePDF();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="glass-panel w-full max-w-4xl rounded-3xl p-5 sm:p-8 border border-purple-500/40 relative shadow-2xl my-6 max-h-[90vh] flex flex-col"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-pink-400 shadow-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-black text-white tracking-wide">
                  OFFICIAL RESUME
                </h2>
                <span className="text-xs font-mono text-cyan-300">
                  Ankita Sadhukhan • AI & Full Stack Developer
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleDownload}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-bold text-xs tracking-wider flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-purple-600/30 touch-manipulation"
                title="Download Official Resume PDF"
              >
                <Download className="w-4 h-4 animate-bounce" />
                <span>DOWNLOAD PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer active:scale-90 transition-transform"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area - Full Document View */}
          <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-6">

            {/* Document Body Card */}
            <div className="bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 text-slate-200 text-sm space-y-6 shadow-xl">
              {/* CV Document Header */}
              <div className="border-b border-slate-800 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wider">
                    ANKITA SADHUKHAN
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest self-start sm:self-auto">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-mono text-cyan-400 font-bold mb-3 uppercase tracking-wider">
                  COMPUTER SCIENCE & ENGINEERING STUDENT | AI & FULL STACK DEVELOPER
                </p>

                <div className="text-xs font-mono text-slate-400 space-y-1">
                  <p>
                    <strong className="text-slate-300">Email:</strong> sadhukhanankita80@gmail.com • <strong className="text-slate-300">Location:</strong> Chakdaha, WB, India • <strong className="text-slate-300">Phone:</strong> +91 6290216493
                  </p>
                  <p>
                    <strong className="text-slate-300">GitHub:</strong>{' '}
                    <a
                      href="https://github.com/sadhukhanankita2025"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      github.com/sadhukhanankita2025
                    </a>{' '}
                    • <strong className="text-slate-300">LinkedIn:</strong>{' '}
                    <a
                      href="https://www.linkedin.com/in/ankita-sadhukhan-3b9764319"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      linkedin.com/in/ankita-sadhukhan-3b9764319
                    </a>
                  </p>
                </div>
              </div>

              {/* Profile */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-teal-400 tracking-widest mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Profile
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                  Computer Science Engineering student specializing in AI/ML and Full-Stack Development, with practical experience building intelligent healthcare platforms, speech analysis systems, medical image classification applications, and secure distributed AI solutions. Proficient in Python, React.js, Flask, Scikit-learn, SQL, and modern web technologies, with expertise in deep learning, computer vision, speech processing, Explainable AI (SHAP), and RESTful API development. Demonstrated ability to deliver scalable, responsive, and data-driven applications through academic and personal projects. Seeking opportunities to apply technical expertise, analytical thinking, and software engineering skills in AI, machine learning, or full-stack development roles.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-teal-400 tracking-widest mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Education
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                      <span className="font-bold text-white text-sm">
                        Bachelor of Technology (B.Tech) in Computer Science & Engineering
                      </span>
                      <span className="text-xs font-mono text-pink-400 font-bold px-2 py-0.5 rounded bg-pink-950/60 border border-pink-500/30">
                        CGPA: 8.63 / 10
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-semibold">
                      Techno Institute of Engineering & Management (Techno Engineering College Banipur)
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">
                      Affiliated to MAKAUT, West Bengal • August 2024 – Present (Expected: June 2027)
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                      <span className="font-bold text-white text-sm">
                        Diploma in Computer Science & Technology
                      </span>
                      <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                        Percentage: 72%
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-semibold">Women's Polytechnic, Kolkata</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">
                      Affiliated to WBSCT&VE&SD • August 2021 – June 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-teal-400 tracking-widest mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" /> Skills & Abilities
                </h3>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs sm:text-sm">
                  <p>
                    <strong className="text-white">Programming Languages:</strong>{' '}
                    <span className="text-slate-300">Python, Java, JavaScript, PHP, SQL, C</span>
                  </p>
                  <p>
                    <strong className="text-white">Frontend:</strong>{' '}
                    <span className="text-slate-300">
                      React.js, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Vite
                    </span>
                  </p>
                  <p>
                    <strong className="text-white">Backend:</strong>{' '}
                    <span className="text-slate-300">Flask, Node.js, Express.js, PHP</span>
                  </p>
                  <p>
                    <strong className="text-white">AI & Machine Learning:</strong>{' '}
                    <span className="text-slate-300">
                      TensorFlow, PyTorch, Scikit-learn, XGBoost, Random Forest, OpenCV, SHAP, Pandas, NumPy, Librosa
                    </span>
                  </p>
                  <p>
                    <strong className="text-white">Databases:</strong>{' '}
                    <span className="text-slate-300">MySQL, PostgreSQL, SQLite</span>
                  </p>
                  <p>
                    <strong className="text-white">Developer Tools:</strong>{' '}
                    <span className="text-slate-300">Git, GitHub, VS Code, Google Colab, Streamlit</span>
                  </p>
                  <p>
                    <strong className="text-white">Core Computer Science:</strong>{' '}
                    <span className="text-slate-300">
                      Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering
                    </span>
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-teal-400 tracking-widest mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Project Experience
                </h3>
                <div className="space-y-4">
                  {/* Cortex Vision */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <span className="font-bold text-white">
                        CORTEX-VISION – AI BRAIN TUMOR MRI CLASSIFICATION & EXPLAINABILITY
                      </span>
                      <a
                        href="https://github.com/sadhukhanankita2025/CORTEX-VISION"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 flex items-center gap-1 font-mono hover:underline shrink-0 text-xs"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <strong className="text-slate-300">Technologies:</strong> React.js, TypeScript, Vite, Tailwind CSS, Flask, Python, PyTorch, OpenCV, SHAP
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-xs">
                      <li>Developed an AI-powered MRI brain tumor classification platform using EfficientNetB0.</li>
                      <li>Achieved 94.81% classification accuracy through deep learning and image preprocessing.</li>
                      <li>Integrated SHAP Explainable AI for prediction interpretation.</li>
                      <li>Built a responsive React interface with Flask REST APIs for image upload and inference.</li>
                      <li>Implemented prediction history and automated patient report generation.</li>
                    </ul>
                  </div>

                  {/* SepsisInsight */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <span className="font-bold text-white">
                        SEPSISINSIGHT – EXPLAINABLE AI FOR EARLY SEPSIS DETECTION
                      </span>
                      <a
                        href="https://github.com/sadhukhanankita2025/SepsisInsight"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 flex items-center gap-1 font-mono hover:underline shrink-0 text-xs"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <strong className="text-slate-300">Technologies:</strong> Python, Streamlit, Scikit-learn, Random Forest, XGBoost, LightGBM, CatBoost, SHAP, Plotly
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-xs">
                      <li>Developed an AI-powered healthcare platform for early sepsis prediction using EHRs.</li>
                      <li>Trained ML models achieving 93.5% ROC-AUC with Random Forest.</li>
                      <li>Implemented SHAP Explainable AI to improve prediction transparency.</li>
                      <li>Designed an interactive dashboard for patient risk assessment and PDF report generation.</li>
                    </ul>
                  </div>

                  {/* AI Disease Predictor */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <span className="font-bold text-white">AI DISEASE PREDICTOR</span>
                      <a
                        href="https://github.com/sadhukhanankita2025/AI-Disease-Predictor"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 flex items-center gap-1 font-mono hover:underline shrink-0 text-xs"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <strong className="text-slate-300">Technologies:</strong> Python, Streamlit, Scikit-learn, Pandas, NumPy, Joblib, Matplotlib
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-xs">
                      <li>Built a machine learning application for predicting diseases using patient symptoms.</li>
                      <li>Implemented Random Forest, Logistic Regression, Decision Tree, and SVM.</li>
                      <li>Developed an interactive Streamlit application for real-time disease prediction.</li>
                    </ul>
                  </div>

                  {/* Smart Cough Analyzer */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <span className="font-bold text-white">SMART COUGH ANALYZER</span>
                      <a
                        href="https://github.com/sadhukhanankita2025/Smart-Cough-Analyzer-"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 flex items-center gap-1 font-mono hover:underline shrink-0 text-xs"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <strong className="text-slate-300">Technologies:</strong> Python, TensorFlow, Streamlit, Librosa, OpenCV, NumPy, Scikit-learn
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-xs">
                      <li>Developed a CNN-based cough sound classification system using Mel Spectrogram features.</li>
                      <li>Achieved 92% classification accuracy through deep learning and audio preprocessing.</li>
                      <li>Applied TensorFlow Lite conversion for lightweight deployment.</li>
                    </ul>
                  </div>

                  {/* Doctor Appointment */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <span className="font-bold text-white">
                        Doctor Appointment & Healthcare Management System
                      </span>
                      <a
                        href="https://github.com/sadhukhanankita2025/HealthCare"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 flex items-center gap-1 font-mono hover:underline shrink-0 text-xs"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <strong className="text-slate-300">Technologies:</strong> PHP, MySQL, HTML5, CSS3, JavaScript, Bootstrap
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-xs">
                      <li>Developed a web application for online doctor appointment booking and management.</li>
                      <li>Implemented secure authentication for patients, doctors, and administrators.</li>
                    </ul>
                  </div>

                  {/* NeuroAI */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <span className="font-bold text-white">
                        NeuroAI – Early Cognitive Decline Detection via Voice
                      </span>
                      <a
                        href="https://github.com/sadhukhanankita2025/early-cognitive-detection"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 flex items-center gap-1 font-mono hover:underline shrink-0 text-xs"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <strong className="text-slate-300">Technologies:</strong> React.js, Vite, Tailwind CSS, Flask, Python, TensorFlow, Keras, Librosa, NumPy, ReportLab
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-xs">
                      <li>Developed a full-stack AI healthcare app to detect early cognitive decline from speech.</li>
                      <li>Extracted MFCC audio features using Librosa and trained TensorFlow/Keras models.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Download Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Filename: <strong className="text-cyan-300">Ankita_Sadhukhan_Resume.pdf</strong>
              </span>

              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-extrabold text-xs tracking-wider shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD OFFICIAL RESUME PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
