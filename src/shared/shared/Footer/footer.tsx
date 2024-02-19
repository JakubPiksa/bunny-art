import { FC } from "react";
import logoImage from "../../../assets/Znak_wodny_black.png";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import locationIcon from "../../../icons/location.svg";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <NavLink to={"/home"} className="footer-logo">
        <img src={logoImage} alt="Logo" />
      </NavLink>
      <div className="footer-content">
        <div className="contact">
          <a href="tel:+48508282405">
            508 282 405 <img src="../../icons/phone.svg" alt="phone" />
          </a>
          <a href="https://maps.app.goo.gl/UxuRVt75BcmVcosy8">
            ul. Osińska 64/4 <br></br>44-240 Żory
            <img src={locationIcon} alt="location" />
          </a>
        </div>
        <span className="line"></span>
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100067095032900">
            <img src="../../icons/facebook.svg" alt="fb"></img>
            Bunny Art
          </a>
          <a href="https://www.instagram.com/_bunny_art_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src="../../icons/instagram.svg" alt="ig"></img>
            @_bunny_art_studio
          </a>
          <a href="mailto:bunny.art.mk@gmail.com">
            <img src="../../icons/envelope.svg" alt="email" />
            bunny.art.mk@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
