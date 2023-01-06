import styled from "styled-components";
import { SizeList } from "../../Components/Filters/Sizes/styles";
import FavoriteSVG from "../../Components/SVG/FavoriteSVG";

export const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(450px, 700px) minmax(auto, 400px);
  gap: 50px;
  max-width: max-content;
  min-height: 700px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BoxImage = styled.div`
  position: relative;
`;

export const Favorite = styled(FavoriteSVG)`
  height: 60px;
  width: 60px;
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

export const DivImages = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  width: max-content;
  div {
    max-width: 75px;
    background-color: #f6f6f6;
    cursor: pointer;
  }
  img {
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
  border-radius: 4px;
  min-width: 250px;
  width: 100%;
  max-width: 300px;
  height: 50px;
  cursor: pointer;
`;
