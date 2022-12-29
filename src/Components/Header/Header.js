import React from "react";
import { Link } from "react-router-dom";
import StyledHeader from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>E-Shoes</h1>
      </Link>
      <input type="text" />
      <div>
        <button>Login</button>
        <button>Favoritos</button>
        <button>Carrinho</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
