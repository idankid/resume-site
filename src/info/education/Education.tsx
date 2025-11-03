import React from "react";
import { CarouselCard } from "../../components/CarouselCard/CarouselCard";
import {
  SubSection,
  SubSectionProps,
} from "../../components/subSection/SubSection";

export const Education: React.FC = () => {
  const info: SubSectionProps[] = [
    {
      title: "Infinity Labs R&D",
      bulletPoints: [
        "Completed an intensive, industry-aligned training program focused on\
        low-level programming and system programming, algorithm design, and real-world software\
        engineering practices.\
        The program emphasized technical agility, professional standards, and collaborative development;\
         culminating in the ability to build complex, efficient, and scalable software systems.",
      ],
    },
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
