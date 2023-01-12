import React from "react";
import useCart from "../../Hooks/useCart";
import { ShoesContext } from "../../ShoesContext";
import CartProducts from "./CartProducts/CartProducts";
import CartSummary from "./CartSummary/CartSummary";
import * as S from "./styles";

const Cart = () => {
  const { data, toCurrencyBRL } = React.useContext(ShoesContext);
  const [cartProducts, setCardProducts] = React.useState([]);
  const { cart, changeQuantity, removeProduct } = useCart();

  React.useEffect(() => {
    if (data)
      setCardProducts(
        cart.map(({ id, size, colorIndex, quantity }) => {
          const { name, price, colors } = data.find((shoe) => shoe.id === id);
          return {
            id,
            img: colors[colorIndex].url,
            name,
            size,
            price,
            quantity,
          };
        })
      );
  }, [data, cart]);

  return (
    <S.Main>
      <CartProducts
        cartProducts={cartProducts}
        toCurrencyBRL={toCurrencyBRL}
        changeQuantity={changeQuantity}
        removeProduct={removeProduct}
      />
      <CartSummary cartProducts={cartProducts} toCurrencyBRL={toCurrencyBRL} />
    </S.Main>
  );
};

export default Cart;
