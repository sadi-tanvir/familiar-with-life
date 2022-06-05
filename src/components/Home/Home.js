import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import ReactHelmet from "../shared/Helmet/ReactHelmet";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      
      <ReactHelmet title="Home" />
    </>
  );
};

export default Home;
