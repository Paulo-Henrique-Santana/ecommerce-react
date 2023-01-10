import React from "react";

export const ShoesContext = React.createContext();

export const ShoesStorage = ({ children }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchShoes = async () => {
      const response = await fetch("./products.json");
      const json = await response.json();
      setData(json);
    };
    fetchShoes();
  }, []);

  const toCurrencyBRL = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <ShoesContext.Provider value={{ data, toCurrencyBRL }}>
      {children}
    </ShoesContext.Provider>
  );
};
