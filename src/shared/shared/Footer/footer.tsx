import { FC } from "react";
import logoImage from "../../../assets/Znak_wodny_black.png";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import locationIcon from "../../../icons/location.svg";

export const Footer: FC = () => {
  return (
    <>
      <div className="footer">
        <NavLink to={"/"} className="footer-logo">
          <img src={logoImage} alt="Logo" />
        </NavLink>
        <div className="footer-content">
          <div className="contact">
            <a href="tel:+48508282405" target="_blank">
              508 282 405 <img src="../../icons/phone.svg" alt="phone" />
            </a>
            <a href="https://maps.app.goo.gl/J5H1geusP41Pv5kU8" target="_blank">
              ul. Osińska 64/4 <br></br>44-240 Żory
              <img src={locationIcon} alt="location" />
            </a>
          </div>
          <span className="line"></span>
          <div className="socials">
            <a
              href="https://www.facebook.com/profile.php?id=100067095032900"
              target="_blank"
            >
              <img src="../../icons/facebook.svg" alt="fb"></img>
              Bunny Art
            </a>
            <a
              href="https://www.instagram.com/_bunny_art_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <img src="../../icons/instagram.svg" alt="ig"></img>
              @_bunny_art_studio
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
      <p>&copy; 2024 Bunny Art. Strona wykonana przez 
        
        {" "}
          <a href="https://www.oandksoftdev.pl" target="_blank">
            O&K softDev
          </a>.
        </p>
      </div>
    </>
  );
};
