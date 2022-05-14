import React from "react";
import { Helmet } from "react-helmet-async";

const ReactHelmet = ({title}) => {
  return (
    <>
      <Helmet>
        <title>{title} - Familiar With Life</title>
      </Helmet>
    </>
  );
};

export default ReactHelmet;
