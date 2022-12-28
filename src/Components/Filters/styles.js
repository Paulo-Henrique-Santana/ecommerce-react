import styled from "styled-components";

export const H2 = styled.h2`
  margin-bottom: 15px;
`;

export const Ul = styled.ul`
  margin-bottom: 30px;
  li {
    cursor: pointer;
    margin-bottom: 7px;
  }
  li.selected {
    border: 1px solid blue;
  }
`;
