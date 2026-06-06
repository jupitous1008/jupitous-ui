import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import Distributors from "./components/Distributors";
import "./App.scss";
import ContactPage from "./components/ContactPage";
import BatteryProducts from "./components/BatteryProducts";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* DISTRIBUTOR */}
        <Route
          path="/distributors"
          element={<Distributors />}
        />

         {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* AboutUs */}
        <Route
          path="/about-us"
          element={<AboutUs />}
        />

         <Route
    path="/battery"
    element={<BatteryProducts />}
  />

      </Routes>
      <Footer />
    </>
  );
}

export default App;