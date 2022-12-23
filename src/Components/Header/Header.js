import React from "react";
import StyledHeader from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1>E-Shoes</h1>
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
