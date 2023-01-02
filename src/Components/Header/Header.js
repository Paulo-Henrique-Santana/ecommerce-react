import React from "react";
import { Link } from "react-router-dom";
import { Links, Search, StyledHeader, Title } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Title>E-Shoes</Title>
      </Link>
      <Search placeholder="O que você está procurando?" type="text" />
      <Links>
        <button>Favoritos</button>
        <button>Carrinho</button>
      </Links>
    </StyledHeader>
  );
};

export default Header;
