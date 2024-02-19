import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import "./mobilemenu.scss";

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
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <nav className="nav">
            <NavLink to={"/home"}>O nas</NavLink>
            <NavLink to={"/home"}>Galeria</NavLink>
            <NavLink to={"/home"}>Usługi</NavLink>
            <NavLink to={"/home"}>Cennik</NavLink>
            <NavLink to={"/home"}>Kontakt</NavLink>
          </nav>
          <button className="close-button" onClick={handleMenuClose}>
            Close
          </button>
        </div>
      ) : null}
    </>
  );
};
