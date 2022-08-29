import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import OfferPage from "../Pages/OfferPage/OfferPage";
import BookingPage from "../Pages/BookingPage/BookingPage";
import FormPage from "../Pages/FormPage/FormPage";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import NotFound from "../Pages/NotFound/NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/oferta" element={<OfferPage />} />
      <Route path="/rezerwacja" element={<BookingPage />} />
      <Route path="/rezerwacja/zgloszenie" element={<FormPage />} />
      <Route path="/galeria" element={<GalleryPage />} />
      <Route path="/o-nas" element={<AboutPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
