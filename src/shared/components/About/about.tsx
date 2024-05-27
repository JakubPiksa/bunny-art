import { FC, useEffect, useRef, useState } from "react";

import "./about.scss";
import { Link } from "react-router-dom";
import heartIcon from "../../../icons/heart.svg";
import { photoImages } from "../../../assets/gallery/gallery";
import photo38 from "../../../assets/Bunny-gold.png";

export const About: FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const [photoVisible, setPhotoVisible] = useState(false);

  const getRandomPhotos = () => {
    const copyPhotoImages = [...photoImages];

    copyPhotoImages.sort(() => Math.random() - 0.5);

    return copyPhotoImages.slice(0, 18);
  };

  const randomPhotos = getRandomPhotos();

  const handleScroll = () => {
    if (homeRef.current) {
      const sectionAbout = document.getElementById("section-about");
      if (sectionAbout) {
        const sectionPosition = sectionAbout.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionPosition < screenHeight / 2) {
          homeRef.current.classList.add("visible");
          setPhotoVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container" ref={homeRef}>
      {/* description */}
      <div className="about-container__description" id="section-about">
        <h1> O Bunny Art</h1>{" "}
        <img
          src={photo38}
          alt="Krówki"
          className={`about-container__description-image ${photoVisible ? "visible" : ""}`}
        />
        <p>
          {" "}
          Witaj na stronie Bunny Art! Jestem Marta Króliczek, profesjonalistka w
          branży beauty od 2017 roku. Specjalizuję się w sztuce na paznokciach,
          makijażu oraz opalaniu natryskowym. Moje doświadczenie zdobyłam w
          Międzynarodowym Studium Dziewulskich w Warszawie oraz podczas praktyk
          w ATM Studio Warszawa, gdzie miałam okazję pracować m.in. przy
          programie "Twoja Twarz Brzmi Znajomo".
        </p>
        <p>
          Zapraszam Cię do odkrycia mojego portfolio, pełnego świeżości,
          pomysłowości i dbałości o detale. Razem możemy stworzyć coś
          wyjątkowego, podkreślającego Twoją naturalną urodę. Dołącz do naszej
          społeczności i razem twórzmy sztukę piękna!
        </p>
        {/* <img src={photo38} alt="Krówki" /> */}
      </div>
      {/* gallery */}

      <div className="about-container__gallery">
        <h2> Galeria</h2>
        <div className="about-container__gallery-background">
          {randomPhotos.map((photo, index) => (
            <div className="about-container__gallery-background-container">
              <img
                key={`Gallery item ${index + 1}`}
                src={photo}
                alt={`Gallery item ${index + 1}`}
                className="about-container__gallery-background-image"
              />
            </div>
          ))}
        </div>

        <Link to={"/gallery"}>
          <button>Galeria </button>
        </Link>
      </div>
      {/* info */}
      <div className="about-container__information">
        <img src={heartIcon} alt="heart-icon" />
        <p>
          Moja wiedza i doświadczenie pozostają do twojej dyspozycji. Zawsze
          pomogę <br /> i doradzę tak, abyśmy osiągnęli najpiękniejszy efekt
        </p>
      </div>

      {/* peices&contact */}
      <div className="about-container__section">
        <Link to={"/pricelist"} className="about-container__section-link">
          {" "}
          Cennik
        </Link>
        <span className="about-container_line"></span>
        <Link to={"/contact"} className="about-container__section-link">
          Kontact
        </Link>
      </div>
    </div>
  );
};
