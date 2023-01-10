import React from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import useFavoritesId from "../../Hooks/useFavoritesId";
import { ShoesContext } from "../../ShoesContext";
import * as S from "./styles";

const Favorites = () => {
  const { data } = React.useContext(ShoesContext);
  const [favorites, setFavorites] = React.useState([]);
  const { favoritesId, toggleFavorite } = useFavoritesId();

  React.useEffect(() => {
    if (data) setFavorites(data.filter(({ id }) => favoritesId.includes(id)));
  }, [data, favoritesId]);

  return (
    <main>
      <S.H1>Meus Favoritos</S.H1>
      {favorites.length ? (
        <S.Favorites>
          {favorites.slice(0, 1000).map((shoe) => (
            <CardProduct
              key={shoe.id}
              shoe={shoe}
              dataId={shoe.id}
              favorite={favoritesId.includes(shoe.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </S.Favorites>
      ) : (
        <S.Msg>Nenhum produto foi adicionado aos favoritos!</S.Msg>
      )}
    </main>
  );
};

export default Favorites;
