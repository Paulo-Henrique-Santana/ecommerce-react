import styled from "styled-components";

export const StyledHome = styled.main`
  display: grid;
  grid-template-columns: max-content minmax(auto, 1500px);
  gap: 50px;
  margin: 0 15px;
  min-height: 700px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
