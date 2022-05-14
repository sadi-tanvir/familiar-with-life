import React from "react";
import { Helmet } from "react-helmet-async";
import ReactHelmet from "../shared/Helmet/ReactHelmet";
import Service from "./Service";
import { serviceData } from "./serviceData";

const Services = () => {
  return (
    <>
      <ReactHelmet title="Services" />

      <div className="flex flex-col justify-center items-center px-2 my-20">
        <h1 className="text-5xl font-bold text-red-500 mb-5 ">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex flex-col justify-center items-center px-2">
          {serviceData.map((data) => (
            <Service key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
