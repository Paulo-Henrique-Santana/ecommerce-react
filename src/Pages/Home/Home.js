import React from "react";
import FiltersMenu from "./Filters/FiltersMenu/FiltersMenu";
import Products from "./Products/Products";
import { ShoesContext } from "../../ShoesContext";
import { StyledHome } from "./styles";
import Head from "../../Components/Head/Head";

const Home = () => {
  const shoes = React.useContext(ShoesContext);
  const [shuffledShoes, setShuffledShoes] = React.useState(null);
  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [selectedGenders, setSelectedGenders] = React.useState([]);
  const [selectedPrices, setSelectedPrices] = React.useState([]);

  React.useEffect(() => {
    if (shoes.data) {
      let shuffled = [...shoes.data];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledShoes(shuffled);
    }
  }, [shoes.data]);

  return (
    <StyledHome>
      <Head description="Melhores tênis para se exercitar ou utilizar no dia-a-dia" />
      {shoes.data && (
        <FiltersMenu
          shoes={shoes.data}
          setSelectedSizes={setSelectedSizes}
          setSelectedGenders={setSelectedGenders}
          setSelectedPrices={setSelectedPrices}
        />
      )}
      {shuffledShoes && (
        <Products
          shoes={shuffledShoes}
          selectedSizes={selectedSizes}
          selectedGenders={selectedGenders}
          selectedPrices={selectedPrices}
        />
      )}
    </StyledHome>
  );
};

export default Home;
