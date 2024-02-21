import { FC } from "react";
import "./about.scss";
import { NavLink } from "react-router-dom";
import heartIcon from "../../../icons/heart.svg";
import backgroundImage from "../../../assets/Tlo.png";
import goldLogo from "../../../assets/Znak_wodny_white.png";

export const About: FC = () => {
  return (
    <div className="about-container">
      {/* description */}
      <div className="about-container__description" id="section-about">
        <strong> O Bunny Art</strong>
        <p>OPIS MARTY </p>
      </div>
      {/* gallery */}
      <div className="about-container__gallery">
        <strong> Galeria</strong>
        <button>
          <NavLink to={"/gallery"}>Galeria</NavLink>
        </button>
      </div>
      {/* info */}
      <div className="about-container__information">
        <img src={heartIcon} alt="heart-icon" />
        <p>
          Moja wiedza i doświadczenie pozostają do twojej dyspozycji. Zawszę
          pomogę i doradzę tak abyśmy osiągneli najpiękniejszy efekt
        </p>
      </div>
      {/* services */}
      <div className="about-container__services">
        <img
          src={backgroundImage}
          className="about-container__background"
        ></img>
        <p>Oferta</p>
        <img src={goldLogo} className="about-container__logo"></img>
        <button>
          <NavLink to={"/services"}>Oferowane Usługi</NavLink>
        </button>
      </div>
      {/* peices&contact */}
      <div className="about-container__section">
        <NavLink to={"/pricelist"}> Cennik</NavLink>
        <span className="line"></span>
        <NavLink to={"/contact"}>Kontact</NavLink>
      </div>
    </div>
  );
};
