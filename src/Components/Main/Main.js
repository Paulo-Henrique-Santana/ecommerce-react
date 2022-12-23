import React from "react";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";
import * as L from "./styles";

const Main = () => {
  return (
    <L.StyledMain>
      <Filters />
      <Products />
    </L.StyledMain>
  );
};

export default Main;
