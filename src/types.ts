export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  detailedDescription?: string;
  features: string[];
  techStack: string[];
  cardAccent: 'blue' | 'rose' | 'emerald' | 'purple' | 'cyan' | string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  category: string;
  featured?: boolean;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    icon?: string;
  }[];
}

export interface CircularSkill {
  name: string;
  percentage: number;
  category: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  board: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Hackathon' | 'Certification' | 'Academic' | 'OpenSource';
  description: string;
  badgeText: string;
  link?: string;
}
