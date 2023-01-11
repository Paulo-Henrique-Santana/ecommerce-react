import React from "react";
import MinusSVG from "../../../Components/Svg/MinusSVG";
import PlusSVG from "../../../Components/Svg/PlusSVG";

const Quantity = ({ className, quantity, productIndex, changeQuantity }) => {
  const [value, setValue] = React.useState(quantity);
  const regexp = /^[1-9]\d*$/;

  const changeValue = (newValue) => {
    if (!isNaN(newValue)) setValue(newValue);
    if (regexp.test(newValue)) changeQuantity(productIndex, Number(newValue));
  };

  return (
    <div className={className}>
      <button onClick={() => quantity > 1 && changeValue(quantity - 1)}>
        <MinusSVG />
      </button>
      <input
        type="text"
        maxLength="2"
        value={value}
        onChange={({ target }) => changeValue(target.value)}
        onBlur={({ target }) =>
          !regexp.test(target.value) && setValue(quantity)
        }
      />
      <button onClick={() => quantity < 99 && changeValue(quantity + 1)}>
        <PlusSVG />
      </button>
    </div>
  );
};

export default Quantity;
