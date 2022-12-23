import styled from "styled-components";

export const StyledFilters = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: center;
`;

export const Sizes = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
    width: 40px;
    height: 40px;
  }
`;
