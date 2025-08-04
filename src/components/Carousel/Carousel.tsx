import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setNumber } from "../../redux/carousel.Slice";

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

  const dispatch = useDispatch();

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

  const beginDrag = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const updateDrag = (clientX: number) => {
    if (!isDragging || startX === null) return;
    const deltaX = clientX - startX;
    setRotation((prev) => prev - deltaX * 0.3); // reverse direction for natural drag
    setStartX(clientX);
  };

  const endDrag = () => {
    setIsDragging(false);
    setStartX(null);

    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const index = Math.round(normalizedRotation / angle) % items.length;
    const newRotation = -index * angle;

    setRotation(newRotation);
    dispatch(setNumber(index));
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => beginDrag(e.clientX);
  const handleMouseMove = (e: MouseEvent) => updateDrag(e.clientX);
  const handleMouseUp = () => endDrag();

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      beginDrag(e.touches[0].clientX);
    }
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      updateDrag(e.touches[0].clientX);
    }
  };
  const handleTouchEnd = () => endDrag();

  // Attach global listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startX, rotation]);

  // Apply transform
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${rotation}deg)`;
    }
  }, [rotation]);

  return (
    <div className="carousel-container" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
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
