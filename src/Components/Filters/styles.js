import styled from "styled-components";

export const StyledFilters = styled.div`
  justify-self: center;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 15px;
  }
  ul {
    margin-bottom: 30px;
  }
  ul li {
    cursor: pointer;
  }
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
  ul li.selected {
    border-color: blue;
  }
`;

export const Prices = styled.div`
  ul li {
    margin-bottom: 10px;
  }
`;
