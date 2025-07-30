import { motion } from 'framer-motion';

const AnimatedItem = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  animationType = 'fadeUp',
  ...props
}) => {
  // Animation variants for child items
  const getItemVariants = type => {
    switch (type) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 30 },
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
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
            },
          },
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
            },
          },
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
            },
          },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
            },
          },
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -5 },
          visible: {
            opacity: 1,
            rotate: 0,
            transition: {
              duration,
              delay,
              ease: 'easeOut',
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
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
    }
  };

  const itemVariants = getItemVariants(animationType);

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
