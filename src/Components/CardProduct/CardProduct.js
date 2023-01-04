import React from "react";
import { Name, Product } from "./styles";

const CardProduct = ({ shoe }) => {
  return (
    <Product to={`product/${shoe.id}`}>
      <img src={shoe.imagens[0].url} alt="" />
      <Name>{shoe.nome}</Name>
      <p>
        {shoe.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </Product>
  );
};

export default CardProduct;
