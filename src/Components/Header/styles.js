import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
  padding: 25px 50px;
  background-color: #f7f7f7;
  width: 100%;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Title = styled.h1`
  white-space: nowrap;
`;

export const Search = styled.input`
  border: 1px solid #6c757d;
  border-radius: 10px;
  padding: 0 10px;
  width: 100%;
  max-width: 700px;
  height: 35px;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

export const Links = styled.nav`
  @media (max-width: 768px) {
    justify-self: end;
  }
`;
