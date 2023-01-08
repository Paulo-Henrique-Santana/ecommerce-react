import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 25px;
  position: relative;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const Msg = styled.p`
  width: max-content;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;
