import React from 'react';
import { motion, useTransform } from 'framer-motion';
import './styles.css';

const TimelineItem = ({ index, totalItems, date, time, title, description, image, isLast, scrollProgress }) => {
  const opacity = useTransform(
    scrollProgress,
    [(index - 1) / totalItems, index / totalItems, (index + 1) / totalItems],
    [0.2, 1, 0.2]
  );
  
  const y = useTransform(
    scrollProgress,
    [(index - 1) / totalItems, index / totalItems, (index + 1) / totalItems],
    [50, 0, -50]
  );
  
  const scale = useTransform(
    scrollProgress,
    [(index - 1) / totalItems, index / totalItems, (index + 1) / totalItems],
    [0.9, 1, 0.9]
  );
  
  return (
    <motion.div 
      className={`timeline-item ${isLast ? 'last' : ''}`}
      style={{ opacity, y, scale }}
    >
      <div className="timeline-date">
        <motion.h3
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {date}
        </motion.h3>
        <motion.p
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {time}
        </motion.p>
      </div>
      
      <motion.div 
        className="timeline-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <div className="timeline-image">
          <motion.img 
            src={image} 
            alt={title}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <div className="image-overlay"></div>
        </div>
        <div className="timeline-text">
          <motion.h2
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;