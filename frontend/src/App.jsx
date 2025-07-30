import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import LazyWrapper from './components/LazyWrapper';
import { CursorProvider } from './contexts/CursorContext';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const AnimationDemo = lazy(() => import('./pages/AnimationDemo'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <CursorProvider>
        <ScrollToTop />

        {/* Global SEO Meta Tags */}
        <Helmet>
          <title>Muhammad Iqbal Khan | React Native Developer</title>
          <meta
            name='description'
            content='Professional React Native developer specializing in cross-platform mobile app development with Firebase, modern tools, and exceptional user experiences.'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='author' content='Muhammad Iqbal Khan' />
          <meta name='robots' content='index, follow' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://muhammadiqbalkhan.com' />
          <meta
            property='og:title'
            content='Muhammad Iqbal Khan | React Native Developer'
          />
          <meta
            property='og:description'
            content='Professional React Native developer specializing in cross-platform mobile app development with Firebase, modern tools, and exceptional user experiences.'
          />
          <meta
            property='og:image'
            content='https://muhammadiqbalkhan.com/og-image.jpg'
          />
          <meta
            property='og:site_name'
            content='Muhammad Iqbal Khan Portfolio'
          />
          <meta property='og:locale' content='en_US' />

          {/* Twitter */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:url' content='https://muhammadiqbalkhan.com' />
          <meta
            name='twitter:title'
            content='Muhammad Iqbal Khan | React Native Developer'
          />
          <meta
            name='twitter:description'
            content='Professional React Native developer specializing in cross-platform mobile app development with Firebase, modern tools, and exceptional user experiences.'
          />
          <meta
            name='twitter:image'
            content='https://muhammadiqbalkhan.com/twitter-image.jpg'
          />
          <meta name='twitter:creator' content='@muhammadiqbalkhan' />

          {/* Additional Meta Tags */}
          <meta
            name='keywords'
            content='React Native, Mobile Development, Firebase, Cross-platform, JavaScript, TypeScript, Mobile Apps, iOS, Android'
          />
          <meta name='theme-color' content='#3b82f6' />
          <meta name='msapplication-TileColor' content='#3b82f6' />

          {/* Canonical URL */}
          <link rel='canonical' href='https://muhammadiqbalkhan.com' />

          {/* Favicon */}
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
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

          {/* Preconnect to external domains */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
        </Helmet>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={
                <LazyWrapper pageName='Home'>
                  <Home />
                </LazyWrapper>
              }
            />
            <Route
              path='about'
              element={
                <LazyWrapper pageName='About'>
                  <About />
                </LazyWrapper>
              }
            />
            <Route
              path='experience'
              element={
                <LazyWrapper pageName='Experience'>
                  <Experience />
                </LazyWrapper>
              }
            />
            <Route
              path='projects'
              element={
                <LazyWrapper pageName='Projects'>
                  <Projects />
                </LazyWrapper>
              }
            />
            <Route
              path='skills'
              element={
                <LazyWrapper pageName='Skills'>
                  <Skills />
                </LazyWrapper>
              }
            />
            <Route
              path='contact'
              element={
                <LazyWrapper pageName='Contact'>
                  <Contact />
                </LazyWrapper>
              }
            />
            <Route
              path='demo'
              element={
                <LazyWrapper pageName='Animation Demo'>
                  <AnimationDemo />
                </LazyWrapper>
              }
            />
            <Route
              path='*'
              element={
                <LazyWrapper pageName='Page'>
                  <NotFound />
                </LazyWrapper>
              }
            />
          </Route>
        </Routes>
      </CursorProvider>
    </HelmetProvider>
  );
}

export default App;
