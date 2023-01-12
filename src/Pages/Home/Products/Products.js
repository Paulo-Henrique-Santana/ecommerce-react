import React from "react";
import useFavoritesId from "../../../Hooks/useFavoritesId";
import CardProduct from "../../../Components/CardProduct/CardProduct";
import { ProductsContainer } from "./styles";
import EmptyPageWarning from "../../../Components/EmptyPageWarning/EmptyPageWarning";

const Products = ({
  shoes,
  selectedSizes,
  selectedPrices,
  selectedGenders,
}) => {
  const [filtered, setFiltered] = React.useState(null);
  const [numberShoes, setNumberShoes] = React.useState(9);
  const { favoritesId, toggleFavorite } = useFavoritesId();

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (filtered && numberShoes < filtered.length) {
        const height = document.body.offsetHeight - window.innerHeight;
        if (window.scrollY > height * 0.75 && !wait) {
          setNumberShoes(numberShoes + 9);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("click", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("click", infiniteScroll);
    };
  }, [numberShoes, filtered]);

  React.useEffect(() => {
    setFiltered(shoes);
    if (selectedSizes.length)
      setFiltered((prev) =>
        prev.filter(({ colors }) =>
          colors.some(({ sizes }) =>
            sizes.some((n) => selectedSizes.includes(n))
          )
        )
      );
    if (selectedPrices.length)
      setFiltered((prev) =>
        prev.filter((shoe) =>
          selectedPrices.some((n) =>
            n === 1000
              ? shoe.price >= 1000
              : shoe.price >= n && shoe.price < n + 100
          )
        )
      );
    if (selectedGenders.length)
      setFiltered((prev) =>
        prev.filter((shoe) => selectedGenders.includes(shoe.gender))
      );
  }, [shoes, selectedSizes, selectedPrices, selectedGenders]);

  if (filtered && filtered.length)
    return (
      <ProductsContainer>
        {filtered.slice(0, numberShoes).map((shoe) => (
          <CardProduct
            key={shoe.id}
            shoe={shoe}
            dataId={shoe.id}
            favorite={favoritesId.includes(shoe.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ProductsContainer>
    );

  return (
    <EmptyPageWarning>
      <h1>Nenhum produto foi encontrado :(</h1>
    </EmptyPageWarning>
  );
};

export default Products;
