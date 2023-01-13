import React from "react";
import { Link } from "react-router-dom";
import { ShoesContext } from "../../ShoesContext";
import { Data, Favorite, Name, Product } from "./styles";

const CardProduct = ({ dataId, shoe, favorite, toggleFavorite }) => {
  const { toCurrencyBRL } = React.useContext(ShoesContext);
  return (
    <Product>
      <Favorite onClick={() => toggleFavorite(dataId)} active={favorite} />
      <Link to={`/product?id=${shoe.id}`}>
        <img src={shoe.colors[0].url} alt={shoe.name} />
        <Data>
          <Name>{shoe.name}</Name>
          <p>{toCurrencyBRL(shoe.price)}</p>
        </Data>
      </Link>
    </Product>
  );
};

export default CardProduct;
