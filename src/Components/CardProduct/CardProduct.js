import React from "react";
import { Link } from "react-router-dom";
import { Data, Favorite, Name, Product, Cart } from "./styles";

const CardProduct = ({ dataId, shoe, favorite, toggleFavorite }) => {
  return (
    <Product>
      <Favorite onClick={() => toggleFavorite(dataId)} active={favorite} />
      <Link to={`/product?id=${shoe.id}`}>
        <img src={shoe.colors[0].url} alt={shoe.name} />
        <Data>
          <Name>{shoe.name}</Name>
          <p>
            {shoe.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Data>
        <Cart />
      </Link>
    </Product>
  );
};

export default CardProduct;
