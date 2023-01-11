import styled from "styled-components";
import Quantity from "./Quantity/Quantity";

export const Main = styled.main`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ProductsContainer = styled.div`
  flex: 1;
`;

export const H1 = styled.h1`
  margin-bottom: 50px;
`;

export const Titles = styled.div`
  display: flex;
  margin-bottom: 25px;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const TitleProduct = styled.p`
  width: 100%;
  max-width: 450px;
`;

export const TitleQuantity = styled.p`
  flex: 1;
  min-width: 125px;
  text-align: center;
`;

export const TitleTotal = styled.p`
  min-width: 125px;
  text-align: center;
`;

export const Products = styled.div``;

export const Product = styled.div`
  display: flex;
  border-top: 1px solid var(--color3);
  padding: 25px 0;
`;

export const ContainerDetails = styled.div`
  flex-grow: 2;
  display: flex;
  max-width: 450px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 5px 20px;
`;

export const Name = styled.p`
  height: 70px;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Remove = styled.p`
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  color: var(--color3);
`;

export const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 125px;
  height: max-content;
  font-size: 1.3rem;
`;

export const StyledQuantity = styled(Quantity)`
  flex: 0;
  display: flex;
  align-items: center;
  input {
    margin: 0 5px;
    outline: 1px solid transparent;
    border: 1px solid var(--color2);
    border-radius: 3px;
    height: 25px;
    width: 35px;
    font-size: 1rem;
    text-align: center;
    &:focus {
      outline-color: var(--color2);
    }
  }
  button {
    border: none;
    border-radius: 1px;
    width: 20px;
    height: 20px;
    background-color: transparent;
  }
`;

export const Total = styled.p`
  min-width: 125px;
  font-weight: bold;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 200px;
  border-radius: var(--border-radius-img);
`;

export const Summary = styled.div``;
