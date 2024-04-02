import { FC, useEffect } from "react";

import "./about.scss";
import { Link } from "react-router-dom";
import heartIcon from "../../../icons/heart.svg";
import { photoImages } from "../../../assets/gallery/gallery";

export const About: FC = () => {
  const getRandomPhotos = () => {
    const copyPhotoImages = [...photoImages];

    copyPhotoImages.sort(() => Math.random() - 0.5);

    return copyPhotoImages.slice(0, 21);
  };

  const randomPhotos = getRandomPhotos();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      {/* description */}
      <div className="about-container__description" id="section-about">
        <h1> O Bunny Art</h1>
        <p>
          Bunny Art jest profesjonalnym salonem kosmetycznym, który oferuje
          szeroki zakres usług z zakresu makijażu, stylizacji rzęs, manicure,
          opalania natryskowego oraz innych zabiegów pielęgnacyjnych. Nasze
          usługi są świadczone przez doświadczonych specjalistów, którzy dbają o
          każdy szczegół, aby zapewnić naszym klientom doskonałe rezultaty.
        </p>
      </div>
      {/* gallery */}

      <div className="about-container__gallery">
        <h2> Galeria</h2>
        <div className="about-container__gallery-background">
          {randomPhotos.map((photo, index) => (
            <div className="about-container__gallery-background-container">
              <img
                key={index}
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
          Moja wiedza i doświadczenie pozostają do twojej dyspozycji. Zawszę
          pomogę i doradzę tak abyśmy osiągneli najpiękniejszy efekt
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
