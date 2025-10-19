import React, { useEffect, useRef } from "react";
import "./CarouselCard.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type CarouselCardProps = {
  title: string;
  info: any[];
};

export const CarouselCard: React.FC<CarouselCardProps> = (
  props: CarouselCardProps
) => {
  const { title, info } = props;
  const {number} = useSelector((state:RootState)=>state.carousel)
  const cardRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    if (infoRef.current) {
        infoRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [number]);

  return (
    <div ref={cardRef} className="carousel-card-container">
      <div className="carousel-card-title">{title}</div>
      <div ref={infoRef} className="carousel-card-info">{info.map((item) => item)}</div>
    </div>
  );
};
