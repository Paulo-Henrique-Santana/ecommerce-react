import styled from "styled-components";

export const Summary = styled.div`
  flex: 1;
  border-radius: 5px;
  padding: 25px;
  height: max-content;
  max-width: 400px;
  background-color: var(--color1);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SummaryValues = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  font-size: 1.05rem;
  &:last-of-type {
    border-top: 10px dotted white;
    padding-top: 30px;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const CouponContainer = styled.div`
  margin-bottom: 35px;
`;

export const CouponForm = styled.form`
  display: flex;
  margin-top: 15px;
`;

export const CouponInput = styled.input`
  border: 1px solid transparent;
  border-radius: 5px 0 0 5px;
  padding: 7px;
  width: 100%;
  font-size: 1.1rem;
  text-transform: uppercase;
  &:focus {
    border-color: var(--color2);
  }
`;

export const CouponMsg = styled.p`
  margin-top: 5px;
  font-size: 0.8rem;
  color: green;
`;

export const CouponError = styled(CouponMsg)`
  color: red;
`;

export const CouponButton = styled.button`
  border-radius: 0 5px 5px 0;
  padding: 0 15px;
  font-size: 0.95rem;
  font-weight: bold;
  background-color: var(--color2);
  color: white;
`;

export const FinishButton = styled.button`
  border-radius: 5px;
  padding: 13px 0;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: var(--color2);
  color: white;
`;
