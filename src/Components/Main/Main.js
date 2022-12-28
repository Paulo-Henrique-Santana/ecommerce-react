import React from "react";
import Filters from "../Filters/FiltersMenu/Filters";
import Products from "../Products/Products";
import { StyledMain } from "./styles";

const Main = () => {
  const [shoes, setShoes] = React.useState(null);
  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [selectedGenders, setSelectedGenders] = React.useState([]);
  const [selectedPrices, setSelectedPrices] = React.useState([]);

  React.useEffect(() => {
    const fetchShoes = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setShoes(json);
    };
    fetchShoes("./products.json");
  }, []);

  return (
    <StyledMain>
      {shoes && (
        <Filters
          shoes={shoes}
          setSelectedSizes={setSelectedSizes}
          setSelectedGenders={setSelectedGenders}
          setSelectedPrices={setSelectedPrices}
        />
      )}
      <Products
        shoes={shoes}
        selectedSizes={selectedSizes}
        selectedGenders={selectedGenders}
        selectedPrices={selectedPrices}
      />
    </StyledMain>
  );
};

export default Main;
