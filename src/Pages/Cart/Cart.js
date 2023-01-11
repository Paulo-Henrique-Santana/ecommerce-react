import React from "react";
import useCart from "../../Hooks/useCart";
import { ShoesContext } from "../../ShoesContext";
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
      <S.ProductsContainer>
        <S.H1>Meu carrinho</S.H1>
        <S.Titles>
          <S.TitleProduct>Produto</S.TitleProduct>
          <S.TitleQuantity>Quantidade</S.TitleQuantity>
          <S.TitleTotal>Total</S.TitleTotal>
        </S.Titles>
        {cartProducts && (
          <S.Products>
            {cartProducts.map((product, index) => (
              <S.Product key={index}>
                <S.ContainerDetails>
                  <S.Image src={product.img} alt={product.name} />
                  <S.Details>
                    <div>
                      <S.Name>{product.name}</S.Name>
                      <p>Tamanho: {product.size}</p>
                    </div>
                    <S.Remove onClick={() => removeProduct(index)}>
                      Remover
                    </S.Remove>
                  </S.Details>
                </S.ContainerDetails>
                <S.QuantityContainer>
                  <S.StyledQuantity
                    quantity={product.quantity}
                    productIndex={index}
                    changeQuantity={changeQuantity}
                  />
                </S.QuantityContainer>
                <S.Total>
                  {toCurrencyBRL(product.price * product.quantity)}
                </S.Total>
              </S.Product>
            ))}
          </S.Products>
        )}
      </S.ProductsContainer>
      <S.Summary>
        <h1>Resumo</h1>
        <p>Valor Total: {}</p>
      </S.Summary>
    </S.Main>
  );
};

export default Cart;
