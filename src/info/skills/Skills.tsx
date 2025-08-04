import React from "react";
import {
  SubSection,
  SubSectionProps,
} from "../../components/subSection/SubSection";
import { CarouselCard } from "../../components/CarouselCard/CarouselCard";

export const Skills: React.FC = () => {
  const info: SubSectionProps[] = [
    {
      title: "Programming languages:",
      bulletPoints: [
        "C",
        "C++",
        "SQL",
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "GraphQL",
      ],
    },
    {
      title: "Web Technologies:",
      bulletPoints: [
        "Nodejs",
        "Nestjs",
        "React",
        "React Native",
        "HTML",
        "CSS",
        "Redis",
      ],
    },
    {
      title: "Databases & Cloud:",
      bulletPoints: [
        "AWS(S3, EC2, CloudFront, Elastic Bean Stalk, route 53, VPC, CodePipeline)",
        "MongoDB",
        "firebase",
      ],
    },
    {
      title: "Environments:",
      bulletPoints: [
        "Linux",
        "windows",
      ],
    },
    {
      title: "Tools & Platforms",
      bulletPoints: ["Git/ GitHub", "Docker", "auth0", "ClickUp", "Sendgrid"],
    },
  ];
  return (
    <CarouselCard
      title="Technical Skills"
      info={info.map((item) => (
        <SubSection title={item.title} bulletPoints={item.bulletPoints} />
      ))}
    />
  );
};
