import { FC } from "react";

import { Home } from "../../components/Home/home";
import { About } from "../../components/About/about";

export const HomeLayout: FC = () => {
  return (
    <>
      <Home />
      <About />
    </>
  );
};
