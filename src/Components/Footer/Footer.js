import React from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.StyledFooter>
      <S.P>
        Desenvolvido por{" "}
        <a
          href="https://github.com/Paulo-Henrique-Santana"
          target="_blank"
          rel="noreferrer"
        >
          Paulo Henrique
        </a>
      </S.P>
    </S.StyledFooter>
  );
};

export default Footer;
