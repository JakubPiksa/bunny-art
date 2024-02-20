import { FC, useEffect, useRef } from "react";
import "./home.scss";
import backgroundImage from "../../../assets/Tlo.png";
import goldLogo from "../../../assets/Znak_wodny_color.png";

export const Home: FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("section-about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current.classList.add("loaded");
    }
  }, []);

  return (
    <div className="home" ref={homeRef}>
      <img
        src={backgroundImage}
        className="home-background"
        alt="background"
      ></img>
      <div className="home-content">
        <img src={goldLogo} className="home-logo" alt="logo"></img>
        <button className="home-button" onClick={handleScrollToAbout}>
          O nas
        </button>
      </div>
    </div>
  );
};
