import React from "react";
import * as S from "./styles";

const Filter = ({ children }) => {
  const [show, setShow] = React.useState(false);

  return (
    <S.StyledFilter>
      <S.TitleBox>
        {children[0]}
        <S.StyledArrow
          active={show.toString()}
          onClick={() => setShow(!show)}
        />
      </S.TitleBox>
      <S.OptionsBox active={show.toString()}>{children[1]}</S.OptionsBox>
    </S.StyledFilter>
  );
};

export default Filter;
