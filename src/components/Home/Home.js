import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner";
import Blogs from "../Blog/Blogs";
import ReactHelmet from "../shared/Helmet/ReactHelmet";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Blogs />
      
      <ReactHelmet title="Home" />
    </>
  );
};

export default Home;
