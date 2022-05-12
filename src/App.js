import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
