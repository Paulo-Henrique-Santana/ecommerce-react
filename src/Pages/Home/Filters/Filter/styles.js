import styled from "styled-components";
import ArrowSVG from "../../../../Components/Svg/ArrowSVG";

export const StyledFilter = styled.li`
  margin-top: 25px;
  border-top: 1px solid #e5e5e5;
  padding-top: 15px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    font-size: 1.2rem;
    font-weight: normal;
  }
`;

export const StyledArrow = styled(ArrowSVG)`
  width: 15px;
  right: 5px;
  top: 5px;
  cursor: pointer;
  transform: ${({ active }) => active === "true" && "rotate(90deg)"};
  transition: transform 0.4s;
`;

export const OptionsBox = styled.div`
  display: ${({ active }) => (active === "true" ? "block" : "none")};
  animation: show 0.3s;
`;
