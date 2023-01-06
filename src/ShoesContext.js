import React from "react";

export const ShoesContext = React.createContext();

export const ShoesStorage = ({ children }) => {
  const [shoes, setShoes] = React.useState(null);

  React.useEffect(() => {
    const fetchShoes = async () => {
      const response = await fetch("./products.json");
      const json = await response.json();
      setShoes(json);
    };
    fetchShoes();
  }, []);

  return (
    <ShoesContext.Provider value={{ shoes }}>{children}</ShoesContext.Provider>
  );
};
