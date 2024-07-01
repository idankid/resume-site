import React, { useEffect, useRef } from "react";
import "./Carousel.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type CarouselProps = {
  items: any[];
  spacing?: string;
};

export const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const { items, spacing } = props;
  const carouselRef = useRef<HTMLDivElement>(null);
  const { number, direction } = useSelector(
    (state: RootState) => state.carousel
  );

  // if there are no items
  if (items?.length <= 0) return null;

  const angle = 360 / items.length;
  const space = spacing ? spacing : "300px";

  /**
   * when changing the number of the carousel page to it
   */
  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transform = `rotateY(${-1 * number * angle}deg)`;
  }, [number, carouselRef]);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {items?.reverse().map((item, idx) => (
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
