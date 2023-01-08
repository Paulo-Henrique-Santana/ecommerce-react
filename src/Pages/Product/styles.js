import styled from "styled-components";
import { SizeList } from "../../Components/Filters/Sizes/styles";
import FavoriteSVG from "../../Components/SVG/FavoriteSVG";

export const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(450px, 700px) minmax(auto, 400px);
  gap: 50px;
  max-width: max-content;
  min-height: 700px;
  color: var(--color2);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BoxImage = styled.div`
  position: relative;
`;

export const Favorite = styled(FavoriteSVG)`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 17px;
  right: 18px;
  cursor: pointer;
  path {
    transition: fill 0.3s;
    fill-opacity: ${({ active }) => (active ? "1" : "0.4")};
    fill: ${({ active }) => (active ? "#ef233c" : "transparent")};
    stroke: ${({ active }) => (active ? "#ef233c" : "#000000")};
    stroke-width: 1.5;
  }
  @media (max-width: 425px) {
    height: 40px;
    width: 40px;
    top: 11px;
    right: 13px;
  }
  @media (pointer: fine) {
    &:hover path {
      fill: #ef233c;
    }
  }
`;

export const Infos = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Name = styled.h1`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Price = styled.p`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const Colors = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  width: max-content;
  li {
    max-width: 75px;
    background-color: #f6f6f6;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
    &.selected {
      border-color: black;
    }
  }
`;

export const Sizes = styled(SizeList)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  max-width: max-content;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  min-width: 250px;
  width: 100%;
  max-width: 350px;
  height: 50px;
  background-color: var(--color2);
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
