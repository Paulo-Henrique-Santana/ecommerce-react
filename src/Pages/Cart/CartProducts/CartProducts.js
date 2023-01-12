import React from "react";
import * as S from "./styles";

const CartProducts = ({
  cartProducts,
  toCurrencyBRL,
  changeQuantity,
  removeProduct,
}) => {
  return (
    <S.ProductsContainer>
      <h1>Meu carrinho</h1>
      <S.Titles>
        <S.TitleProduct>Produto</S.TitleProduct>
        <S.TitleQuantity>Quantidade</S.TitleQuantity>
        <S.TitleTotal>Total</S.TitleTotal>
      </S.Titles>
      <S.Products>
        {cartProducts.map((product, index) => (
          <S.Product key={index}>
            <S.ContainerDetails>
              <S.Image src={product.img} alt={product.name} />
              <S.Details>
                <div>
                  <S.Name>{product.name}</S.Name>
                  <S.Size>Tamanho: {product.size}</S.Size>
                </div>
                <S.TotalMobile>
                  {toCurrencyBRL(product.price * product.quantity)}
                </S.TotalMobile>
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
            <S.Total>{toCurrencyBRL(product.price * product.quantity)}</S.Total>
          </S.Product>
        ))}
      </S.Products>
    </S.ProductsContainer>
  );
};

export default CartProducts;
