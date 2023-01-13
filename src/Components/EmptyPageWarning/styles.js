import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 1.5rem;
    font-weight: normal;
    text-align: center;
  }
  svg {
    margin: 0 auto;
    width: 125px;
    height: 125px;
  }
  svg path {
    stroke: var(--color2);
  }
  svg circle {
    fill: var(--color2);
  }
`;
