import React from "react";
import Sizes from "../../../../Components/Sizes/Sizes";
import Filter from "../Filter/Filter";

const SizesFilter = ({ shoes, setSelectedSizes }) => {
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
    <Filter>
      <h2>Tamanho</h2>
      <Sizes>
        {sizes.sort().map((size, index) => (
          <li key={index} onClick={selectSize}>
            {size}
          </li>
        ))}
      </Sizes>
    </Filter>
  );
};

export default SizesFilter;
