import React from "react";
import FiltersMenu from "../../Components/Filters/FiltersMenu/FiltersMenu";
import Products from "../../Components/Products/Products";
import { ShoesContext } from "../../ShoesContext";
import { StyledHome } from "./styles";

const Home = () => {
  const { shoes } = React.useContext(ShoesContext);
  const [shuffledShoes, setShuffledShoes] = React.useState(null);
  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [selectedGenders, setSelectedGenders] = React.useState([]);
  const [selectedPrices, setSelectedPrices] = React.useState([]);

  React.useEffect(() => {
    if (shoes) {
      let shuffled = [...shoes];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledShoes(shuffled);
    }
  }, [shoes]);

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
        shoes={shuffledShoes}
        selectedSizes={selectedSizes}
        selectedGenders={selectedGenders}
        selectedPrices={selectedPrices}
      />
    </StyledHome>
  );
};

export default Home;
