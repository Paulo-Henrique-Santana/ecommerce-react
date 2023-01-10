import styled from "styled-components";

export const H1 = styled.h1`
  margin-bottom: 50px;
  text-align: center;
`;

export const Favorites = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 25px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const Msg = styled.p`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
`;
