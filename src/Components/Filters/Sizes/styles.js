import styled from "styled-components";

export const StyledSizes = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 30px;
  }
  ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;