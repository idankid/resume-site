import React from "react";
import {
  SubSection,
  SubSectionProps,
} from "../../components/subSection/SubSection";
import { CarouselCard } from "../../components/CarouselCard/CarouselCard";

export const Projects: React.FC = () => {
  const info: SubSectionProps[] = [
    {
      title: "IOT Based Drive",
      bulletPoints: [
        "A Drive that uses iot devices to store data in a distributed manner where each iot device stores a part of the data",
        "written in c /c++"
      ],
    },
    {
      title: "Watchdog",
      bulletPoints: [
        "a watchdog that revives a process that has crashed",
        "written in c"
      ],
    },
    {
      title: "Mini shell",
      bulletPoints: [
        "a Linux shell written in C that supports the basic commands with up to two pipes.",
      ],
    },
    {
      title: "Sayeret App",
      bulletPoints: [
        "an app for the Ha’sayeret Ha’tzfonit organization written with react native.",
      ],
    },
    {
      title: "IC-Cam",
      bulletPoints: [
        " child safety alert system using computer vision to locate if a child is alone near a home pool, written in python for the detection and react native for the app",
      ],
    },
  ];
  return (
    <CarouselCard
      title="Projects"
      info={info.map((item) => (
        <SubSection title={item.title} bulletPoints={item.bulletPoints} />
      ))}
    />
  );
};
