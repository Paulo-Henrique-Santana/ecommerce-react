import { Link } from "react-router-dom";
import FavoriteSVG from "../Svg/FavoriteSVG";
import styled from "styled-components";
import CartSVG from "../Svg/CartSVG";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
  padding: 20px 50px;
  background-color: #f7f7f7;
  width: 100%;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 25px;
  }
`;

export const Title = styled.h1`
  padding: 5px 10px;
  color: var(--color2);
  white-space: nowrap;
  font-style: italic;
`;

export const Search = styled.input`
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 0 10px;
  width: 100%;
  max-width: 700px;
  height: 35px;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
  :focus {
    border-color: black;
  }
`;

export const Links = styled.nav`
  font-weight: bold;
  @media (max-width: 768px) {
    justify-self: end;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--color2);
`;

export const Favorites = styled(FavoriteSVG)`
  width: 35px;
  height: 35px;
  path {
    fill: var(--color2);
  }
`;

export const Cart = styled(CartSVG)`
  width: 35px;
  height: 35px;
  circle {
    fill: var(--color2);
  }
  path {
    stroke: var(--color2);
  }
`;
