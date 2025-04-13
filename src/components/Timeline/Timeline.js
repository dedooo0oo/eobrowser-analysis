import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineItem from './TimelineItem';
import './styles.css';

const Timeline = ({ data }) => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)", "linear-gradient(180deg, #16213e 0%, #0f3460 100%)"]
  );
  
  return (
    <motion.div 
      className="timeline-container"
      ref={timelineRef}
      style={{ background }}
    >
      <div className="timeline">
        {data.map((item, index) => (
          <TimelineItem 
            key={index}
            index={index}
            totalItems={data.length}
            date={item.date}
            time={item.time}
            title={item.title}
            description={item.description}
            image={item.image}
            isLast={index === data.length - 1}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;