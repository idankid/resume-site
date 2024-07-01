import React from "react";
import "./SubSection.css";

export type SubSectionProps = {
  title: string;
  bulletPoints: string[];
};

export const SubSection: React.FC<SubSectionProps> = (
  props: SubSectionProps
) => {
  const { title, bulletPoints } = props;
  return (
    <div className="subsection-container">
      <div className="subsection-title">{title}</div>
      <div className="subsection-info">
        {bulletPoints?.map((point) => (
          <div className="bullet-point">
            {/* the dot for the bullet point */}
            <div className="dot-container">
              <div className="dot" />
            </div>

            {/* the info */}
            {point}
          </div>
        ))}
      </div>
    </div>
  );
};
