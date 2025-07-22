import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={className}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
      style={{
        background: 'linear-gradient(to right, #2563eb, #7c3aed, #2563eb)',
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;