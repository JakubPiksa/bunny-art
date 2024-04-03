import { FC } from "react";
import "./header.scss";
import logoImage from "../../../assets/Znak_wodny_black.png";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../../components/MobileMenu/mobilemenu";
import { useMediaQuery } from "@react-hook/media-query";

export const Header: FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="header">
      <div className="header-content">
        <NavLink to={"/home"} className="logo">
          <img src={logoImage} alt="Logo" />
        </NavLink>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <nav className="nav">
            <NavLink to={"/home"}>O nas</NavLink>
            <NavLink to={"/gallery"}>Galeria</NavLink>
            {/* <NavLink to={"/services"}>Usługi</NavLink> */}
            <NavLink to={"/pricelist"}>Cennik</NavLink>
            <NavLink to={"/contact"}>Kontakt</NavLink>
          </nav>
        )}
      </div>
    </div>
  );
};
