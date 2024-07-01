import React, { useState } from "react";
import { NavItem } from "./NavItem";
import "./NavMenu.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const NavMenu: React.FC = () => {
  const { cards } = useSelector((state: RootState) => state.carousel);
  const titles = cards.map((item) => item.title);
  return (
    <div className="nav-menu-container">
      {titles?.map((title, idx) => (
        <NavItem key={`nav-item-${idx}`} title={title} index={idx} />
      ))}
    </div>
  );
};
