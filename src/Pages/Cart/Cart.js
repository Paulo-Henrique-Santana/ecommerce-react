import React from "react";
import useCart from "../../Hooks/useCart";
import { ShoesContext } from "../../ShoesContext";
import * as S from "./styles";

const Cart = () => {
  const { shoes } = React.useContext(ShoesContext);
  const [cartProducts, setCardProducts] = React.useState([]);
  const { cart } = useCart();
  console.log(cartProducts);

  React.useEffect(() => {
    if (shoes)
      setCardProducts(
        cart.map(({ id, size, colorIndex, quantity }) => {
          const { name, price, colors } = shoes.find((shoe) => shoe.id === id);
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
  }, [shoes, cart]);

  return (
    <S.Main>
      <S.ContainerProducts>
        <h1>Meu carrinho</h1>
        {cartProducts && (
          <S.Products>
            {cartProducts.map((product, index) => (
              <S.Product key={index}>
                <S.ContainerDetails>
                  <S.Image src={product.img} alt={product.name} />
                  <S.Details>
                    <S.Name>{product.name}</S.Name>
                    <p>{product.size}</p>
                  </S.Details>
                </S.ContainerDetails>
                <p>{product.quantity}</p>
                <p>{product.price}</p>
              </S.Product>
            ))}
          </S.Products>
        )}
      </S.ContainerProducts>
      <S.Summary>
        <h1>Resumo</h1>
      </S.Summary>
    </S.Main>
  );
};

export default Cart;
