import React from "react";
import Genders from "../Genders/Genders";
import Prices from "../Prices/Prices";
import Sizes from "../Sizes/Sizes";
import { FiltersStyle } from "../styles";
import { StyledFilters } from "./styles";

const Filters = ({
  shoes,
  setSelectedSizes,
  setSelectedGenders,
  setSelectedPrices,
}) => {
  return (
    <StyledFilters>
      <FiltersStyle />
      <Sizes shoes={shoes} setSelectedSizes={setSelectedSizes} />
      <Prices setSelectedPrices={setSelectedPrices} />
      <Genders shoes={shoes} setSelectedGenders={setSelectedGenders} />
    </StyledFilters>
  );
};

export default Filters;
