// src/App.jsx

import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import SiteBackground from "./components/SiteBackground";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FloatingButtons from "./components/FloatingButtons";
import OfferPopup from "./components/OfferPopup";


export default function App() {
  return (
    <>
      {/* FIXED IMAGE FOR ENTIRE WEBSITE */}
      <SiteBackground />

      {/* HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      <div className="site-page-content">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/offers"
            element={<OffersPage />}
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
      <FloatingButtons />
      <OfferPopup/>
    </>
  );
}