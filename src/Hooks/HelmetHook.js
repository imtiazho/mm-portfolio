import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetHook = ({ pageName }) => {
  return (
    <div>
      <Helmet>
        <title>{pageName}</title>
      </Helmet>
    </div>
  );
};

export default HelmetHook;
