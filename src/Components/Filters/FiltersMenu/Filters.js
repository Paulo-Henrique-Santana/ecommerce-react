import React from "react";
import Genders from "../Genders/Genders";
import Prices from "../Prices/Prices";
import Sizes from "../Sizes/Sizes";
import { StyledFilters } from "./styles";

const Filters = ({ shoes, setSelectedSizes, setSelectedGenders }) => {
  return (
    <StyledFilters>
      <Sizes shoes={shoes} setSelectedSizes={setSelectedSizes} />
      <Prices />
      <Genders shoes={shoes} setSelectedGenders={setSelectedGenders} />
    </StyledFilters>
  );
};

export default Filters;
