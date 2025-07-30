'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const typewriterTexts = [
  'React Native Developer',
  'Mobile App Specialist',
  'UI/UX Enthusiast',
  'Cross-Platform Expert',
];

function useTypewriter(texts: string[], speed = 80, pause = 1200) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!deleting && subIndex === texts[index].length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % texts.length);
    } else {
      timeoutRef.current = setTimeout(
        () => {
          setSubIndex(prev => prev + (deleting ? -1 : 1));
        },
        deleting ? speed / 2 : speed
      );
    }
    setDisplayed(texts[index].substring(0, subIndex));
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [subIndex, index, deleting, texts, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typewriter = useTypewriter(typewriterTexts);

  return (
    <section className='relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-16'>
      {/* Animated Gradient Blob Background */}
      <svg
        className='absolute -z-10 left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-60 dark:opacity-80'
        viewBox='0 0 700 700'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          d='M350,80Q420,160,520,180Q620,200,600,300Q580,400,500,470Q420,540,350,600Q280,540,200,470Q120,400,100,300Q80,200,180,180Q280,160,350,80Z'
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='0'
            y1='0'
            x2='700'
            y2='700'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#1A2A6C' />
            <stop offset='0.5' stopColor='#8A2BE2' />
            <stop offset='1' stopColor='#50B0FF' />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating 3D Avatar/Device Mockup */}
      <motion.div
        className='absolute right-8 bottom-8 md:right-24 md:bottom-24 z-10'
        initial={{ y: 0 }}
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className='w-40 h-72 bg-gradient-to-br from-primary to-neonBlue rounded-3xl shadow-2xl border-4 border-glass flex items-center justify-center'
          whileHover={{ rotate: 8, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className='w-28 h-56 bg-background rounded-2xl flex flex-col items-center justify-center'>
            <span className='text-5xl'>📱</span>
            <span className='text-xs text-muted-foreground mt-2'>
              Device Mockup
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <h1 className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-neonPurple to-secondary bg-clip-text text-transparent drop-shadow-[0_0_12px_#8A2BE2]'>
          Building Impactful Mobile Experiences with Code
        </h1>
        <div className='text-xl md:text-2xl font-mono text-neonBlue min-h-[2.5rem]'>
          <span>{typewriter}</span>
          <span className='animate-blink'>|</span>
        </div>
        <motion.a
          href='#contact'
          className='inline-block px-8 py-4 rounded-lg font-semibold text-lg bg-neonPurple text-white shadow-lg neon-glow hover:shadow-neon transition-all duration-300 border-2 border-neonBlue'
          whileHover={{
            scale: 1.07,
            boxShadow: '0 0 24px #8A2BE2, 0 0 48px #50B0FF',
          }}
        >
          Let&apos;s Connect
        </motion.a>
      </div>
      <style jsx global>{`
        .neon-glow {
          box-shadow:
            0 0 16px #8a2be2,
            0 0 32px #50b0ff;
        }
        .hover\:shadow-neon:hover {
          box-shadow:
            0 0 32px #8a2be2,
            0 0 64px #50b0ff;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
      `}</style>
    </section>
  );
}
