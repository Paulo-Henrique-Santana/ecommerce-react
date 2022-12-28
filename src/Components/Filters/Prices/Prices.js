import React from "react";
import FiltersListItem from "../FiltersListItem/FiltersListItem";
import { H2, Ul } from "../styles";

const Prices = ({ setSelectedPrices }) => {
  const prices = [500, 600, 700, 800, 900, 1000];

  const selectPrice = ({ currentTarget }) => {
    currentTarget.classList.toggle("selected");
    const price = prices[currentTarget.id];
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((n) => n !== price) : [...prev, price]
    );
  };

  return (
    <div>
      <H2>Preço</H2>
      <Ul>
        {prices.map((price, index) => (
          <FiltersListItem id={index} key={index} selectItem={selectPrice}>
            {index !== prices.length - 1
              ? `R$ ${price} - R$ ${prices[index + 1]}`
              : `Acima de R$ ${price}`}
          </FiltersListItem>
        ))}
      </Ul>
    </div>
  );
};

export default Prices;
