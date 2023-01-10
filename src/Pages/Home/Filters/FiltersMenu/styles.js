import styled from "styled-components";

export const BtnFilters = styled.button`
  width: 95vw;
  display: flex;
  align-items: center;
  gap: 5px;
  height: max-content;
  background-color: transparent;
  span {
    font-size: 1.2rem;
  }
`;

export const ContainerFiltersMobile = styled.div`
  display: ${(props) => (props.filtersMobile ? "block" : "none")};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const FiltersMobile = styled.div`
  display: block;
  padding: 40px 25px 0 25px;
  max-width: 250px;
  height: 100%;
  background-color: #f7f7f7;
  position: relative;
`;

export const Filters = styled.div`
  height: max-content;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 15px;
  background-color: transparent;
  color: #202023;
  font-size: 1.6rem;
  font-family: monospace;
`;
