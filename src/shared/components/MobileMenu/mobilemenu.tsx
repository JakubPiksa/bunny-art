import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import "./mobilemenu.scss";
import closeIcon from "../../../icons/close.svg";

export const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen ? (
        <button className="menu-button" onClick={handleMenuClick}>
          MENU
        </button>
      ) : null}

      {isOpen ? (
        <div className={`mobile-menu ${isOpen && "open"}`}>
          <button className="close-icon" onClick={handleMenuClose}>
            <img src={closeIcon} alt="close"></img>
          </button>
          <nav className="mobile-nav">
            <NavLink to={"/"} onClick={handleMenuClose}>
              O nas
            </NavLink>

            <NavLink to={"/gallery"} onClick={handleMenuClose}>
              Galeria
            </NavLink>

            

            <NavLink to={"/pricelist"} onClick={handleMenuClose}>
              Cennik
            </NavLink>

            <NavLink to={"/contact"} onClick={handleMenuClose}>
              Kontakt
            </NavLink>
          </nav>
          <button className="close-button" onClick={handleMenuClose}>
            Zamknij
          </button>
        </div>
      ) : null}
    </>
  );
};
