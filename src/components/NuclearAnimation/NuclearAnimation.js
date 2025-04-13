import React, { useEffect } from 'react';
import { motion, useTransform, useAnimation } from 'framer-motion';
import './styles.css';

const NuclearAnimation = ({ language, scrollProgress }) => {
  const controls = useAnimation();
  
  const stemHeight = useTransform(
    scrollProgress,
    [0.7, 0.9],
    [0, 250]
  );
  
  const capScale = useTransform(
    scrollProgress,
    [0.7, 0.9],
    [0, 1]
  );
  
  const capOpacity = useTransform(
    scrollProgress,
    [0.7, 0.8, 0.9],
    [0, 0.5, 1]
  );
  
  const shockwaveScale = useTransform(
    scrollProgress,
    [0.85, 0.95],
    [0, 3]
  );
  
  const shockwaveOpacity = useTransform(
    scrollProgress,
    [0.85, 0.95],
    [0.8, 0]
  );
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollProgress.get() > 0.9) {
        controls.start({
          scale: [1, 1.1, 1],
          transition: { duration: 1, repeat: Infinity }
        });
      } else {
        controls.stop();
      }
    };
    
    const unsubscribe = scrollProgress.onChange(handleScroll);
    
    return () => unsubscribe();
  }, [scrollProgress, controls]);
  
  return (
    <div className="nuclear-animation">
      <div className="animation-container">
        <motion.div 
          className="shockwave"
          style={{
            scale: shockwaveScale,
            opacity: shockwaveOpacity
          }}
        />
        
        <motion.div 
          className="explosion"
          animate={controls}
        >
          <div className="mushroom-cloud">
            <motion.div 
              className="stem"
              style={{ height: stemHeight }}
            />
            <motion.div 
              className="cap"
              style={{ 
                scale: capScale,
                opacity: capOpacity
              }}
            />
          </div>
        </motion.div>
        
        <div className="animation-text">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {language === 'en' 
              ? 'The Chernobyl Disaster - April 26, 1986' 
              : 'Il Disastro di Chernobyl - 26 Aprile 1986'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === 'en'
              ? 'The worst nuclear power plant accident in history'
              : 'Il peggior incidente in una centrale nucleare della storia'}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default NuclearAnimation;