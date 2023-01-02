import React from "react";
import { Link } from "react-router-dom";
import { Name } from "./styles";

const CardProduct = ({ shoe }) => {
  return (
    <Link to={`product/${shoe.id}`}>
      <img src={shoe.imagens[0].url} alt="" />
      <Name>{shoe.nome}</Name>
      <p>
        {shoe.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </Link>
  );
};

export default CardProduct;
