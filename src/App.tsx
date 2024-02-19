import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./shared/shared/Footer/footer";
import { Header } from "./shared/shared/Header/header";
import { Main } from "./shared/components/Main/main";

import "./global-styles.scss";
import { SiteNotFound } from "./shared/components/SiteNotFound/sitenotfound";

function App() {
  return (
    <>
      <div className="app-container">
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
