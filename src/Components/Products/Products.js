import React from "react";
import CardShoe from "../CardProduct/CardProduct";
import ProductsContainer from "./styles";

const Products = ({ shoes, selectedSizes, selectedGenders }) => {
  const [filtered, setFiltered] = React.useState(null);

  React.useEffect(() => {
    setFiltered(shoes);
    if (selectedSizes.length) {
      setFiltered((prev) =>
        prev.filter((shoe) =>
          shoe.tamanhos.some((n) => selectedSizes.includes(n))
        )
      );
    }
    if (selectedGenders.length) {
      setFiltered((prev) =>
        prev.filter((shoe) => selectedGenders.includes(shoe.genero))
      );
    }
  }, [shoes, selectedSizes, selectedGenders]);

  return (
    <ProductsContainer>
      {filtered &&
        filtered.map((shoe) => <CardShoe key={shoe.id} shoe={shoe} />)}
    </ProductsContainer>
  );
};

export default Products;
