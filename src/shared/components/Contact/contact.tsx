import { FC, useEffect } from "react";
import "./contact.scss";
import background from "../../../assets/Tlo.png";
import locationIcon from "../../../icons/location.svg";
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
      </Helmet>
      <div className="contactS">
        <div className="contactS-heading">
          <h1 className="contactS-heading-title">Skontaktuj się z nami</h1>
          <img
            src={background}
            alt="Background"
            className="contactS-heading-background"
          />
        </div>
        <div className="contactS-info">
          <a
            href="tel:+48508282405"
            target="_blank"
            className="contactS-info-container"
          >
            <p className="contactS-info-label">
              <img src="../../icons/phone.svg" alt="phone" />
            </p>
            <h2 className="contactS-info-detail">
              <a href="tel:+48508282405" target="_blank">
                508 282 405
              </a>
            </h2>
          </a>
          <a
            href="mailto:bunny.art.mk@gmail.com"
            target="_blank"
            className="contactS-info-container"
          >
            <p className="contactS-info-label">
              <img src="../../icons/envelope.svg" alt="email" />
            </p>
            <h2 className="contactS-info-detail">
              <a href="mailto:bunny.art.mk@gmail.com" target="_blank">
                bunny.art.mk@gmail.com
              </a>{" "}
            </h2>
          </a>
          <a
            href="https://maps.app.goo.gl/J5H1geusP41Pv5kU8"
            target="_blank"
            className="contactS-info-container"
          >
            <p className="contactS-info-label">
              <img src={locationIcon} alt="location" />
            </p>
            <h2 className="contactS-info-detail">
              <a
                href="https://maps.app.goo.gl/J5H1geusP41Pv5kU8"
                target="_blank"
              >
                ul. Osińska 64/4 <br></br>44-240 Żory
              </a>
            </h2>
          </a>
        </div>
        <div className="contactS-map">
          <h2>Znajdziesz nas tutaj!</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2562.8763363336375!2d18.693963999999998!3d50.032413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDAxJzU2LjciTiAxOMKwNDEnMzguMyJF!5e0!3m2!1spl!2spl!4v1712322238874!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: "1px solid #86868620" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
