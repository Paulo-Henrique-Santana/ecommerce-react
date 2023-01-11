import React from "react";

const useCart = () => {
  const [cart, setCart] = React.useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (id, size, colorIndex) => {
    const index = cart.findIndex(
      (item) =>
        item.id === id && item.size === size && item.colorIndex === colorIndex
    );
    if (index > -1) changeQuantity(index, ++cart[index].quantity);
    else setCart([...cart, { id, size, colorIndex, quantity: 1 }]);
  };

  const changeQuantity = React.useCallback(
    (index, quantity) => {
      const newCart = [...cart];
      newCart[index] = { ...newCart[index], quantity };
      setCart(newCart);
    },
    [cart]
  );

  const removeProduct = (index) =>
    setCart(cart.filter((product) => product !== cart[index]));

  React.useEffect(() => {
    if (cart.length) localStorage.setItem("cart", JSON.stringify(cart));
    else localStorage.removeItem("cart");
  }, [cart]);

  return { cart, addToCart, changeQuantity, removeProduct };
};

export default useCart;
