import React from "react";
import * as L from "./styles";

const CardProduct = ({ shoe }) => {
  return (
    <L.StyledCardProduct>
      <img src={shoe.imagens[0].url} alt="" />
      <L.Name>{shoe.nome}</L.Name>
      <p>{shoe.preco}</p>
    </L.StyledCardProduct>
  );
};

export default CardProduct;
