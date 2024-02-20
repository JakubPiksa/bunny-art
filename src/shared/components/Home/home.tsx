import { FC, useEffect, useRef } from "react";
import "./home.scss";
import backgroundImage from "../../../assets/Tlo.png";
import goldLogo from "../../../assets/Znak_wodny_color.png";

export const Home: FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current.classList.add("loaded");
    }
  }, []);

  return (
    <div className="home" ref={homeRef}>
      <img src={backgroundImage} className="home-background"></img>
      <div className="home-content">
        <img src={goldLogo} className="home-logo"></img>
        <button>O nas</button>
      </div>
    </div>
  );
};
