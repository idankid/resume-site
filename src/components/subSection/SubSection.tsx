import React from "react";
import "./SubSection.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const SubSection: React.FC = () => {
  const { number } = useSelector((state: RootState) => state.carousel);
  return (
    <div className="subsection-container">
      <div className="subsection-title">title</div>
      <div className="subsection-info">info</div>
      <div className="subsection-info">{number}</div>
    </div>
  );
};
