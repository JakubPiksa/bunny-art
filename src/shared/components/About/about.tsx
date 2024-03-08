import { FC } from "react";

import "./about.scss";
import {Link } from "react-router-dom";
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
          <div></div>
          <strong> Galeria</strong>
          <button>
            <Link to={"/gallery"}>Galeria</Link>
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
          <Link to={"/services"}>Oferowane Usługi</Link>
        </button>
      </div>
      {/* peices&contact */}
      <div className="about-container__section">
        <Link to={"/pricelist"} className="about-container__section-link"> Cennik</Link>
        <span className="line"></span>
        <Link to={"/contact"} className="about-container__section-link">Kontact</Link>
      </div>
    </div>
  );
};
