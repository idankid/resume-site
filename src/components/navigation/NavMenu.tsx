import React, { useState } from "react";
import { NavItem } from "./NavItem";
import "./NavMenu.css";

export const NavMenu: React.FC = () => {
  const titles = ["About", "Experience", "Languages"];
  return (
    <div className="nav-menu-container">
      {titles?.map((title, idx) => (
        <NavItem key={`nav-item-${idx}`} title={title} index={idx} />
      ))}
    </div>
  );
};
