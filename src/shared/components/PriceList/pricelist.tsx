import { FC, useEffect } from "react";

import "./pricelist.scss";
import { Helmet } from "react-helmet-async";

export const PriceList: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bunny Art - Cennik naszych usług</title>
        <meta
          name="description"
          content="Cennik Bunny Art - poznaj ceny naszych usług"
        />
        <meta
          name="og:description" 
          content="Cennik Bunny Art - poznaj ceny naszych usług"
        />
        <meta name="og:title" content="Bunny Art - Cennik naszych usług " />
        <link rel="canonical" href="https://www.bunnyart.pl/pricelist" />
      </Helmet>
      <div className="prices">
        <h1>Cennik</h1>
        <div className="prices-container">
          <div className="prices-container-element">
            <div className="prices-container-element-title">
              <span></span>
              <h2>Maincure</h2>
              <span></span>
            </div>
            <div className="prices-container-element-name">
              <p>Maincure hybrydowy</p> <p>90zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Korekta żelowa </p> <p>100 – 130zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Przedłużanie metodą żelową</p> <p>140 – 160zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Ściągnięcie stylizacji </p> <p>od 30zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Małe zdobienia </p> <p>10zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Duże zdobienia</p> <p>wycena indywidualna</p>
            </div>
            <div className="prices-container-element-name">
              <p>Parafina dłoni </p> <p>40zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Manicure standard męski</p> <p>50zł</p>
            </div>
          </div>

          <div className="prices-container-element">
            <div className="prices-container-element-title">
              <span></span>
              <h2>Opalanie natryskowe</h2>
              <span></span>
            </div>
            <div className="prices-container-element-name">
              <p>Standard (całe ciało) </p> <p>150zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Standard (połowa ciała) </p> <p>100zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Premium (całe ciało + peeling) </p> <p>180zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>
                Pro Dance{" "}
                <span className="prices-container-element-name-description">
                  (usługa skierowana do tancerzy na zawody taneczne)
                </span>
              </p>{" "}
              <p>200zł</p>
            </div>
          </div>

          <div className="prices-container-element">
            <div className="prices-container-element-title">
              <span></span>
              <h2>Stylizacja rzes </h2>
              <span></span>
            </div>
            <div className="prices-container-element-name">
              <p>Założenie / Uzupełnienie do 3 tyg Metoda 1:1</p>
              <p>150 zł / 100zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Ściągnięcie stylizacji</p> <p>60zł</p>
            </div>
            
            <div className="prices-container-element-name">
              <p>Laminacja rzęs (koloryzacja+botoks)</p> <p>170zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Koloryzacja rzęs </p> <p>20zł</p>
            </div>
          </div>

          <div className="prices-container-element">
            <div className="prices-container-element-title">
              <span></span>
              <h2>Make-up</h2>
              <span></span>
            </div>
            <div className="prices-container-element-name">
              <p>
                Makijaż dzienny{" "}
                <span className="prices-container-element-name-description">
                  (Delikatny makijaż w kolorach neutralnych, podkreślone rzęsy
                  bez kępek){" "}
                </span>
              </p>{" "}
              <p>150zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>
                Makijaż okolicznościowy{" "}
                <span className="prices-container-element-name-description">
                  (Kępki rzęs , rozświetlenie dekoltu, ewentualne ozdoby w
                  postaci kryształków, zestaw ratunkowy)
                </span>
              </p>{" "}
              <p>250zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Makijaż na sesje zdjęciową</p> <p>250zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>
                Makijaz biznesowy{" "}
                <span className="prices-container-element-name-description">
                  (Delikatny makijaz charakteryzujący się świeżością i
                  naturalnoscia)
                </span>
              </p>{" "}
              <p>250zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Makijaż ślubny+próbny</p> <p>500 zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Korekta Pana młodego </p> <p>50zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Charakteryzacja</p> <p>wycena indywidualna</p>
            </div>
          </div>
          <div className="prices-container-element">
            <div className="prices-container-element-title">
              <span></span>
              <h2>Stylizacja brwi </h2>
              <span></span>
            </div>
            <div className="prices-container-element-name">
              <p>Henna brwi </p> <p>40zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Regulacja brwi </p> <p>20zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Henna brwi z regulacją </p> <p>50zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Henna pudrowa z regulacją + geometria </p> <p>100zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Laminacja brwi z koloryzacją </p> <p>120zł</p>
            </div>
          </div>

          <div className="prices-container-element">
            <div className="prices-container-element-title">
              <span></span>
              <h2>Pakiety Slubne</h2>
              <span></span>
            </div>
            <div className="prices-container-element-name">
              <p>Pani młoda (+ makijaż próbny) korekta pana młodego + 2 os</p>{" "}
              <p>900zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Pani młoda (+ makijaż próbny) + 2os</p> <p>850zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>Pani młoda (+ makijaż próbny) + pan młody + 3 os</p>{" "}
              <p>1050zł</p>
            </div>
            <div className="prices-container-element-name">
              <p>
                Pogotowie ratunkowe{" "}
                <span className="prices-container-element-name-description">
                  (korekty makijażu podczas wesela)
                </span>{" "}
              </p>{" "}
              <p>wycena indywidualna</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
