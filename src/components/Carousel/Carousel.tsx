import React, { useEffect, useRef, useState } from "react";
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

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || startX === null) return;
    const deltaX = e.clientX - startX;
    setRotation((prev) => prev + deltaX * 0.3); // scale factor
    setStartX(e.clientX); // update for smoother dragging
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX]);

  return (
    <div className="carousel-container" onMouseDown={handleMouseDown}>
      <div className="carousel" ref={carouselRef}>
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
