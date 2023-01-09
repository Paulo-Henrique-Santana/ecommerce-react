import React from "react";
import { H2 } from "../styles";
import { SizeList } from "./styles";

const Sizes = ({ shoes, setSelectedSizes }) => {
  let sizes = [];

  shoes.forEach(({ colors }) => {
    colors.forEach((color) =>
      color.sizes.forEach((n) => {
        if (!sizes.includes(n)) sizes.push(n);
      })
    );
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
    <div>
      <H2>Tamanho</H2>
      <SizeList>
        {sizes.sort().map((size, index) => (
          <li key={index} onClick={selectSize}>
            {size}
          </li>
        ))}
      </SizeList>
    </div>
  );
};

export default Sizes;
