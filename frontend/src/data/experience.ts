export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
  isLeadership?: boolean;
  badge?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'digiod-solutions',
    company: 'Digiod Solutions',
    role: 'Founder & CEO',
    period: '2023 - Present',
    location: 'Remote / Pakistan',
    description:
      'Founded and lead a technology company focused on mobile app development and digital solutions. Driving innovation and delivering high-quality products to clients worldwide.',
    responsibilities: [
      'Lead mobile app development team of 5 developers',
      'Manage client relationships and project delivery',
      'Develop business strategy and growth plans',
      'Oversee product development and quality assurance',
      'Handle financial planning and resource allocation',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Node.js',
      'Firebase',
      'MongoDB',
      'AWS',
      'Git',
      'CI/CD',
    ],
    isLeadership: true,
    badge: 'Founder',
  },
  {
    id: 'emporionsoft',
    company: 'Emporionsoft',
    role: 'Junior Software Engineer',
    period: '2022 - 2023',
    location: 'Lahore, Pakistan',
    description:
      'Worked as a junior software engineer developing mobile applications and web solutions. Gained hands-on experience with modern development practices and team collaboration.',
    responsibilities: [
      'Developed 3 React Native mobile applications',
      'Collaborated with senior developers on large projects',
      'Participated in code reviews and testing',
      'Maintained and updated existing applications',
      'Learned advanced mobile development concepts',
    ],
    technologies: [
      'React Native',
      'JavaScript',
      'Redux',
      'React Navigation',
      'Firebase',
      'Git',
      'Jira',
      'Postman',
    ],
  },
  {
    id: 'safe',
    company: 'SAFE',
    role: 'Assistant Incharge IT',
    period: '2021 - 2022',
    location: 'Lahore, Pakistan',
    description:
      'Managed IT infrastructure and provided technical support. Developed internal tools and maintained systems for organizational efficiency.',
    responsibilities: [
      'Managed IT infrastructure and network systems',
      'Provided technical support to staff members',
      'Developed internal tools and automation scripts',
      'Maintained data security and backup systems',
      'Trained staff on new software and systems',
    ],
    technologies: [
      'Network Administration',
      'System Administration',
      'Python',
      'SQL',
      'Windows Server',
      'Active Directory',
      'Backup Systems',
      'Security Tools',
    ],
  },
];

export interface LeadershipRole {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  badge?: string;
}

export const leadershipData: LeadershipRole[] = [
  {
    id: 'idyllic-youth',
    organization: 'Idyllic Youth – LLU Chapter',
    role: 'President',
    period: '2022 - 2023',
    description:
      'Led a youth organization chapter focused on community development, leadership training, and social impact initiatives.',
    achievements: [
      'Led a team of 15 executive members',
      'Organized 8 community development events',
      'Increased membership by 200%',
      'Established partnerships with 5 local organizations',
      'Raised $10,000+ for community projects',
    ],
    badge: 'President',
  },
  {
    id: 'tech-community',
    organization: 'React Native Community',
    role: 'Community Contributor',
    period: '2022 - Present',
    description:
      'Active contributor to the React Native community, sharing knowledge and helping other developers.',
    achievements: [
      'Published 15 technical articles and tutorials',
      'Mentored 20+ junior developers',
      'Contributed to 8 open-source projects',
      'Organized 3 local meetups',
      'Created educational content for 500+ developers',
    ],
    badge: 'Contributor',
  },
];

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const educationData: EducationItem[] = [
  {
    id: 'bachelors',
    institution: 'Lahore Leads University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: '2019 - 2023',
    location: 'Lahore, Pakistan',
    description:
      'Completed degree in Computer Science with focus on software development, algorithms, and system design.',
    achievements: [
      'Graduated with distinction (3.8 GPA)',
      'Completed final year project on mobile app development',
      'Participated in 5 hackathons and coding competitions',
      'Served as class representative for 2 years',
      'Received merit scholarship for academic excellence',
    ],
  },
];
