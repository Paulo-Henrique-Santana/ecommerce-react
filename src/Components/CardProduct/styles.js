import styled from "styled-components";
import FavoriteSVG from "../SVG/FavoriteSVG";

export const Product = styled.div`
  height: max-content;
  position: relative;
  user-select: none;
`;

export const Favorite = styled(FavoriteSVG)`
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
`;

export const Name = styled.p`
  margin: 15px 0;
  height: 40px;
`;
