import styled from "styled-components";
import CartSVG from "../SVG/CartSVG";
import FavoriteSVG from "../SVG/FavoriteSVG";

export const Product = styled.div`
  border-radius: var(--border-radius-img);
  height: max-content;
  position: relative;
  user-select: none;
  box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 15%);
  &:hover svg {
    display: block;
  }
`;

export const Favorite = styled(FavoriteSVG)`
  display: ${({ active }) => (active ? "block" : "none")};
  height: 40px;
  width: 40px;
  position: absolute;
  top: 11px;
  right: 13px;
  cursor: pointer;
  path {
    transition: fill 0.3s;
    fill-opacity: ${({ active }) => (active ? "1" : "0.2")};
    fill: ${({ active }) => (active ? "#ef233c" : "transparent")};
    stroke: ${({ active }) => (active ? "#ef233c" : "#000000")};
    stroke-width: 1.5;
  }
  @media (pointer: fine) {
    &:hover path {
      fill: #ef233c;
    }
  }
  @media (pointer: coarse) {
    display: block;
  }
`;

export const Data = styled.div`
  padding: 15px 12px;
`;

export const Name = styled.p`
  height: 60px;
  font-size: 1.05rem;
  font-weight: bold;
`;

export const Cart = styled(CartSVG)`
  /* display: none; */
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 5px 0 5px 0;
  padding: 2px;
  background-color: var(--color2);
`;
