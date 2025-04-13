import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

const ScrollIndicator = ({ sections, currentSection }) => {
  return (
    <div className="scroll-indicator">
      {sections.map((_, index) => (
        <motion.div
          key={index}
          className={`scroll-dot ${currentSection === index ? 'active' : ''}`}
          animate={{
            scale: currentSection === index ? 1.3 : 1,
            backgroundColor: currentSection === index ? 'var(--highlight)' : 'rgba(255, 255, 255, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;