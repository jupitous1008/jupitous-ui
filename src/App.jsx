import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import Distributors from "./components/Distributors";
import "./App.scss";
import ContactPage from "./components/ContactPage";
import BatteryProducts from "./components/BatteryProducts";
import InverterProducts from "./components/InverterProducts";
import SolarPanelProducts from "./components/SolarPanelProducts";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

const AppLayout = () => (
  <>
    <Header />
    <ScrollToTop />
    <Outlet />
    <Footer />
  </>
);

function App() {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
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
            path="/batteries"
            element={<BatteryProducts />}
          />
          <Route
            path="/inverters"
            element={<InverterProducts />}
          />

          <Route
            path="/solars"
            element={<SolarPanelProducts />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;