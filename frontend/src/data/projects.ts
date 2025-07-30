export interface Project {
  _id?: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'fullstack' | 'ai' | 'other';
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  completionDate?: string;
  screenshots?: string[];
  highlights?: string[];
  client?: string;
  teamSize?: number;
  duration?: string;
  challenges?: string[];
  solutions?: string[];
}

export const sampleProjects: Project[] = [
  {
    name: 'E-Commerce Mobile App',
    description:
      'A comprehensive e-commerce mobile application built with React Native, featuring product catalog, shopping cart, payment integration, and user authentication. The app provides a seamless shopping experience with real-time inventory updates and secure payment processing.',
    shortDescription:
      'Full-featured e-commerce mobile application with payment integration',
    image: '/project1.jpg',
    technologies: [
      'React Native',
      'TypeScript',
      'Redux',
      'Firebase',
      'Stripe API',
      'Node.js',
    ],
    category: 'mobile',
    githubUrl: 'https://github.com/mikdeveloper/ecommerce-app',
    liveUrl: 'https://ecommerce-app-demo.com',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.ecommerce.app',
    featured: true,
    status: 'completed',
    completionDate: '2024-01-15',
    highlights: [
      'Real-time inventory management',
      'Secure payment processing',
      'User authentication & profiles',
      'Push notifications',
      'Offline functionality',
    ],
    client: 'Retail Client',
    teamSize: 3,
    duration: '4 months',
  },
  {
    name: 'Fitness Tracking App',
    description:
      'Cross-platform fitness tracking application with workout planning, progress monitoring, and social features for fitness enthusiasts. The app includes GPS tracking, workout analytics, and social sharing capabilities.',
    shortDescription:
      'Fitness tracking app with workout planning and progress monitoring',
    image: '/project2.jpg',
    technologies: [
      'React Native',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'Google Maps API',
    ],
    category: 'mobile',
    githubUrl: 'https://github.com/mikdeveloper/fitness-tracker',
    liveUrl: 'https://fitness-tracker-demo.com',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.fitness.tracker',
    featured: true,
    status: 'completed',
    completionDate: '2023-11-20',
    highlights: [
      'GPS workout tracking',
      'Social features',
      'Progress analytics',
      'Workout planning',
      'Real-time sync',
    ],
    client: 'Fitness Startup',
    teamSize: 2,
    duration: '3 months',
  },
  {
    name: 'Food Delivery Platform',
    description:
      'Mobile app for food delivery with real-time tracking, restaurant management, and payment processing capabilities. The platform connects restaurants, delivery partners, and customers seamlessly.',
    shortDescription:
      'Food delivery platform with real-time tracking and payment processing',
    image: '/project3.jpg',
    technologies: [
      'React Native',
      'Firebase',
      'Google Maps API',
      'PayPal',
      'Socket.io',
      'AWS',
    ],
    category: 'mobile',
    githubUrl: 'https://github.com/mikdeveloper/food-delivery',
    liveUrl: 'https://food-delivery-demo.com',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.food.delivery',
    featured: true,
    status: 'completed',
    completionDate: '2023-09-10',
    highlights: [
      'Real-time order tracking',
      'Restaurant management',
      'Payment processing',
      'Driver app integration',
      'Analytics dashboard',
    ],
    client: 'Food Delivery Company',
    teamSize: 4,
    duration: '5 months',
  },
  {
    name: 'Social Media App',
    description:
      'A social networking mobile app with real-time messaging, photo sharing, and user profiles. Features include story sharing, direct messaging, and content discovery algorithms.',
    shortDescription:
      'Social networking app with real-time messaging and photo sharing',
    image: '/project4.jpg',
    technologies: [
      'React Native',
      'Socket.io',
      'AWS S3',
      'Redis',
      'MongoDB',
      'Node.js',
    ],
    category: 'mobile',
    githubUrl: 'https://github.com/mikdeveloper/social-app',
    liveUrl: 'https://social-app-demo.com',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.social.app',
    featured: false,
    status: 'completed',
    completionDate: '2023-07-25',
    highlights: [
      'Real-time messaging',
      'Photo & video sharing',
      'Story features',
      'Content discovery',
      'User profiles',
    ],
    client: 'Social Media Startup',
    teamSize: 3,
    duration: '4 months',
  },
  {
    name: 'Task Management Tool',
    description:
      'Productivity app for task management with team collaboration, project tracking, and deadline reminders. Features include kanban boards, time tracking, and team analytics.',
    shortDescription:
      'Productivity app for task management and team collaboration',
    image: '/project5.jpg',
    technologies: [
      'React Native',
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'Socket.io',
    ],
    category: 'mobile',
    githubUrl: 'https://github.com/mikdeveloper/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.task.manager',
    featured: false,
    status: 'completed',
    completionDate: '2023-05-15',
    highlights: [
      'Kanban boards',
      'Team collaboration',
      'Time tracking',
      'Project analytics',
      'Deadline reminders',
    ],
    client: 'Productivity Company',
    teamSize: 2,
    duration: '3 months',
  },
  {
    name: 'Weather Forecast App',
    description:
      'Beautiful weather application with location-based forecasts, hourly predictions, and weather alerts. Features include detailed weather maps, historical data, and customizable widgets.',
    shortDescription:
      'Weather app with location-based forecasts and detailed predictions',
    image: '/project6.jpg',
    technologies: [
      'React Native',
      'OpenWeather API',
      'Geolocation',
      'Charts',
      'AsyncStorage',
      'React Navigation',
    ],
    category: 'mobile',
    githubUrl: 'https://github.com/mikdeveloper/weather-app',
    liveUrl: 'https://weather-app-demo.com',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.weather.app',
    featured: false,
    status: 'completed',
    completionDate: '2023-03-20',
    highlights: [
      'Location-based forecasts',
      'Hourly predictions',
      'Weather alerts',
      'Historical data',
      'Customizable widgets',
    ],
    client: 'Weather Service',
    teamSize: 1,
    duration: '2 months',
  },
];

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'web', label: 'Web Apps' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'ai', label: 'AI/ML' },
  { value: 'other', label: 'Other' },
];

export const technologies = [
  'React Native',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Firebase',
  'MongoDB',
  'Redux',
  'Express.js',
  'Socket.io',
  'AWS',
  'Google Maps API',
  'Stripe API',
  'PayPal',
  'OpenWeather API',
  'PostgreSQL',
  'Redis',
];
