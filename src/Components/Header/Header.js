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
        <Title>E-Shoes</Title>
      </Link>
      <Search placeholder="O que você está procurando?" type="text" />
      <Links>
        <StyledLink to="/favorites">
          <Favorites /> <span>Favoritos</span>
        </StyledLink>
        <button>Carrinho</button>
      </Links>
    </StyledHeader>
  );
};

export default Header;
