import React from "react";
import { Prices, Sizes, StyledFilters } from "./styles";

const Filters = ({ selectSize, selectGender }) => {
  const sizes = [
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
  ];
  const genders = ["Masculino", "Feminino", "Unissex"];

  return (
    <StyledFilters>
      <Sizes>
        <h2>Tamanho</h2>
        <ul>
          {sizes.map((size, index) => (
            <li key={index} onClick={selectSize}>
              {size}
            </li>
          ))}
        </ul>
      </Sizes>
      <Prices>
        <h2>Preço</h2>
        <ul>
          <li>Menos de R$ 500</li>
          <li>R$ 500 - R$ 600</li>
          <li>R$ 600 - R$ 700</li>
          <li>R$ 700 - R$ 800</li>
          <li>R$ 900 - R$ 1000</li>
          <li>Acima de R$ 1000</li>
        </ul>
      </Prices>
      <Prices>
        <h2>Gênero</h2>
        <ul>
          {genders.map((gender, index) => (
            <li key={index} onClick={selectGender}>
              {gender}
            </li>
          ))}
        </ul>
      </Prices>
    </StyledFilters>
  );
};

export default Filters;
