import styled, { createGlobalStyle } from "styled-components";

export const FiltersStyle = createGlobalStyle`
  ul li.selected {
    border: 1px solid blue;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 15px;
`;

export const Ul = styled.ul`
  margin-bottom: 30px;
  li {
    cursor: pointer;
    margin-bottom: 7px;
  }
`;
