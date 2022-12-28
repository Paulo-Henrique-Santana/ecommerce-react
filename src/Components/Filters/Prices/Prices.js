import React from "react";
import { H2, Ul } from "../styles";

const Prices = ({}) => {
  const prices = [500, 600, 700, 800, 900, 1000];

  return (
    <div>
      <H2>Preço</H2>
      <Ul>
        {prices.map((price, index) => (
          <li key={index}>
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
