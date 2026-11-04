import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

  // Wejście treści po załadowaniu (klasa uruchamia animacje w CSS)
  useEffect(() => {
    const timer = setTimeout(
      () => homeRef.current?.classList.add("loaded"),
      150,
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home" ref={homeRef}>
      <img src={backgroundImage} className="home-background" alt="" />
      <div className="home-overlay" />

      <div className="home-content">
        <img src={goldLogo} className="home-logo" alt="Bunny Art" />
        <p className="home-services">
          Manicure <span>·</span> Makijaż <span>·</span> Rzęsy i brwi{" "}
          <span>·</span> Opalanie natryskowe
        </p>
        <div className="home-buttons">
          <Link to="/contact" className="home-button">
            Umów wizytę
          </Link>
          <Link to="/pricelist" className="home-button home-button--ghost">
            Zobacz cennik
          </Link>
        </div>
      </div>

      <button
        className="home-scroll"
        onClick={handleScrollToAbout}
        aria-label="Przewiń do sekcji O mnie"
      >
        <span>Poznaj mnie</span>
        <i />
      </button>
    </div>
  );
};
