import React, { useState, useRef } from 'react';
import './App.css';
import Timeline from './components/Timeline/Timeline';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';
import NuclearAnimation from './components/NuclearAnimation/NuclearAnimation';
import { timelineDataEn, timelineDataIt } from './data/timelineData-en';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const [language, setLanguage] = useState('en');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const timelineData = language === 'en' ? timelineDataEn : timelineDataIt;
  
  return (
    <div className="app" ref={containerRef}>
      <LanguageSwitch language={language} setLanguage={setLanguage} />
      
      <motion.div 
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{language === 'en' ? 'Chernobyl Disaster Timeline' : 'Timeline del Disastro di Chernobyl'}</h1>
        <p className="subtitle">
          {language === 'en' 
            ? 'Scroll down to explore the tragic events' 
            : 'Scorri verso il basso per esplorare gli eventi tragici'}
        </p>
      </motion.div>
      
      <Timeline data={timelineData} />
      
      <NuclearAnimation language={language} scrollProgress={scrollYProgress} />
    </div>
  );
}

export default App;