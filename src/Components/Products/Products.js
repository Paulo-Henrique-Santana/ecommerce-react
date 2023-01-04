import React from "react";
import CardShoe from "../CardProduct/CardProduct";
import { Msg, ProductsContainer } from "./styles";

const Products = ({
  shoes,
  selectedSizes,
  selectedPrices,
  selectedGenders,
}) => {
  const [filtered, setFiltered] = React.useState(null);
  const [numberShoes, setNumberShoes] = React.useState(6);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (filtered && numberShoes < filtered.length) {
        const height = document.body.offsetHeight - window.innerHeight;
        if (window.scrollY > height * 0.75 && !wait) {
          setNumberShoes(numberShoes + 6);
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
        prev.filter(({ cores }) =>
          cores.some(({ tamanhos }) =>
            tamanhos.some((n) => selectedSizes.includes(n))
          )
        )
      );
    if (selectedPrices.length)
      setFiltered((prev) =>
        prev.filter((shoe) =>
          selectedPrices.some((n) =>
            n === 1000
              ? shoe.preco >= 1000
              : shoe.preco >= n && shoe.preco < n + 100
          )
        )
      );
    if (selectedGenders.length)
      setFiltered((prev) =>
        prev.filter((shoe) => selectedGenders.includes(shoe.genero))
      );
  }, [shoes, selectedSizes, selectedPrices, selectedGenders]);

  return (
    <ProductsContainer>
      {filtered &&
        filtered
          .slice(0, numberShoes)
          .map((shoe) => <CardShoe key={shoe.id} shoe={shoe} />)}
      {shoes && (!filtered || !filtered.length) && (
        <Msg>Nenhum produto foi encontrado</Msg>
      )}
    </ProductsContainer>
  );
};

export default Products;
