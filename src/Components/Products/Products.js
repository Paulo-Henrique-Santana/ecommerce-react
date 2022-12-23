import React from "react";
import CardShoe from "../CardProduct/CardProduct";
import Section from "./styles";

const Products = () => {
  const [shoes, setShoes] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setShoes(json);
    };
    fetchData("./products.json");
  }, []);

  return (
    <Section>
      {shoes && shoes.map((data) => <CardShoe key={data.id} data={data} />)}
    </Section>
  );
};

export default Products;
