import React from "react";
import { CarouselCard } from "../../components/CarouselCard/CarouselCard";
import {
  SubSection,
  SubSectionProps,
} from "../../components/subSection/SubSection";

export const Languages: React.FC = () => {
  const info: SubSectionProps[] = [
    {
      title: "",
      bulletPoints: ["English- Native speaker", "Hebrew- Native speaker"],
    },
  ];
  return (
    <CarouselCard
      title="Languages"
      info={info.map((item) => (
        <SubSection title={item.title} bulletPoints={item.bulletPoints} />
      ))}
    />
  );
};
