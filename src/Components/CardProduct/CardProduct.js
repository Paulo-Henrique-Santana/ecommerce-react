import React from "react";
import { Link } from "react-router-dom";
import { Favorite, Name, Product } from "./styles";

const CardProduct = ({
  dataId,
  shoe,
  favorite,
  addFavorite,
  removeFavorite,
}) => {
  const handleClickFavorite = () => {
    if (favorite) removeFavorite(dataId);
    else addFavorite(dataId);
  };

  return (
    <Product>
      <Favorite onClick={handleClickFavorite} active={favorite} />
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
