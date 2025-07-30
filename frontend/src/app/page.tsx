'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5'></div>

      {/* Animated Blob */}
      <motion.div
        className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl'
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className='absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl'
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className='relative z-10 min-h-screen flex items-center justify-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='space-y-8'
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='space-y-4'
              >
                <div className='flex items-center space-x-3'>
                  <motion.div
                    className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className='text-primary-foreground font-bold text-lg tracking-wider'>
                      MIK
                    </span>
                  </motion.div>
                  <div className='h-px w-16 bg-gradient-to-r from-primary to-accent'></div>
                </div>

                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight'>
                  Building{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                    Impactful
                  </span>{' '}
                  Mobile Experiences with Code
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl'
              >
                I&apos;m Muhammad Iqbal Khan, a React Native developer focused
                on building cross-platform apps with modern tech and beautiful
                UI.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex flex-col sm:flex-row gap-4'
              >
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className='btn-primary px-8 py-4 rounded-lg font-medium text-lg'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Let&apos;s Connect
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className='px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Explore My Work
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='grid grid-cols-3 gap-6 pt-8'
              >
                <div className='text-center'>
                  <motion.div
                    className='text-3xl font-bold text-primary'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    3+
                  </motion.div>
                  <div className='text-sm text-muted-foreground'>
                    Years Experience
                  </div>
                </div>
                <div className='text-center'>
                  <motion.div
                    className='text-3xl font-bold text-primary'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    20+
                  </motion.div>
                  <div className='text-sm text-muted-foreground'>
                    Apps Developed
                  </div>
                </div>
                <div className='text-center'>
                  <motion.div
                    className='text-3xl font-bold text-primary'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    15+
                  </motion.div>
                  <div className='text-sm text-muted-foreground'>
                    Happy Clients
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='relative'
            >
              {/* Main Visual Container */}
              <div className='relative w-full h-96 lg:h-[500px] flex items-center justify-center'>
                {/* Floating Elements */}
                <motion.div
                  className='absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/30'
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <motion.div
                  className='absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl border border-accent/30'
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />

                {/* Central Phone Mockup */}
                <motion.div
                  className='relative z-10'
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className='w-64 h-80 bg-gradient-to-br from-primary to-accent rounded-3xl p-2 shadow-2xl'>
                    <div className='w-full h-full bg-card rounded-2xl flex items-center justify-center'>
                      <div className='text-center space-y-2'>
                        <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto'>
                          <span className='text-primary-foreground font-bold text-lg'>
                            📱
                          </span>
                        </div>
                        <div className='text-sm font-medium text-foreground'>
                          React Native
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          Mobile App
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Code Elements */}
                <motion.div
                  className='absolute bottom-20 left-10 bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border/50'
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                >
                  <div className='text-xs font-mono text-foreground'>
                    <div className='text-primary'>const</div>
                    <div className='text-accent'>app</div>
                    <div className='text-muted-foreground'>=</div>
                    <div className='text-primary'>createApp</div>
                  </div>
                </motion.div>

                <motion.div
                  className='absolute top-32 right-10 bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border/50'
                  animate={{
                    x: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <div className='text-xs font-mono text-foreground'>
                    <div className='text-primary'>export</div>
                    <div className='text-accent'>default</div>
                    <div className='text-muted-foreground'>App</div>
                  </div>
                </motion.div>
              </div>

              {/* Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='flex flex-wrap justify-center gap-2 mt-8'
              >
                {[
                  'React Native',
                  'TypeScript',
                  'Firebase',
                  'Redux',
                  'Node.js',
                  'MongoDB',
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className='px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className='w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center'
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className='w-1 h-3 bg-muted-foreground/50 rounded-full mt-2'
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
