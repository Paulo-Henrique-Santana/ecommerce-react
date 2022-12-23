import React from "react";
import * as L from "./styles";

const CardProduct = ({ data }) => {
  return (
    <L.StyledCardProduct>
      <img src={data.imagens[0].url} alt="" />
      <L.Name>{data.nome}</L.Name>
      <p>{data.preco}</p>
    </L.StyledCardProduct>
  );
};

export default CardProduct;
