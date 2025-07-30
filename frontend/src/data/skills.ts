export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  color: string;
  description: string;
  experience: string;
  projects: number;
  category: 'tech' | 'soft' | 'other';
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export const techSkills: Skill[] = [
  {
    name: 'React Native',
    level: 95,
    icon: '⚛️',
    color: '#61DAFB',
    description: 'Cross-platform mobile app development with React Native',
    experience: '3+ years',
    projects: 12,
    category: 'tech',
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: '📘',
    color: '#3178C6',
    description: 'Type-safe JavaScript development',
    experience: '2+ years',
    projects: 15,
    category: 'tech',
  },
  {
    name: 'JavaScript',
    level: 92,
    icon: '📜',
    color: '#F7DF1E',
    description: 'Modern JavaScript (ES6+) development',
    experience: '4+ years',
    projects: 25,
    category: 'tech',
  },
  {
    name: 'Node.js',
    level: 85,
    icon: '🟢',
    color: '#339933',
    description: 'Server-side JavaScript development',
    experience: '3+ years',
    projects: 18,
    category: 'tech',
  },
  {
    name: 'Firebase',
    level: 88,
    icon: '🔥',
    color: '#FFCA28',
    description: 'Backend-as-a-Service and real-time database',
    experience: '2+ years',
    projects: 10,
    category: 'tech',
  },
  {
    name: 'MongoDB',
    level: 80,
    icon: '🍃',
    color: '#47A248',
    description: 'NoSQL database management and optimization',
    experience: '2+ years',
    projects: 8,
    category: 'tech',
  },
  {
    name: 'Redux',
    level: 85,
    icon: '🔄',
    color: '#764ABC',
    description: 'State management for React applications',
    experience: '2+ years',
    projects: 12,
    category: 'tech',
  },
  {
    name: 'Express.js',
    level: 82,
    icon: '🚂',
    color: '#000000',
    description: 'Web application framework for Node.js',
    experience: '2+ years',
    projects: 14,
    category: 'tech',
  },
  {
    name: 'Git',
    level: 90,
    icon: '📚',
    color: '#F05032',
    description: 'Version control and collaborative development',
    experience: '4+ years',
    projects: 30,
    category: 'tech',
  },
  {
    name: 'AWS',
    level: 75,
    icon: '☁️',
    color: '#FF9900',
    description: 'Cloud infrastructure and deployment',
    experience: '1+ years',
    projects: 6,
    category: 'tech',
  },
];

export const softSkills: Skill[] = [
  {
    name: 'Leadership',
    level: 88,
    icon: '👑',
    color: '#FFD700',
    description: 'Team leadership and project management',
    experience: '3+ years',
    projects: 8,
    category: 'soft',
  },
  {
    name: 'Communication',
    level: 92,
    icon: '💬',
    color: '#4CAF50',
    description: 'Effective verbal and written communication',
    experience: '4+ years',
    projects: 20,
    category: 'soft',
  },
  {
    name: 'Problem Solving',
    level: 90,
    icon: '🧩',
    color: '#2196F3',
    description: 'Analytical thinking and creative solutions',
    experience: '4+ years',
    projects: 25,
    category: 'soft',
  },
  {
    name: 'Team Collaboration',
    level: 85,
    icon: '🤝',
    color: '#9C27B0',
    description: 'Working effectively in cross-functional teams',
    experience: '3+ years',
    projects: 15,
    category: 'soft',
  },
  {
    name: 'Time Management',
    level: 87,
    icon: '⏰',
    color: '#FF5722',
    description: 'Efficient project planning and execution',
    experience: '3+ years',
    projects: 18,
    category: 'soft',
  },
  {
    name: 'Adaptability',
    level: 90,
    icon: '🔄',
    color: '#00BCD4',
    description: 'Quick learning and adapting to new technologies',
    experience: '4+ years',
    projects: 22,
    category: 'soft',
  },
];

export const otherSkills: Skill[] = [
  {
    name: 'SEO',
    level: 85,
    icon: '🔍',
    color: '#FF6B35',
    description: 'Search Engine Optimization and digital marketing',
    experience: '2+ years',
    projects: 8,
    category: 'other',
  },
  {
    name: 'Prompt Engineering',
    level: 88,
    icon: '🤖',
    color: '#6C63FF',
    description: 'AI prompt design and optimization',
    experience: '1+ years',
    projects: 5,
    category: 'other',
  },
  {
    name: 'Digital Marketing',
    level: 80,
    icon: '📈',
    color: '#4CAF50',
    description: 'Digital marketing strategies and campaigns',
    experience: '2+ years',
    projects: 6,
    category: 'other',
  },
  {
    name: 'UI/UX Design',
    level: 82,
    icon: '🎨',
    color: '#E91E63',
    description: 'User interface and experience design',
    experience: '2+ years',
    projects: 12,
    category: 'other',
  },
  {
    name: 'Project Management',
    level: 85,
    icon: '📋',
    color: '#FF9800',
    description: 'Agile project management and coordination',
    experience: '3+ years',
    projects: 10,
    category: 'other',
  },
  {
    name: 'Content Creation',
    level: 78,
    icon: '✍️',
    color: '#795548',
    description: 'Technical writing and content development',
    experience: '2+ years',
    projects: 7,
    category: 'other',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Technical Skills',
    description: 'Programming languages, frameworks, and development tools',
    skills: techSkills,
  },
  {
    name: 'Soft Skills',
    description: 'Interpersonal skills and professional competencies',
    skills: softSkills,
  },
  {
    name: 'Other Skills',
    description: 'Additional expertise in marketing, design, and management',
    skills: otherSkills,
  },
];

export const allSkills = [...techSkills, ...softSkills, ...otherSkills];

// Radar chart data for tech skills
export const radarChartData = {
  labels: techSkills.map(skill => skill.name),
  datasets: [
    {
      label: 'Technical Proficiency',
      data: techSkills.map(skill => skill.level),
      backgroundColor: 'rgba(26, 42, 108, 0.2)',
      borderColor: '#1A2A6C',
      borderWidth: 2,
      pointBackgroundColor: '#1A2A6C',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1A2A6C',
    },
  ],
};

// Progress bar data for soft skills
export const progressBarData = softSkills.map(skill => ({
  ...skill,
  percentage: skill.level,
}));

// Skill icons mapping
export const skillIcons: { [key: string]: string } = {
  'React Native': '⚛️',
  TypeScript: '📘',
  JavaScript: '📜',
  'Node.js': '🟢',
  Firebase: '🔥',
  MongoDB: '🍃',
  Redux: '🔄',
  'Express.js': '🚂',
  Git: '📚',
  AWS: '☁️',
  Leadership: '👑',
  Communication: '💬',
  'Problem Solving': '🧩',
  'Team Collaboration': '🤝',
  'Time Management': '⏰',
  Adaptability: '🔄',
  SEO: '🔍',
  'Prompt Engineering': '🤖',
  'Digital Marketing': '📈',
  'UI/UX Design': '🎨',
  'Project Management': '📋',
  'Content Creation': '✍️',
};
