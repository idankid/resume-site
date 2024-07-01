import React from "react";
import {
  SubSection,
  SubSectionProps,
} from "../../components/subSection/SubSection";
import { CarouselCard } from "../../components/CarouselCard/CarouselCard";

export const About: React.FC = () => {
  const info: SubSectionProps[] = [
    {
      title: "",
      bulletPoints: [
        "Software Engineering B.Sc.",
        "A fast and self-learner.",
        "Native English speaker. ",
        "Highly motivated with a passion for technology.",
        "Looking for a challenging environment to express my knowledge and abilities.",
      ],
    },
  ];
  return (
    <CarouselCard
      title="About"
      info={info.map((item) => (
        <SubSection title={item.title} bulletPoints={item.bulletPoints} />
      ))}
    />
  );
};
