import React from "react";
import Filters from "../../Components/Filters/FiltersMenu/Filters";
import Products from "../../Components/Products/Products";
import { StyledHome } from "./styles";

const Home = () => {
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
    <StyledHome>
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
    </StyledHome>
  );
};

export default Home;
