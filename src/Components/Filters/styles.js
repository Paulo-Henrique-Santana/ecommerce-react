import styled, { createGlobalStyle } from "styled-components";

export const FiltersStyle = createGlobalStyle`

`;

export const H2 = styled.h2`
  margin-bottom: 15px;
`;

export const Ul = styled.ul`
  margin-bottom: 30px;
  li {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    margin-bottom: 7px;
  }
  li span {
    margin-top: 1px;
  }
`;
