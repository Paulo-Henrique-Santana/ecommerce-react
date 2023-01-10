import React from "react";
import MinusSVG from "../../Components/SVG/MinusSVG";
import PlusSVG from "../../Components/SVG/PlusSVG";
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
        <h1>Meu carrinho</h1>
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
                    <p onClick={() => removeProduct(index)}>Remover</p>
                  </S.Details>
                </S.ContainerDetails>
                <S.QuantityContainer>
                  <S.QuantityButton
                    onClick={() => changeQuantity(index, product.quantity - 1)}
                  >
                    <MinusSVG />
                  </S.QuantityButton>
                  <S.Quantity
                    type="text"
                    maxLength="2"
                    value={product.quantity}
                    onChange={({ target }) =>
                      changeQuantity(index, Number(target.value))
                    }
                  />
                  <S.QuantityButton
                    onClick={() => changeQuantity(index, product.quantity + 1)}
                  >
                    <PlusSVG />
                  </S.QuantityButton>
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
      </S.Summary>
    </S.Main>
  );
};

export default Cart;
