import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./shared/shared/Footer/footer";
import { Header } from "./shared/shared/Header/header";
import { SiteNotFound } from "./shared/components/SiteNotFound/sitenotfound";
import { HomeLayout } from "./shared/shared/HomeLayout/homeLayout";
import { Gallery } from "./shared/components/Gallery/gallery";
import { PriceList } from "./shared/components/PriceList/pricelist";
import { Contact } from "./shared/components/Contact/contact";
import { Services } from "./shared/components/Services/services";

import "./global-styles2.scss";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/" element={<HomeLayout />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricelist" element={<PriceList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<SiteNotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
