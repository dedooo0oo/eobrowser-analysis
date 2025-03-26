import React from "react";
import { Card } from "react-bootstrap";
import "./Timeline.css";

function TimelineItem({ event, isLeft }) {
  return (
    <div className={`timeline-item ${isLeft ? "left" : "right"}`}>
      <Card>
        <Card.Img variant="top" src={event.img} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TimelineItem;
