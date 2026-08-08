import { Project, SkillCategory, CircularSkill, ExperienceItem, EducationItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: "ANKITA SADHUKHAN",
  firstName: "Ankita",
  lastName: "Sadhukhan",
  roleTitles: [
    "AI & Full Stack Developer",
    "Computer Science & Engineering Student",
    "Machine Learning Engineer",
    "React & Python Developer"
  ],
  summary: "Computer Science Engineering student specializing in AI/ML and Full-Stack Development, with practical experience building intelligent healthcare platforms, speech analysis systems, medical image classification applications, and secure distributed AI solutions. Proficient in Python, React.js, Flask, Scikit-learn, SQL, and modern web technologies, with expertise in deep learning, computer vision, speech processing, Explainable AI (SHAP), and RESTful API development. Demonstrated ability to deliver scalable, responsive, and data-driven applications through academic and personal projects. Seeking opportunities to apply technical expertise, analytical thinking, and software engineering skills in AI, machine learning, or full-stack development roles.",
  tagline: "Computer Science & Engineering Student specializing in AI/ML and Full-Stack Development, building intelligent healthcare platforms, deep learning systems, and full-stack web applications.",
  aboutParagraphs: [
    "Hi, I'm Ankita, a Computer Science Engineering student specializing in AI/ML and Full-Stack Development. I have practical experience building intelligent healthcare platforms, speech analysis systems, medical image classification applications, and secure distributed AI solutions.",
    "Proficient in Python, React.js, Flask, Scikit-learn, SQL, and modern web technologies, with expertise in deep learning, computer vision, speech processing, Explainable AI (SHAP), and RESTful API development."
  ],
  email: "sadhukhanankita80@gmail.com",
  phone: "+91 6290216493",
  location: "Chakdaha, WB, India",
  github: "https://github.com/sadhukhanankita2025",
  linkedin: "https://www.linkedin.com/in/ankita-sadhukhan-3b9764319/",
  naukri: "https://www.naukri.com/mnjuser/profile?id=&altresid",
  avatarUrl: "/ankita.png",
  cgpa: "8.63",
  diplomaCgpa: "72%"
};

export const STATS = [
  { label: "Full Stack & AI Projects", value: 12, suffix: "+" },
  { label: "Web Applications Built", value: 7, suffix: "+" },
  { label: "Core Tech Stack Tools", value: 10, suffix: "+" },
  { label: "AI/ML Clinical Models", value: 5, suffix: "+" },
  { label: "Current B.Tech CGPA", value: 8.63, decimals: 2, suffix: "" }
];

export const PROJECTS: Project[] = [
  {
    id: "sepsis-insight",
    title: "SepsisInsight",
    subtitle: "Explainable AI for Early Sepsis Detection",
    category: "Explainable AI Healthcare",
    description: "Built an AI-powered healthcare platform for early sepsis prediction using clinical data. Trained and evaluated multiple machine learning models, achieving 93.5% ROC-AUC with Random Forest. Applied SHAP Explainable AI to interpret prediction results and identify influential clinical features. Designed an interactive Streamlit dashboard with patient risk prediction and PDF report generation. Performed data preprocessing, feature engineering, and model evaluation using Scikit-learn.",
    detailedDescription: "Trained ensemble ML algorithms (Random Forest, XGBoost, LightGBM, CatBoost) on ICU clinical vitals. Integrates SHAP force plots into a Streamlit dashboard, helping healthcare professionals pinpoint critical biomarker triggers early.",
    features: [
      "Early Sepsis Risk Scoring",
      "93.5% ROC-AUC Random Forest Model",
      "SHAP Feature Attribution",
      "Ensemble Machine Learning",
      "Streamlit Interactive Dashboard",
      "Clinical Feature Engineering",
      "PDF Patient Risk Report"
    ],
    techStack: ["Python", "Streamlit", "Scikit-learn", "Random Forest", "XGBoost", "LightGBM", "CatBoost", "SHAP", "Plotly"],
    cardAccent: "rose",
    githubUrl: "https://github.com/sadhukhanankita2025/SepsisInsight",
    liveUrl: "https://sepasis-ai-detect.netlify.app/",
    image: "/SepsisInsight.png",
    featured: true,
    metrics: "93.5% ROC-AUC Score"
  },
  {
    id: "ai-disease-predictor",
    title: "AI Disease Predictor",
    subtitle: "Symptom-Based Disease Prediction & Health Guidance",
    category: "Machine Learning Healthcare",
    description: "Developed a machine learning application for disease prediction based on patient symptoms and medical parameters. Trained classification models including Random Forest, Decision Tree, Logistic Regression, and SVM. Built an interactive Streamlit application providing instant predictions with confidence scores. Implemented data preprocessing, feature engineering, and model evaluation techniques. Generated prediction reports with recommended precautions and health guidance.",
    detailedDescription: "Processes multi-label symptom metrics against clinical disease datasets. Evaluates Random Forest, SVM, and Logistic Regression models to output real-time symptom analysis, clinical confidence ratings, precaution checklists, and downloadable health guidance.",
    features: [
      "Symptom-Based Disease Classifier",
      "Random Forest, SVM & Decision Tree",
      "Instant Confidence Scoring",
      "Streamlit Interactive App",
      "Precaution & Health Guidance",
      "Clinical Feature Engineering"
    ],
    techStack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Joblib", "Matplotlib"],
    cardAccent: "emerald",
    githubUrl: "https://github.com/sadhukhanankita2025/AI-Disease-Predictor",
    liveUrl: "https://ai-disease-predictor-cknie3tvx6gklujdd4ifl7.streamlit.app/",
    image: "/Healthcare.png",
    featured: true,
    metrics: "Instant Diagnostic Predictions"
  },
  {
    id: "smart-cough-analyzer",
    title: "Smart Cough Analyzer",
    subtitle: "CNN Audio Spectrogram Respiratory Screening",
    category: "AI Audio Biomarker AI",
    description: "Developed a CNN-based cough sound classification system using Mel Spectrogram features. Achieved 92% prediction accuracy for respiratory cough classification. Applied audio preprocessing techniques including noise reduction, feature extraction, and data augmentation. Converted the trained model into TensorFlow Lite (TFLite) for lightweight deployment. Built a Streamlit interface for real-time cough sound analysis.",
    detailedDescription: "Converts raw audio waves into Mel Spectrogram images using Librosa, passing visual audio representations through a Convolutional Neural Network (CNN). Quantized to TensorFlow Lite (TFLite) for low-latency edge deployment.",
    features: [
      "Mel Spectrogram Audio AI",
      "CNN Classification (92% Accuracy)",
      "Librosa Audio Preprocessing",
      "TensorFlow Lite (TFLite) Optimization",
      "Real-time Cough Sound Analysis",
      "Streamlit Web Dashboard"
    ],
    techStack: ["Python", "TensorFlow", "Streamlit", "Librosa", "OpenCV", "NumPy", "Scikit-learn"],
    cardAccent: "cyan",
    githubUrl: "https://github.com/sadhukhanankita2025/Smart-Cough-Analyzer-",
    liveUrl: "https://cough-analyze.netlify.app/",
    image: "/smart-cough-analyzer.png",
    featured: true,
    metrics: "92% Acoustic Classification Accuracy"
  },
  {
    id: "cortex-vision",
    title: "CORTEX-VISION",
    subtitle: "AI-Powered Brain Tumor MRI Classification & Explainability",
    category: "Deep Learning & Explainable AI",
    description: "Developed an AI-powered web application for brain tumor MRI classification using the EfficientNetB0 deep learning model. Achieved 94.81% classification accuracy on MRI datasets through image preprocessing and model optimization. Integrated SHAP Explainable AI (XAI) to visualize feature importance and improve prediction transparency. Built a responsive React frontend with secure Flask REST APIs for real-time image prediction. Implemented patient report generation and prediction history management.",
    detailedDescription: "Architected a deep learning pipeline utilizing EfficientNetB0 for precise multi-class brain tumor MRI scanning. Leveraged SHAP (SHapley Additive exPlanations) to construct feature attribution heatmaps, granting radiologists transparent diagnostic reasoning behind each classification.",
    features: [
      "Brain Tumor MRI Classification",
      "EfficientNetB0 Deep Learning Model",
      "94.81% Classification Accuracy",
      "SHAP Explainable AI (XAI)",
      "Feature Importance Heatmaps",
      "Flask REST API Backend",
      "Responsive React Interface",
      "PDF Patient Report Generation"
    ],
    techStack: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Flask", "Python", "PyTorch", "OpenCV", "SHAP"],
    cardAccent: "purple",
    githubUrl: "https://github.com/sadhukhanankita2025/CORTEX-VISION",
    liveUrl: "https://cortex-vision.demo.app",
    image: "/CORTEX-VISION.jpeg",
    featured: true,
    metrics: "94.81% Classification Accuracy"
  },
  {
    id: "neuroai-cognitive-decline",
    title: "NeuroAI — Early Cognitive Decline Detection via Voice",
    subtitle: "Speech-based Cognitive Assessment & Deep Learning Diagnostics",
    category: "Deep Learning & Speech AI",
    description: "Developed a full-stack AI-powered healthcare application to detect early cognitive decline from speech recordings using Deep Learning and NeuroAI techniques. Extracted MFCC (Mel-Frequency Cepstral Coefficients) from voice recordings using Librosa and trained a TensorFlow/Keras model for speech-based cognitive assessment. Built a responsive React + Vite frontend with secure Flask REST APIs for audio upload, real-time prediction, and patient report generation. Visualized prediction probabilities and confidence scores using Chart.js. Implemented automated clinical PDF report generation with ReportLab.",
    detailedDescription: "Extracts Mel-Frequency Cepstral Coefficients (MFCCs) from voice recordings to train deep TensorFlow/Keras speech classifiers. Integrates Chart.js probability visualizers and ReportLab automated clinical PDF summaries in a modular full-stack architecture.",
    features: [
      "Speech-based Cognitive Assessment",
      "MFCC Audio Feature Extraction",
      "TensorFlow/Keras Deep Classifier",
      "Flask REST API Backend",
      "React + Vite Responsive Frontend",
      "Chart.js Prediction Probability Visualizer",
      "ReportLab Clinical PDF Report Generation"
    ],
    techStack: ["React.js", "Vite", "Tailwind CSS", "Flask", "Python", "TensorFlow", "Keras", "Librosa", "NumPy", "ReportLab", "Chart.js", "React Router"],
    cardAccent: "purple",
    githubUrl: "https://github.com/sadhukhanankita2025/early-cognitive-detection",
    liveUrl: "https://neuroai-cognitive.demo.app",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    metrics: "Speech Audio AI & Cognitive Diagnostics"
  },
  {
    id: "doctor-appointment-system",
    title: "Doctor Appointment & Healthcare Management",
    subtitle: "PHP & MySQL Doctor Booking & EMR Portal",
    category: "Full Stack Web Application",
    description: "Developed a web application for online doctor appointment booking and healthcare management. Implemented secure authentication for patients, doctors, and administrators. Enabled appointment scheduling, doctor profile management, and patient record management. Built an administrative dashboard for managing doctors, appointments, and system users. Integrated MySQL database with responsive frontend design.",
    detailedDescription: "Designed for medical clinics and private practices, this portal handles patient-doctor appointment workflows, schedule availability management, secure session-based authentication, and admin user role permissions.",
    features: [
      "Patient Appointment Booking",
      "Doctor Profile & Availability Management",
      "Multi-Role Authentication (Patient/Doctor/Admin)",
      "Patient Record Management",
      "Administrative Dashboard",
      "MySQL Relational Database",
      "Responsive UI Design"
    ],
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    cardAccent: "blue",
    githubUrl: "https://github.com/sadhukhanankita2025/HealthCare",
    liveUrl: "https://doctor-appointment.demo.app",
    image: "/eClinic.png",
    featured: true,
    metrics: "Role-Based Doctor & Patient Portal"
  },
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    subtitle: "Online Reservation & Customer Booking Portal",
    category: "Full Stack Web Application",
    description: "Developed a hotel booking and management web application with online reservation functionality. Implemented room availability tracking, booking management, and customer registration. Built an admin dashboard to manage rooms, reservations, and customer records. Integrated MySQL database for efficient data management and reporting. Designed a responsive interface for desktop and mobile users.",
    detailedDescription: "A full-featured hospitality reservation application allowing guests to check real-time room availability, make online bookings, and manage reservations, while providing hotel managers with an admin oversight panel.",
    features: [
      "Online Room Reservation",
      "Real-Time Room Availability Tracking",
      "Customer Registration & Booking History",
      "Hotel Administrative Oversight Panel",
      "MySQL Booking Database Integration",
      "Mobile-Responsive Interface"
    ],
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    cardAccent: "emerald",
    githubUrl: "https://github.com/ankitasadhukhan/Hotel-Management-System",
    liveUrl: "https://hotel-mgmt.demo.app",
    image: "/hotel.png",
    featured: true,
    metrics: "Online Reservation & Admin Portal"
  }
];

export const CIRCULAR_SKILLS: CircularSkill[] = [
  { name: "Python", percentage: 95, category: "Core Language", color: "#38BDF8" },
  { name: "Machine Learning", percentage: 90, category: "AI & Data Science", color: "#9333EA" },
  { name: "Deep Learning", percentage: 88, category: "Neural Networks", color: "#EC4899" },
  { name: "React", percentage: 92, category: "Frontend Engine", color: "#38BDF8" },
  { name: "Node.js", percentage: 85, category: "Backend Runtime", color: "#10B981" },
  { name: "SQL", percentage: 88, category: "Database Systems", color: "#F59E0B" },
  { name: "UI Design", percentage: 85, category: "User Experience", color: "#8B5CF6" },
  { name: "Problem Solving", percentage: 92, category: "Algorithms & DSA", color: "#EC4899" }
];

export const TECH_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    iconName: "Code",
    skills: [
      { name: "Python", level: 95, experience: "3+ Years • Core & ML Stack" },
      { name: "Java", level: 85, experience: "2+ Years • OOP & Data Structures" },
      { name: "JavaScript", level: 90, experience: "3+ Years • ES6+ Async Architecture" },
      { name: "TypeScript", level: 88, experience: "2+ Years • Strictly Typed Applications" },
      { name: "PHP", level: 92, experience: "5 Years • Web Development & Scripting" },
      { name: "C++", level: 82, experience: "2+ Years • Competitive Programming" }
    ]
  },
  {
    title: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "React", level: 92, experience: "Hooks, Context, Custom Architectures" },
      { name: "Next.js", level: 85, experience: "SSR, App Router, Dynamic API Routes" },
      { name: "HTML", level: 95, experience: "Semantic markup, Accessibility" },
      { name: "CSS", level: 92, experience: "Flexbox, Grid, Animations, Custom FX" },
      { name: "Tailwind", level: 95, experience: "Utility Design, Responsive Systems" }
    ]
  },
  {
    title: "Backend",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 88, experience: "Express REST Services, Microservices" },
      { name: "Express", level: 88, experience: "Middleware, JWT Auth, API Routing" },
      { name: "PHP", level: 92, experience: "5 Years • Server-side Web Scripting & REST APIs" },
      { name: "Flask", level: 90, experience: "Python Lightweight Web API & ML Deployment" },
      { name: "FastAPI", level: 86, experience: "High Performance Async OpenAPI Services" }
    ]
  },
  {
    title: "AI / ML",
    iconName: "BrainCircuit",
    skills: [
      { name: "AI Core", level: 92, experience: "Neural Networks, Explainable AI, Medical Deep Learning" },
      { name: "TensorFlow", level: 88, experience: "Keras, CNNs, Audio & Image Models" },
      { name: "PyTorch", level: 90, experience: "Torchvision, Medical Image Models, ResNet" },
      { name: "OpenCV", level: 86, experience: "Computer Vision, Feature Detection, Image Processing" },
      { name: "Scikit-learn", level: 92, experience: "Classifiers, Regressors, Model Tuning" },
      { name: "Pandas", level: 94, experience: "Data Manipulation, Feature Engineering" },
      { name: "NumPy", level: 95, experience: "Array Operations, Matrix Computations" }
    ]
  },
  {
    title: "Database",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 90, experience: "Relational Queries, Schema Optimization & Management" },
      { name: "PostgreSQL", level: 85, experience: "Complex Joins, Indexing, Triggers" }
    ]
  },
  {
    title: "Tools",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: 92, experience: "Version Control, Branching, Rebase" },
      { name: "GitHub", level: 94, experience: "CI/CD Actions, Open Source Collaboration" },
      { name: "VS Code", level: 95, experience: "Custom Environment, Debugging, Extensions" }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "AI / Machine Learning Engineer Intern",
    company: "AI Innovation Labs",
    period: "2024 - Present",
    location: "Kolkata, India",
    description: [
      "Engineered explainable Deep Learning models for medical imaging using PyTorch and Grad-CAM heatmaps.",
      "Optimized model latency by 35% using quantization and model pruning for edge deployments.",
      "Collaborated with full-stack teams to build real-time prediction microservices in Flask & FastAPI."
    ],
    skills: ["PyTorch", "TensorFlow", "Flask", "OpenCV", "Explainable AI"]
  },
  {
    id: "exp-2",
    role: "Full Stack Developer Developer Trainee",
    company: "Tech Spectrum Solutions",
    period: "2023 - 2024",
    location: "Kolkata, India",
    description: [
      "Built responsive, interactive dashboards using React 18, TypeScript, and Tailwind CSS.",
      "Designed secure REST APIs in Express and optimized SQL queries, reducing response times by 40%.",
      "Integrated automated authentication workflows and role-based access control."
    ],
    skills: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    role: "Open Source AI Contributor & Team Lead",
    company: "Developer Community",
    period: "2022 - Present",
    location: "Remote",
    description: [
      "Led cross-functional student developer teams in national hackathons and open-source challenges.",
      "Mentored 50+ junior peers in Python programming, Data Structures, and Machine Learning basics."
    ],
    skills: ["Python", "Git/GitHub", "Team Leadership", "Problem Solving"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Techno Institute of Engineering & Management (Techno Engineering College Banipur)",
    board: "Affiliated to MAKAUT, West Bengal",
    period: "August 2024 – Present (Expected: June 2027)",
    grade: "CGPA: 8.63/10",
    highlights: [
      "Specialization in AI/ML and Full-Stack Development",
      "Core Coursework: Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks, Software Engineering"
    ]
  },
  {
    id: "edu-2",
    degree: "Diploma in Computer Science & Technology",
    institution: "Women's Polytechnic, Kolkata",
    board: "Affiliated to WBSCT&VE&SD",
    period: "August 2021 – June 2024",
    grade: "72%",
    highlights: [
      "Core Computer Science & Technology Diploma",
      "Practical systems training, web development, and software engineering foundations"
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "1st Rank Winner - Smart India Innovation Hackathon",
    issuer: "Tech India Innovation Forum",
    date: "2024",
    category: "Hackathon",
    description: "Developed AI Medical Diagnostics pipeline (CORTEX-VISION) presenting real-time explainable MRI scan segmentation.",
    badgeText: "1st Place 🏆"
  },
  {
    id: "ach-2",
    title: "TensorFlow & Deep Learning Specialization Certificate",
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
    category: "Certification",
    description: "Mastered Convolutional Neural Networks, NLP, Audio Acoustic Modeling, and Model Deployment.",
    badgeText: "Certified 📜"
  },
  {
    id: "ach-3",
    title: "Academic Gold Honor - Consistent Top 5 Rank",
    issuer: "MAKAUT Academic Excellence",
    date: "2024 - 2025",
    category: "Academic",
    description: "Awarded top academic distinction for maintaining 8.63 CGPA in B.Tech Computer Science Engineering.",
    badgeText: "8.63 CGPA ⭐"
  },
  {
    id: "ach-4",
    title: "500+ LeetCode & Hackerrank Problem Badges",
    issuer: "LeetCode & HackerRank",
    date: "2023 - Present",
    category: "OpenSource",
    description: "Achieved Gold Badge in Python and Problem Solving with 500+ algorithm challenges solved.",
    badgeText: "5 Star Python 🌟"
  }
];

export const GITHUB_STATS = {
  totalContributions: 1420,
  currentStreak: 48,
  longestStreak: 92,
  topRepositories: ["cortex-vision", "smart-cough-analyzer", "smartcampus-360", "ai-farming-assistant"],
  recentCommits: [
    { repo: "cortex-vision", msg: "feat: add Grad-CAM heatmap overlay for PyTorch ResNet model", time: "2 hours ago" },
    { repo: "smart-cough-analyzer", msg: "refactor: extract MFCC audio features with Librosa pipeline", time: "1 day ago" },
    { repo: "smartcampus-360", msg: "perf: optimize MySQL query indexing for student ERP dashboard", time: "2 days ago" },
    { repo: "ai-farming-assistant", msg: "docs: add model evaluation metrics & plant pathology benchmark", time: "3 days ago" }
  ]
};