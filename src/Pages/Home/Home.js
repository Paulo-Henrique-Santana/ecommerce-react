import React from "react";
import FiltersMenu from "../../Components/Filters/FiltersMenu/FiltersMenu";
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
      for (let i = json.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [json[i], json[j]] = [json[j], json[i]];
      }
      setShoes(json);
    };
    fetchShoes("./products.json");
  }, []);

  return (
    <StyledHome>
      {shoes && (
        <FiltersMenu
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
