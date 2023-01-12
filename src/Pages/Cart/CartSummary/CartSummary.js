import React from "react";
import * as S from "./styles";

const CartSummary = ({ cartProducts, toCurrencyBRL }) => {
  const [coupon, setCoupon] = React.useState("");
  const [discount, setDiscount] = React.useState(0);
  const totalPrice = cartProducts.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  const shippingCost = totalPrice >= 1000 ? 0 : 50.0;

  const validateCoupon = (event) => {
    event.preventDefault();
    if (coupon.toUpperCase() === "REACTSHOES") setDiscount(100);
    else setDiscount(0);
  };

  return (
    <S.Summary>
      <h1>Resumo</h1>
      <S.SummaryValues>
        Valor da Compra <span>{toCurrencyBRL(totalPrice)}</span>
      </S.SummaryValues>
      <S.CouponContainer>
        <p>Cupom de Desconto</p>
        <S.CouponForm onSubmit={validateCoupon}>
          <S.CouponInput
            value={coupon}
            onChange={({ target }) => setCoupon(target.value)}
            type="text"
            maxLength="10"
          />
          <S.CouponButton>Aplicar</S.CouponButton>
        </S.CouponForm>
        {!!discount ? (
          <S.CouponMsg>Cupom aplicado com sucesso!</S.CouponMsg>
        ) : (
          <S.CouponError>Cupom inválido!</S.CouponError>
        )}
      </S.CouponContainer>
      <S.SummaryValues>
        Desconto <span>- {toCurrencyBRL(discount)}</span>
      </S.SummaryValues>
      <S.SummaryValues>
        Frete{" "}
        <span>{shippingCost ? toCurrencyBRL(shippingCost) : "Grátis"}</span>
      </S.SummaryValues>
      <S.SummaryValues>
        Valor Total{" "}
        <span>{toCurrencyBRL(totalPrice + shippingCost - discount)}</span>
      </S.SummaryValues>
      <S.FinishButton>Finalizar</S.FinishButton>
    </S.Summary>
  );
};

export default CartSummary;
