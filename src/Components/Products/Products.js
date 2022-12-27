import React from "react";
import CardShoe from "../CardProduct/CardProduct";
import ProductsContainer from "./styles";

const Products = ({ sizes, genders }) => {
  const [shoes, setShoes] = React.useState(null);
  // const [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setShoes(json);
    };
    fetchData("./products.json");
  }, []);

  const filter = () => {
    let filtered;
    if (sizes.length) {
      filtered = shoes.map((shoe) => {
        if (shoe.tamanhos.some((n) => sizes.includes(n)))
          return <CardShoe key={shoe.id} shoe={shoe} />;
      });
    }
    if (genders.length > 0) {
    }
    if (filtered) return filtered;
    else return shoes.map((shoe) => <CardShoe key={shoe.id} shoe={shoe} />);
  };

  return <ProductsContainer>{shoes && filter()}</ProductsContainer>;
};

export default Products;
