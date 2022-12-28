import React from "react";
import { H2 } from "../styles";
import { StyledSizes } from "./styles";

const Sizes = ({ shoes, setSelectedSizes }) => {
  let sizes = [];
  shoes.forEach(({ tamanhos }) => {
    tamanhos.forEach((n) => !sizes.includes(n) && sizes.push(n));
  });

  const selectSize = ({ target }) => {
    target.classList.toggle("selected");
    const size = Number(target.innerText);
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((value) => value !== size)
        : [...prev, size]
    );
  };

  return (
    <StyledSizes>
      <H2>Tamanho</H2>
      <ul>
        {sizes.map((size, index) => (
          <li key={index} onClick={selectSize}>
            {size}
          </li>
        ))}
      </ul>
    </StyledSizes>
  );
};

export default Sizes;
