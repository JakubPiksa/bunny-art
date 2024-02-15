import { FC } from "react";
import logoImage from "../../assets/Znak_wodny_black.png";
import {
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  LocationIcon,
} from "../../icons/icons";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <NavLink to={"/home"} className="footer-logo">
        <img src={logoImage} alt="Logo" />
      </NavLink>
      <div className="footer-content">
        <div className="contact">
          <a href="tel:+48508282405">
            508 282 405 <img src={PhoneIcon} alt="phone" />
          </a>
          <a href="https://maps.app.goo.gl/UxuRVt75BcmVcosy8">
            ul. Osińska 64/4 44-240 Żory
            <img src={LocationIcon} alt="location" />
          </a>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100067095032900">
            FB <img src={FacebookIcon} alt="fb"></img>
          </a>
          <a href="https://www.instagram.com/_bunny_art_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            IG <img src={InstagramIcon} alt="ig"></img>
          </a>
          <a href="mailto:bunny.art.mk@gmail.com">
            bunny.art.mk@gmail.com <img src={EnvelopeIcon} alt="email" />
          </a>
        </div>
      </div>
      <p>Footer</p>
    </div>
  );
};
