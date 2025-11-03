import { useEffect, useState } from "react";
import idan from "./assets/idan-png.png";
import "./App.css";
import { Carousel } from "./components/Carousel/Carousel";
import { NavMenu } from "./components/navigation/NavMenu";
import { useSelector } from "react-redux";
import Github from "./assets/github-icon.svg";
import Linkedin from "./assets/linkedin-icon.svg";

function App() {
  const [spacing, setSpacing] = useState("23vw");

  const { cards } = useSelector((state) => state.carousel);

  useEffect(() => {
    console.log(window.innerWidth);
    window.innerWidth > 760 ? setSpacing("23vw") : setSpacing("80vw");
  }, [window]);

  return (
    <div className="main-container">
      <div className="icon-container">
        <img
          src={Github}
          id="github-icon"
          onClick={() => window.open("https://github.com/idankid")}></img>
        <img
          src={Linkedin}
          id="linkedin-icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/idan-kideckel-0b2890244/")
          }></img>
      </div>
      <div className="main-title">Welcome to Idan Kideckel's Resume Site</div>
      <NavMenu />
      <Carousel
        spacing={spacing}
        items={cards.map((item, ind) => (
          <item.value key={`main-card-${ind}`} />
        ))}
      />
      <img className="main-image" src={idan} />
    </div>
  );
}

export default App;
