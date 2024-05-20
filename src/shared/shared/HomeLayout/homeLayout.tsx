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

        <title>Bunny Art - salon kosmetyczny w Żorach</title>
      </Helmet>
      <Home />
      <About />
    </>
  );
};
