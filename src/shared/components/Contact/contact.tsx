import { FC, useEffect } from "react";
import "./contact.scss";
import background from "../../../assets/Tlo.png";
import { Helmet } from "react-helmet-async";

export const Contact: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bunny Art - Skontaktuj się z nami!</title>
        <meta
          name="description"
          content="Kontakt do Bunny Art - Skontaktuj się z nami aby zapisać się na wizytę"
        />
        <meta
          name="og:description"
          content="Cennik Bunny Art - Skontaktuj się z nami aby zapisać się na wizytę"
        />
        <meta name="og:title" content="Bunny Art - Skontaktuj się z nami! " />
        <link rel="canonical" href="https://www.bunnyart.pl/contact" />
      </Helmet>
      <div className="contactS">
        <div className="contactS-hero">
          <img src={background} alt="" className="contactS-hero-background" />
          <div className="contactS-hero-content">
            <h1 className="contactS-hero-title">Kontakt</h1>
            <p className="contactS-hero-lead">
              Manicure, makijaż i opalanie natryskowe z dojazdem do Ciebie
            </p>
          </div>
        </div>

        <div className="contactS-cards">
          <a href="tel:+48516419999" className="contactS-card">
            <span className="contactS-card-icon">
              <img src="../../icons/phone.svg" alt="" />
            </span>
            <span className="contactS-card-label">Telefon</span>
            <strong className="contactS-card-value">516 419 999</strong>
            <span className="contactS-card-hint">Kliknij, aby zadzwonić</span>
          </a>
          <a href="mailto:bunny.art.mk@gmail.com" className="contactS-card">
            <span className="contactS-card-icon">
              <img src="../../icons/envelope.svg" alt="" />
            </span>
            <span className="contactS-card-label">E-mail</span>
            <strong className="contactS-card-value">bunny.art.mk@gmail.com</strong>
            <span className="contactS-card-hint">Kliknij, aby napisać</span>
          </a>
        </div>

        <section className="contactS-visit">
          <h2 className="contactS-visit-title">Umów wizytę u siebie</h2>
          <p className="contactS-visit-lead">
            Pracuję mobilnie, więc to ja przyjeżdżam do Ciebie. Zadzwoń lub
            napisz, a razem ustalimy dogodny termin i miejsce wizyty.
          </p>
          <ol className="contactS-steps">
            <li>
              <span>1</span>Zadzwoń lub napisz
            </li>
            <li>
              <span>2</span>Ustalamy termin i miejsce
            </li>
            <li>
              <span>3</span>Przyjeżdżam do Ciebie
            </li>
          </ol>
          <div className="contactS-visit-buttons">
            <a href="tel:+48516419999" className="contactS-button">
              Zadzwoń: 516 419 999
            </a>
            <a
              href="mailto:bunny.art.mk@gmail.com"
              className="contactS-button contactS-button--ghost"
            >
              Napisz e-mail
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
