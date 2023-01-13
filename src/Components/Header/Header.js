import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

const Header = () => {
  const [searchText, setSearchText] = React.useState("");
  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();
    if (searchText) navigate(`/?search=${searchText.toUpperCase()}`);
    else navigate("/");
  };

  return (
    <S.StyledHeader>
      <Link to="/">
        <S.Title>ReactShoes</S.Title>
      </Link>
      <S.SearchForm onSubmit={search}>
        <S.SearchInput
          placeholder="O que você está procurando?"
          type="text"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <S.SearchButton>
          <S.StyledSearchSVG />
        </S.SearchButton>
      </S.SearchForm>
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
