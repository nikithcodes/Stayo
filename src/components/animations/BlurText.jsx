import React from 'react';
import { motion } from 'framer-motion';

const BlurText = ({ children, className = '', delay = 0 }) => {
  const words = children.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block', marginRight: '8px' }}
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;