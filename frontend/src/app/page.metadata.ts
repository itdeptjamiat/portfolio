import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muhammad Iqbal Khan | React Native Developer',
  description:
    'Full-stack React Native developer with expertise in mobile app development, UI/UX design, and cross-platform solutions. View my portfolio of innovative mobile applications.',
  openGraph: {
    title: 'Muhammad Iqbal Khan | React Native Developer',
    description:
      'Full-stack React Native developer with expertise in mobile app development, UI/UX design, and cross-platform solutions.',
    url: 'https://mikportfolio.com',
    siteName: 'MIK Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Iqbal Khan - React Native Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Iqbal Khan | React Native Developer',
    description:
      'Full-stack React Native developer with expertise in mobile app development, UI/UX design, and cross-platform solutions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};
