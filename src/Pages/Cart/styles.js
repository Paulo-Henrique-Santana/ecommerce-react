import styled from "styled-components";
import MinusSVG from "../../Components/SVG/MinusSVG";
import PlusSVG from "../../Components/SVG/PlusSVG";

export const Main = styled.main`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ContainerProducts = styled.div`
  flex: 1;
`;

export const Titles = styled.div`
  display: flex;
  padding: 25px 0;
`;

export const TitleProduct = styled.p`
  width: 100%;
  max-width: 450px;
`;

export const TitleQuantity = styled.p`
  flex: 1;
  min-width: 100px;
  text-align: center;
`;

export const TitleTotal = styled.p`
  flex: 1;
  min-width: 100px;
  text-align: center;
`;

export const Products = styled.div``;

export const Product = styled.div`
  display: flex;
  border-top: 1px solid #7e8287;
  padding: 25px 0;
`;

export const ContainerDetails = styled.div`
  flex-grow: 2;
  display: flex;
  max-width: 450px;
`;

export const Details = styled.div`
  padding-top: 5px;
  padding-left: 20px;
`;

export const Name = styled.p`
  height: 60px;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Quantity = styled.p`
  flex: 1;
  min-width: 100px;
  text-align: center;
  font-size: 1.3rem;
`;

export const Minus = styled(MinusSVG)`
  width: 20px;
`;

export const Plus = styled(PlusSVG)`
  width: 20px;
`;

export const Total = styled.p`
  flex: 1;
  min-width: 100px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 200px;
  border-radius: var(--border-radius-img);
`;

export const Summary = styled.div``;
