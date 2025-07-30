import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  triggerOnce = true,
  variants = null,
  ...props
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '-50px 0px',
  });

  // Default variants if none provided
  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  const animationVariants = variants || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
