import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} || Bizmaster - Business Consulting React Js Template
      </title>
      <meta
        name="description"
        content="Bizmaster - Business Consulting React Js Template"
      />
    </Helmet>
  );
};

export default HelmetReact;
