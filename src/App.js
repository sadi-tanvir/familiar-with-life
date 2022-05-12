import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/404/Error404";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/Login-User/Login/Login";
import Register from "./components/Login-User/Register/Register";
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:appointId" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
