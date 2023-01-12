import styled from "styled-components";
import Quantity from "../Quantity/Quantity";

export const ProductsContainer = styled.div`
  flex: 1;
  padding-top: 20px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Titles = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 550px) 1fr 1fr;
  margin-bottom: 25px;
  font-size: 1rem;
  font-weight: bold;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const TitleProduct = styled.p`
  width: 100%;
  max-width: 550px;
`;

export const TitleQuantity = styled.p`
  flex: 1;
  min-width: 120px;
  text-align: center;
`;

export const TitleTotal = styled.p`
  min-width: 120px;
  text-align: center;
`;

export const Products = styled.div``;

export const Product = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 550px) 1fr 1fr;
  border-top: 1px solid var(--color3);
  padding: 25px 0;
`;

export const ContainerDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 550px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 5px 15px;
`;

export const Image = styled.img`
  min-width: 100px;
  width: 100%;
  max-width: 200px;
  border-radius: var(--border-radius-img);
  @media (max-width: 425px) {
    align-self: center;
  }
`;

export const Name = styled.p`
  min-width: 130px;
  height: 70px;
  font-size: 1.1rem;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const Size = styled.p`
  margin-bottom: 7px;
  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

export const TotalMobile = styled.p`
  display: none;
  @media (max-width: 650px) {
    display: block;
    margin-bottom: 7px;
  }
  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
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
  min-width: 120px;
  height: max-content;
  @media (max-width: 650px) {
    height: initial;
    align-items: center;
    min-width: initial;
  }
`;

export const StyledQuantity = styled(Quantity)`
  flex: 0;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  input {
    margin: 0 5px;
    outline: 1px solid transparent;
    border: 1px solid var(--color2);
    border-radius: 3px;
    height: 25px;
    width: 35px;
    font-size: 0.95rem;
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
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const Total = styled.p`
  min-width: 120px;
  font-size: 1rem;
  text-align: center;
  @media (max-width: 650px) {
    display: none;
  }
`;
