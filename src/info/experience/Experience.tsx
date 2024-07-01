import React from "react";
import {
  SubSection,
  SubSectionProps,
} from "../../components/subSection/SubSection";
import { CarouselCard } from "../../components/CarouselCard/CarouselCard";

export const Experience: React.FC = () => {
  const info: SubSectionProps[] = [
    {
      title: "ACHIEVED.IO, FULL STACK DEVELOPER",
      bulletPoints: [
        "In Charge of the frontend and backend development along with deployment",
        "Handled customer support",
        "Upgraded the backend from node 14 to node 20 Bringing the application up to date",
        "Created a deployment pipeline for the backend using AWS tools (CodePipeline, ec2, Elastic BeanStalk and CloudFront)",
        "Created a notification Service using Sendgrid",
        "Created a private API for a client Using NestJs",
        "Created a Scheduled Backup of the DB on a EC2 instance",
      ],
    },

    {
      title: "FREELANCE, PRIVATE TEACHER",
      bulletPoints: [
        "Tutored in Java and C programming to first- and second-year engineering students.",
        "assistance with assignments and an enhanced understating of the basics",
      ],
    },
    {
      title: "AZRIELI COLLEGE OF ENGINEERING, MENTOR",
      bulletPoints: [
        "helped struggling students stay in college.",
        "helped them understand material and manage the daily college life.",
      ],
    },
  ];

  return (
    <CarouselCard
      title="Experience"
      info={info.map((item) => (
        <SubSection title={item.title} bulletPoints={item.bulletPoints} />
      ))}
    />
  );
};
