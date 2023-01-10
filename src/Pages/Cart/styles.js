import styled from "styled-components";

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

export const Titles = styled.div`
  display: flex;
  padding: 25px 0;
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
  flex: 1;
  min-width: 125px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  padding-left: 20px;
`;

export const Name = styled.p`
  height: 70px;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const QuantityContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 125px;
  font-size: 1.3rem;
`;

export const QuantityButton = styled.button`
  border: none;
  border-radius: 1px;
  width: 20px;
  height: 20px;
  background-color: transparent;
`;

export const Quantity = styled.input`
  border: 1px solid black;
  height: 20px;
  width: 35px;
  font-size: 1rem;
  text-align: center;
`;

export const Total = styled.p`
  flex: 1;
  min-width: 125px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 200px;
  border-radius: var(--border-radius-img);
`;

export const Summary = styled.div``;
