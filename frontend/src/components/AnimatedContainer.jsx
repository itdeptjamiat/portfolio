import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedContainer = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  triggerOnce = true,
  animationType = 'fadeUp',
  staggerChildren = 0.1,
  ...props
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '-50px 0px',
  });

  // Animation variants based on type
  const getVariants = type => {
    switch (type) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              staggerChildren,
            },
          },
        };
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              staggerChildren,
            },
          },
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              staggerChildren,
            },
          },
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              staggerChildren,
            },
          },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              staggerChildren,
            },
          },
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -10 },
          visible: {
            opacity: 1,
            rotate: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              staggerChildren,
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
              staggerChildren,
            },
          },
        };
    }
  };

  const containerVariants = getVariants(animationType);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
