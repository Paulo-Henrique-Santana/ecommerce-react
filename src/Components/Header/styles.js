import { Link } from "react-router-dom";
import FavoriteSVG from "../Svg/FavoriteSVG";
import styled from "styled-components";
import CartSVG from "../Svg/CartSVG";
import SearchSVG from "../Svg/SearchSVG";

export const StyledHeader = styled.header`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  padding: 25px 40px;
  width: 100%;
  background-color: var(--color2);
  box-shadow: 0px 1px 6px 0px rgb(0 0 0 / 15%);
  @media (max-width: 1440px) {
    padding: 20px 15px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 25px;
  }
`;

export const Title = styled.h1`
  color: var(--color1);
  white-space: nowrap;
  font-style: italic;
  @media (max-width: 320px) {
    font-size: 1.7rem;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 700px;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border-radius: 10px 0 0 10px;
  border: 1px solid transparent;
  border-right: none;
  padding: 0 10px;
  height: 35px;
  font-size: 0.9rem;
  :focus {
    border-color: black;
  }
  &:focus + button {
    border-color: black;
  }
`;

export const SearchButton = styled.button`
  border: 1px solid transparent;
  border-left: none;
  border-radius: 0 10px 10px 0;
  padding-right: 7px;
  background-color: white;
`;

export const StyledSearchSVG = styled(SearchSVG)`
  width: 20px;
`;

export const Links = styled.nav`
  display: flex;
  gap: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    gap: 10px;
    justify-self: end;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--color1);
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const Favorites = styled(FavoriteSVG)`
  width: 35px;
  height: 35px;
  path {
    fill: var(--color1);
  }
`;

export const Cart = styled(CartSVG)`
  width: 35px;
  height: 35px;
  circle {
    fill: var(--color1);
  }
  path {
    stroke: var(--color1);
  }
`;
