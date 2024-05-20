import { FC } from "react";

import { Home } from "../../components/Home/home";
import { About } from "../../components/About/about";
import { Helmet } from "react-helmet-async";

export const HomeLayout: FC = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.bunnyart.pl/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bunny Art - Salon kosmetyczny oferujący usługi z zakresu manicure, opalania natryskowego, stylizacji rzęs, make-up. Umów się na wizytę już dziś!"
          data-rh="true"
        />
        <meta
          name="keywords"
          content="salon kosmetyczny, manicure, stylizacja rzęs, makijaż, stylizacja brwi, żory, Bunny Art, paznokcie, hybrydy, paznokcie żelowe, przedłużanie paznokci, make up"
        />
        <meta name="author" content="O&K softDev Jakub Piksa" />
        <meta property="og:title" content="Bunny Art" />
        <meta
          property="og:description"
          content="Bunny Art - Salon kosmetyczny oferujący usługi z zakresu manicure, opalania natryskowego, stylizacji rzęs, makijażu. Zapoznaj się z naszą ofertą i umów się na wizytę już dziś!"
        />
        <meta property="og:image" content="./src/assets/Social Media.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bunnyart.pl/" />
        <meta
          name="google-site-verification"
          content="vHTW1EndBhk0sg3BfWmUU82nZKVG40jIqAgYFgApTTA"
        />
        <title>Bunny Art - salon kosmetyczny w Żorach</title>
      </Helmet>
      <Home />
      <About />
    </>
  );
};
