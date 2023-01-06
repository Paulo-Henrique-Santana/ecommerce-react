import styled, { createGlobalStyle } from "styled-components";

export const FiltersStyle = createGlobalStyle`

`;

export const H2 = styled.h2`
  margin-bottom: 15px;
  color: var(--color1);
`;

export const Ul = styled.ul`
  margin-bottom: 30px;
  li {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 7px;
    width: max-content;
    cursor: pointer;
  }
  li span {
    margin-top: 1px;
  }
`;
