import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 50px;
  width: 100%;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
