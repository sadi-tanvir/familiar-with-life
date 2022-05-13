import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Blogs from "../Blog/Blogs";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Familiar With Life</title>
      </Helmet>
      <Banner />
      <Services />
      <Blogs />
    </>
  );
};

export default Home;
