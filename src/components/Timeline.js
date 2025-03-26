import React, { useEffect } from "react";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const events = [
  { title: "Evento 1", text: "Descrizione evento 1", img: "https://via.placeholder.com/150" },
  { title: "Evento 2", text: "Descrizione evento 2", img: "https://via.placeholder.com/150" },
  { title: "Evento 3", text: "Descrizione evento 3", img: "https://via.placeholder.com/150" }
];

function Timeline() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const handleScroll = () => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          item.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <TimelineItem key={index} event={event} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
