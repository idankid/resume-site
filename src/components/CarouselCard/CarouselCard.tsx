import React from "react";
import "./CarouselCard.css";

type CarouselCardProps = {
  title: string;
  info: any[];
};

export const CarouselCard: React.FC<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const { title, info } = props;

  return (
    <div className="carousel-card-container">
      <div className="carousel-card-title">{title}</div>
      <div className="carousel-card-info">{info.map((item) => item)}</div>
    </div>
  );
};
