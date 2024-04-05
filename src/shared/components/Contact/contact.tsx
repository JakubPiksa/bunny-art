import { FC } from "react";
import "./contact.scss";
import background from "../../../assets/Tlo.png";
import locationIcon from "../../../icons/location.svg";

export const Contact: FC = () => {
  return (
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
            <a href="https://maps.app.goo.gl/J5H1geusP41Pv5kU8" target="_blank">
              ul. Osińska 64/4 <br></br>44-240 Żory
            </a>
          </h2>
        </a>
      </div>
    </div>
  );
};
