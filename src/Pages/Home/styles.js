import styled from "styled-components";

export const StyledHome = styled.main`
  display: grid;
  grid-template-columns: minmax(160px, 200px) minmax(auto, 1500px);
  gap: 50px;
  min-height: 600px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 25px;
  }
`;
