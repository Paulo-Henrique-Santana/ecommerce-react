import React from "react";
import CardShoe from "../CardProduct/CardProduct";
import ProductsContainer from "./styles";

const Products = ({ sizes, genders }) => {
  const [shoes, setShoes] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      let json = await response.json();

      if (sizes.length) {
        json = json.filter((shoe) =>
          shoe.tamanhos.some((n) => sizes.includes(n))
        );
      }
      if (genders.length) {
        json = json.filter((shoe) => genders.includes(shoe.genero));
      }
      setShoes(json);
    };
    fetchData("./products.json");
  }, [sizes, genders]);

  return (
    <ProductsContainer>
      {shoes && shoes.map((shoe) => <CardShoe key={shoe.id} shoe={shoe} />)}
    </ProductsContainer>
  );
};

export default Products;
