import styled from "styled-components";

export const StyledFilters = styled.div`
  justify-self: center;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: none;
  }
`;
