import React from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import useFavoritesId from "../../Hooks/useFavoritesId";
import { ShoesContext } from "../../ShoesContext";
import { Main, Msg } from "./styles";

const Favorites = () => {
  const { shoes } = React.useContext(ShoesContext);
  const [favorites, setFavorites] = React.useState([]);
  const { favoritesId, removeFavorite } = useFavoritesId();

  React.useEffect(() => {
    if (shoes) setFavorites(shoes.filter(({ id }) => favoritesId.includes(id)));
  }, [shoes, favoritesId]);

  return (
    <Main>
      {favorites.length ? (
        favorites
          .slice(0, 1000)
          .map((shoe) => (
            <CardProduct
              key={shoe.id}
              shoe={shoe}
              dataId={shoe.id}
              favorite={favoritesId.includes(shoe.id)}
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
