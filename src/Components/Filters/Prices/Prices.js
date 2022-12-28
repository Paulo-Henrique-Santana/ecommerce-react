import React from "react";
import { H2, Ul } from "../styles";

const Prices = ({ setSelectedPrices }) => {
  const prices = [500, 600, 700, 800, 900, 1000];

  const selectPrice = ({ target }) => {
    target.classList.toggle("selected");
    const price = prices[target.id];
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((n) => n !== price) : [...prev, price]
    );
  };

  return (
    <div>
      <H2>Preço</H2>
      <Ul>
        {prices.map((price, index) => (
          <li id={index} key={index} onClick={selectPrice}>
            {index !== prices.length - 1
              ? `R$ ${price} - R$ ${prices[index + 1]}`
              : `Acima de R$ ${price}`}
          </li>
        ))}
      </Ul>
    </div>
  );
};

export default Prices;
