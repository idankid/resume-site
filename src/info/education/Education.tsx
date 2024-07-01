import React from "react";
import { CarouselCard } from "../../components/CarouselCard/CarouselCard";
import {
  SubSection,
  SubSectionProps,
} from "../../components/subSection/SubSection";

export const Education: React.FC = () => {
  const info: SubSectionProps[] = [
    {
      title: "AZRIELI COLLEGE OF ENGINEERING, BS.C IN SOFTWARE ENGINEERING",
      bulletPoints: ["Final Avg: 88"],
    },
  ];
  return (
    <CarouselCard
      title="Education"
      info={info.map((item) => (
        <SubSection title={item.title} bulletPoints={item.bulletPoints} />
      ))}
    />
  );
};
