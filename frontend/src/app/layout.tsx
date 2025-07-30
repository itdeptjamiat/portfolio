import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Iqbal Khan | React Native Developer',
    template: '%s | Muhammad Iqbal Khan',
  },
  description:
    'Full-stack React Native developer with expertise in mobile app development, UI/UX design, and cross-platform solutions. View my portfolio of innovative mobile applications.',
  keywords: [
    'React Native Developer',
    'Mobile App Developer',
    'Cross-platform Development',
    'UI/UX Design',
    'JavaScript',
    'TypeScript',
    'Mobile Applications',
    'Portfolio',
    'Muhammad Iqbal Khan',
    'MIK',
  ],
  authors: [{ name: 'Muhammad Iqbal Khan' }],
  creator: 'Muhammad Iqbal Khan',
  publisher: 'Muhammad Iqbal Khan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mikportfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mikportfolio.com',
    title: 'Muhammad Iqbal Khan | React Native Developer',
    description:
      'Full-stack React Native developer with expertise in mobile app development, UI/UX design, and cross-platform solutions.',
    siteName: 'MIK Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Iqbal Khan - React Native Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Iqbal Khan | React Native Developer',
    description:
      'Full-stack React Native developer with expertise in mobile app development, UI/UX design, and cross-platform solutions.',
    images: ['/og-image.jpg'],
    creator: '@mikdeveloper',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#1A2A6C' />
        <meta name='msapplication-TileColor' content='#1A2A6C' />
      </head>
      <body className='font-sans antialiased'>
        <ThemeProvider>
          <div className='min-h-screen bg-background text-foreground'>
            <Navigation />
            <main className='pt-16'>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
