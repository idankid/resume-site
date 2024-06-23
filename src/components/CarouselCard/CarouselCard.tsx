import React from "react";
import "./CarouselCard.css";
import idan from "../../assets/idan-png.png";

export const CarouselCard: React.FC = () => {
  return (
    <div className="carousel-card-container">
      <img src={idan} />
    </div>
  );
};
