import styled from "styled-components";
import FavoriteSVG from "../Svg/FavoriteSVG";

export const Product = styled.div`
  border-radius: var(--border-radius-img);
  height: max-content;
  position: relative;
  user-select: none;
  box-shadow: var(--box-shadow1);
  text-align: center;
  animation: show 0.5s;
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
