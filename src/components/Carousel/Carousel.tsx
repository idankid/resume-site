import React from "react";
import "./Carousel.css";

type CarouselProps = {
  items: any[];
  spacing?: string;
};

export const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const { items, spacing } = props;

  // if there are no items
  if (items?.length <= 0) return null;

  const angle = 360 / items.length;
  const space = spacing ? spacing : "300px";
  return (
    <div className="carousel-container">
      <div className="carousel">
        {items?.map((item, idx) => (
          <div
            key={`carousel-item-${idx}`}
            style={{
              transform: `rotateY(${idx * angle}deg) translateZ(${space})`,
            }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
