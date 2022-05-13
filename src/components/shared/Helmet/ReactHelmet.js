import React from "react";
import { Helmet } from "react-helmet-async";

const ReactHelmet = ({page}) => {
  return (
    <>
      <Helmet>
        <title>{page} - Familiar With Life</title>
      </Helmet>
    </>
  );
};

export default ReactHelmet;
