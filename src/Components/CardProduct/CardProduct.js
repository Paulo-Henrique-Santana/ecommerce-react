import React from "react";
import { Link } from "react-router-dom";
import { Favorite, Name, Product } from "./styles";

const CardProduct = ({ dataId, shoe, favorite, toggleFavorite }) => {
  return (
    <Product>
      <Favorite onClick={() => toggleFavorite(dataId)} active={favorite} />
      <Link to={`/product/${shoe.id}`}>
        <img src={shoe.cores[0].url} alt={shoe.nome} />
        <Name>{shoe.nome}</Name>
        <p>
          {shoe.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </Link>
    </Product>
  );
};

export default CardProduct;
