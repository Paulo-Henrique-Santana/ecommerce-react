import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 20px;
  min-height: 600px;
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
