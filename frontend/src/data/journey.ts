export interface JourneyMilestone {
  id: string;
  title: string;
  period: string;
  description: string;
  icon: string;
  technologies: string[];
  achievements: string[];
  color: 'primary' | 'accent' | 'success' | 'warning';
}

export const journeyData: JourneyMilestone[] = [
  {
    id: 'flutter',
    title: 'Flutter Development',
    period: '2020 - 2021',
    description:
      'Started my mobile development journey with Flutter, learning cross-platform development concepts and Dart programming language.',
    icon: '📱',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Git'],
    achievements: [
      'Built 3 cross-platform mobile applications',
      'Learned state management with Provider',
      'Integrated Firebase for backend services',
      'Published apps to Google Play Store',
    ],
    color: 'primary',
  },
  {
    id: 'react-native',
    title: 'React Native Transition',
    period: '2021 - 2022',
    description:
      'Transitioned to React Native for better ecosystem integration and JavaScript-based development, expanding my mobile development skills.',
    icon: '⚛️',
    technologies: ['React Native', 'JavaScript', 'Redux', 'React Navigation'],
    achievements: [
      'Developed 5 React Native applications',
      'Mastered JavaScript and TypeScript',
      'Implemented complex state management',
      'Integrated third-party APIs and services',
    ],
    color: 'accent',
  },
  {
    id: 'real-world-apps',
    title: 'Real-World Applications',
    period: '2022 - 2023',
    description:
      'Built production-ready mobile applications for clients, focusing on user experience, performance optimization, and scalable architecture.',
    icon: '🚀',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
    achievements: [
      'Delivered 8 client projects successfully',
      'Achieved 4.8+ star ratings on app stores',
      'Optimized app performance and user experience',
      'Implemented CI/CD pipelines for mobile apps',
    ],
    color: 'success',
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    period: '2023 - 2024',
    description:
      'Expanded skillset to include SEO optimization and digital marketing strategies for mobile applications and web presence.',
    icon: '📈',
    technologies: [
      'SEO',
      'Google Analytics',
      'Social Media Marketing',
      'Content Strategy',
    ],
    achievements: [
      'Improved app store visibility by 300%',
      'Increased user acquisition by 150%',
      'Developed marketing strategies for mobile apps',
      'Optimized conversion rates and user retention',
    ],
    color: 'warning',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    period: '2024 - Present',
    description:
      'Currently exploring AI integration in mobile applications and automation tools to enhance development efficiency and user experience.',
    icon: '🤖',
    technologies: [
      'AI/ML',
      'ChatGPT API',
      'Automation Tools',
      'Machine Learning',
    ],
    achievements: [
      'Integrated AI features in 3 mobile apps',
      'Automated development workflows',
      'Implemented smart user recommendations',
      'Exploring AI-powered mobile experiences',
    ],
    color: 'primary',
  },
];

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  skills: string[];
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export const profileData: ProfileData = {
  name: 'Muhammad Iqbal Khan',
  title: 'React Native Developer',
  location: 'Remote / Worldwide',
  email: 'hello@mikportfolio.com',
  bio: 'Passionate mobile developer with 3+ years of experience building cross-platform applications. I specialize in React Native development, creating innovative mobile solutions that deliver exceptional user experiences. My journey from Flutter to React Native has given me a unique perspective on mobile development best practices.',
  skills: [
    'React Native',
    'TypeScript',
    'Node.js',
    'Firebase',
    'Redux',
    'MongoDB',
    'Git',
    'CI/CD',
    'UI/UX Design',
    'SEO',
    'Digital Marketing',
    'AI Integration',
  ],
  social: {
    linkedin: 'https://linkedin.com/in/mikdeveloper',
    github: 'https://github.com/mikdeveloper',
    twitter: 'https://twitter.com/mikdeveloper',
  },
};
