import { jsPDF } from 'jspdf';

export function generateResumePDF() {
  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;
  let currentPage = 1;

  const addFooter = (pageNum: number) => {
    doc.setTextColor(148, 163, 184);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(`Page ${pageNum}`, margin + contentWidth, pageHeight - 8, { align: 'right' });
  };

  const checkPageBreak = (requiredSpace: number) => {
    if (y + requiredSpace > pageHeight - 16) {
      addFooter(currentPage);
      doc.addPage();
      currentPage++;
      y = 18;
    }
  };

  // HEADER
  doc.setTextColor(15, 118, 110); // Teal
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('ANKITA SADHUKHAN', margin, y);
  y += 7;

  doc.setTextColor(2, 132, 199); // Blue
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('COMPUTER SCIENCE & ENGINEERING STUDENT | AI & FULL STACK DEVELOPER', margin, y);
  y += 6;

  doc.setTextColor(71, 85, 105);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');

  const contactLine1 = 'Email: sadhukhanankita80@gmail.com | Location: Chakdaha , WB, India | Phone: +91 6290216493 | GitHub: ';
  doc.text(contactLine1, margin, y);
  doc.setTextColor(2, 132, 199);
  doc.text('https://github.com/sadhukhanankita2025', margin + doc.getTextWidth(contactLine1), y);
  y += 4.5;

  doc.setTextColor(71, 85, 105);
  const contactLine2 = '| LinkedIn: ';
  doc.text('LinkedIn: ', margin, y);
  doc.setTextColor(2, 132, 199);
  doc.text('www.linkedin.com/in/ankita-sadhukhan-3b9764319', margin + doc.getTextWidth('LinkedIn: '), y);
  y += 6;

  doc.setDrawColor(15, 118, 110);
  doc.setLineWidth(0.6);
  doc.line(margin, y, margin + contentWidth, y);
  y += 8;

  // SECTION HEADING HELPER
  const drawHeading = (title: string) => {
    checkPageBreak(12);
    doc.setTextColor(15, 118, 110);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text(title, margin, y);
    y += 6;
  };

  // PROFILE SECTION
  drawHeading('Profile');
  doc.setTextColor(30, 41, 59);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  const profileText = "Computer Science Engineering student specializing in AI/ML and Full-Stack Development, with practical experience building intelligent healthcare platforms, speech analysis systems, medical image classification applications, and secure distributed AI solutions. Proficient in Python, React.js, Flask, Scikit-learn, SQL, and modern web technologies, with expertise in deep learning, computer vision, speech processing, Explainable AI (SHAP), and RESTful API development. Demonstrated ability to deliver scalable, responsive, and data-driven applications through academic and personal projects. Seeking opportunities to apply technical expertise, analytical thinking, and software engineering skills in AI, machine learning, or full-stack development roles.";
  const splitProfile = doc.splitTextToSize(profileText, contentWidth);
  doc.text(splitProfile, margin, y);
  y += splitProfile.length * 4.8 + 6;

  // EDUCATION SECTION
  drawHeading('Education');

  // B.Tech
  checkPageBreak(25);
  doc.setTextColor(15, 118, 110);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Bachelor of Technology (B.Tech) in Computer Science & Engineering', margin, y);
  y += 5.5;

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('Techno Institute of Engineering & Management (Techno Engineering College Banipur)', margin, y);
  y += 4.5;

  doc.setFont('helvetica', 'oblique');
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(9);
  doc.text('Affiliated to MAKAUT, West Bengal', margin, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('August 2024 – Present', margin, y);
  y += 4.5;

  doc.text('Expected Graduation: June 2027', margin, y);
  y += 4.5;

  doc.text('CGPA: 8.63/10', margin, y);
  y += 8;

  // Diploma
  checkPageBreak(25);
  doc.setTextColor(15, 118, 110);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Diploma in Computer Science & Technology', margin, y);
  y += 5.5;

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text("Women's Polytechnic, Kolkata", margin, y);
  y += 4.5;

  doc.setFont('helvetica', 'oblique');
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(9);
  const boardText = doc.splitTextToSize('Affiliated to: West Bengal State Council of Technical & Vocational Education and Skill Development (WBSCT&VE&SD)', contentWidth);
  doc.text(boardText, margin, y);
  y += boardText.length * 4.2 + 0.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('August 2021 – June 2024', margin, y);
  y += 4.5;

  doc.text('Percentage: 72%', margin, y);
  y += 8;

  // SKILLS & ABILITIES SECTION
  drawHeading('Skills & Abilities');

  const skillGroups = [
    { label: 'Programming Languages', val: 'Python, Java, JavaScript, PHP, SQL, C' },
    { label: 'Frontend', val: 'React.js, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Vite' },
    { label: 'Backend', val: 'Flask, Node.js, Express.js, PHP' },
    { label: 'AI & Machine Learning', val: 'TensorFlow, PyTorch, Scikit-learn, XGBoost, Random Forest, OpenCV, SHAP, Pandas, NumPy, Librosa' },
    { label: 'Databases', val: 'MySQL, PostgreSQL, SQLite' },
    { label: 'Developer Tools', val: 'Git, GitHub, VS Code, Google Colab, Streamlit' },
    { label: 'Core Computer Science', val: 'Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering' }
  ];

  skillGroups.forEach((sg) => {
    checkPageBreak(8);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(`${sg.label}: `, margin, y);

    const prefixWidth = doc.getTextWidth(`${sg.label}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const splitVal = doc.splitTextToSize(sg.val, contentWidth - prefixWidth);
    doc.text(splitVal, margin + prefixWidth, y);
    y += splitVal.length * 4.5 + 1.5;
  });

  y += 6;

  // PROJECT EXPERIENCE SECTION
  drawHeading('Project Experience:');

  const projectsList = [
    {
      title: 'CORTEX-VISION – AI BRAIN TUMOR MRI CLASSIFICATION & EXPLAINABILITY',
      tech: 'React.js, TypeScript, Vite, Tailwind CSS, Flask, Python, PyTorch, OpenCV, SHAP',
      github: 'https://github.com/sadhukhanankita2025/CORTEX-VISION',
      bullets: [
        'Developed an AI-powered MRI brain tumor classification platform using EfficientNetB0.',
        'Achieved 94.81% classification accuracy through optimized deep learning and image preprocessing.',
        'Integrated SHAP Explainable AI for prediction interpretation.',
        'Built a responsive React interface with Flask REST APIs for image upload and inference.',
        'Implemented prediction history and automated patient report generation.'
      ]
    },
    {
      title: 'SEPSISINSIGHT – EXPLAINABLE AI FOR EARLY SEPSIS DETECTION',
      tech: 'Python, Streamlit, Scikit-learn, Random Forest, XGBoost, LightGBM, CatBoost, SHAP, Plotly',
      github: 'https://github.com/sadhukhanankita2025/SepsisInsight',
      bullets: [
        'Developed an AI-powered healthcare platform for early sepsis prediction using electronic health records.',
        'Trained and evaluated multiple machine learning models, achieving 93.5% ROC-AUC with Random Forest.',
        'Implemented SHAP Explainable AI to improve prediction transparency.',
        'Designed an interactive dashboard for patient risk assessment and PDF report generation.',
        'Performed feature engineering and model optimization using Scikit-learn.'
      ]
    },
    {
      title: 'AI DISEASE PREDICTOR',
      tech: 'Python, Streamlit, Scikit-learn, Pandas, NumPy, Joblib, Matplotlib',
      github: 'https://github.com/sadhukhanankita2025/AI-Disease-Predictor',
      bullets: [
        'Built a machine learning application for predicting diseases using patient symptoms and health parameters.',
        'Implemented data preprocessing, feature engineering, and classification models including Random Forest, Logistic Regression, Decision Tree, and SVM.',
        'Developed an interactive Streamlit application for real-time disease prediction.',
        'Displayed prediction confidence scores and generated health recommendation reports.'
      ]
    },
    {
      title: 'SMART COUGH ANALYZER',
      tech: 'Python, TensorFlow, Streamlit, Librosa, OpenCV, NumPy, Scikit-learn',
      github: 'https://github.com/sadhukhanankita2025/Smart-Cough-Analyzer-',
      bullets: [
        'Developed a CNN-based cough sound classification system using Mel Spectrogram features.',
        'Achieved 92% classification accuracy through deep learning and audio preprocessing.',
        'Applied feature extraction, augmentation, and TensorFlow Lite conversion for lightweight deployment.',
        'Designed a Streamlit interface for real-time cough analysis.'
      ]
    },
    {
      title: 'Doctor Appointment & Healthcare Management System',
      tech: 'PHP, MySQL, HTML5, CSS3, JavaScript, Bootstrap',
      github: 'https://github.com/sadhukhanankita2025/HealthCare',
      bullets: [
        'Developed a web application for online doctor appointment booking and healthcare management.',
        'Implemented secure authentication for patients, doctors, and administrators.',
        'Enabled appointment scheduling, doctor profile management, and patient record management.',
        'Built an admin dashboard for managing appointments and healthcare records.'
      ]
    },
    {
      title: 'NeuroAI – Early Cognitive Decline Detection via Voice',
      tech: 'React.js, Vite, Tailwind CSS, Flask, Python, TensorFlow, Keras, Librosa, NumPy, ReportLab, Chart.js, React Router',
      github: 'https://github.com/sadhukhanankita2025/early-cognitive-detection',
      bullets: [
        'Developed a full-stack AI-powered healthcare application to detect early cognitive decline from speech recordings using Deep Learning and NeuroAI techniques.',
        'Extracted MFCC audio features using Librosa and trained a TensorFlow/Keras model for speech-based cognitive assessment.',
        'Built a responsive React frontend with Flask REST APIs for secure audio upload and real-time prediction.',
        'Visualized prediction confidence using interactive charts and generated downloadable clinical PDF reports.',
        'Designed a scalable architecture with separate frontend, backend, and AI model services.'
      ]
    }
  ];

  projectsList.forEach((proj) => {
    checkPageBreak(22);

    // Title
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    const splitTitle = doc.splitTextToSize(proj.title, contentWidth);
    doc.text(splitTitle, margin, y);
    y += splitTitle.length * 4.5 + 1;

    // Technologies
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text('Technologies: ', margin, y);
    const techPrefix = doc.getTextWidth('Technologies: ');

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const splitTech = doc.splitTextToSize(proj.tech, contentWidth - techPrefix);
    doc.text(splitTech, margin + techPrefix, y);
    y += splitTech.length * 4.2 + 1;

    // GitHub Link
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text('GitHub: ', margin, y);
    const ghPrefix = doc.getTextWidth('GitHub: ');

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(2, 132, 199);
    doc.text(proj.github, margin + ghPrefix, y);
    y += 4.5;

    // Bullet points
    doc.setTextColor(30, 41, 59);
    proj.bullets.forEach((b) => {
      const splitB = doc.splitTextToSize(`• ${b}`, contentWidth - 2);
      checkPageBreak(splitB.length * 4.2);
      doc.text(splitB, margin + 2, y);
      y += splitB.length * 4.2 + 0.5;
    });

    y += 4.5;
  });

  // Footer for last page
  addFooter(currentPage);

  // Trigger Save
  doc.save('Ankita_Sadhukhan_Resume.pdf');
}
