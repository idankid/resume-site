import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDirection, setNumber } from "../../redux/carousel.Slice";
import { RootState } from "../../redux/store";
import "./NavItem.css";

type NavItemProps = {
  title: string;
  index: number;
};

export const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { title, index } = props;
  const { number, cards } = useSelector((state: RootState) => state.carousel);
  const dispatch = useDispatch();

  // /**
  //  * finding the direction to turn the carousel
  //  * @param startIndex
  //  * @param targetIndex
  //  * @returns the direction
  //  */
  // function findShortestDirection(startIndex, targetIndex) {
  //   const length = cards.length;

  //   // Calculate the distance when moving right
  //   const distanceRight = (targetIndex - startIndex + length) % length;

  //   // Calculate the distance when moving left
  //   const distanceLeft = (startIndex - targetIndex + length) % length;

  //   // Determine the shorter distance
  //   if (distanceRight <= distanceLeft) {
  //     return -1; // Right direction
  //   } else {
  //     return 1; // Left direction
  //   }
  // }

  // going to the page
  const GoToTitle = () => {
    // dispatch(setDirection(findShortestDirection(number, index)));
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
