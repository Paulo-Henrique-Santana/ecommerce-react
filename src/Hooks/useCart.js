import React from "react";

const useCart = () => {
  const [cart, setCart] = React.useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (id, size, colorIndex) => {
    const productIndex = cart.findIndex(
      (item) =>
        item.id === id && item.size === size && item.colorIndex === colorIndex
    );
    if (productIndex > -1) {
      const product = { ...cart[productIndex] };
      ++product.quantity;
      setCart([...cart.filter((item) => item !== cart[productIndex]), product]);
    } else setCart([...cart, { id, size, colorIndex, quantity: 1 }]);
  };

  React.useEffect(() => {
    if (cart.length) localStorage.setItem("cart", JSON.stringify(cart));
    else localStorage.removeItem("cart");
  }, [cart]);

  return { cart, addToCart };
};

export default useCart;
