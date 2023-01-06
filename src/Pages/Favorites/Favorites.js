import React from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import useFavorites from "../../Hooks/useFavorites";
import { Main, Msg } from "./styles";

const Favorites = () => {
  const [products, setProducts] = React.useState([]);
  const { favorites, removeFavorite } = useFavorites();

  React.useEffect(() => {
    const fetchShoes = async () => {
      const response = await fetch("./products.json");
      const json = await response.json();
      setProducts(json.filter(({ id }) => favorites.includes(id)));
    };
    fetchShoes();
  }, [favorites]);

  return (
    <Main>
      {products.length ? (
        products
          .slice(0, 1000)
          .map((shoe) => (
            <CardProduct
              key={shoe.id}
              shoe={shoe}
              dataId={shoe.id}
              favorite={favorites.includes(shoe.id)}
              removeFavorite={removeFavorite}
            />
          ))
      ) : (
        <Msg>Nenhum calçado foi adicionado aos favoritos!</Msg>
      )}
    </Main>
  );
};

export default Favorites;
