import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./shared/Footer/footer";
import { Header } from "./shared/Header/header";
import { Main } from "./shared/Main/main";

import "./global-styles.scss";
import { SiteNotFound } from "./shared/SiteNotFound/sitenotfound";

function App() {
  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Main />} />

            <Route path="*" element={<SiteNotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
