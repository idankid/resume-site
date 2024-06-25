import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumber } from "../../redux/carousel.Slice";
import { RootState } from "../../redux/store";
import "./NavItem.css";

type NavItemProps = {
  title: string;
  index: number;
};

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { title, index } = props;
  const { number } = useSelector((state: RootState) => state.carousel);
  const dispatch = useDispatch();

  // going to the page
  const GoToTitle = () => {
    dispatch(setNumber(index));
  };

  const isActive = number === index;
  return (
    <div
      className={`nav-item-container ${isActive && "active-nav-item"}`}
      onClick={() => GoToTitle()}>
      <div className="nav-item-title">{title}</div>
    </div>
  );
};
