import React from "react";
import { Link } from "react-router-dom";
import {
  Favorites,
  Links,
  Search,
  StyledHeader,
  StyledLink,
  Title,
} from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Title>ReactShoes</Title>
      </Link>
      <Search placeholder="O que você está procurando?" type="text" />
      <Links>
        <StyledLink to="/favorites">
          <Favorites /> <span>Favoritos</span>
        </StyledLink>
        <StyledLink to="/cart">
          <span>Carrinho</span>
        </StyledLink>
      </Links>
    </StyledHeader>
  );
};

export default Header;
