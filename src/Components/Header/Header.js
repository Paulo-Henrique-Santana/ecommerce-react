import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Header = () => {
  return (
    <S.StyledHeader>
      <Link to="/">
        <S.Title>ReactShoes</S.Title>
      </Link>
      <S.Search placeholder="O que você está procurando?" type="text" />
      <S.Links>
        <S.StyledLink to="/favorites">
          <S.Favorites />
          <span>Favoritos</span>
        </S.StyledLink>
        <S.StyledLink to="/cart">
          <S.Cart />
          <span>Carrinho</span>
        </S.StyledLink>
      </S.Links>
    </S.StyledHeader>
  );
};

export default Header;
