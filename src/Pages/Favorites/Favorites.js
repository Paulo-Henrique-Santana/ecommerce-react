import React from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import EmptyPageWarning from "../../Components/EmptyPageWarning/EmptyPageWarning";
import Head from "../../Components/Head/Head";
import FavoriteSVG from "../../Components/Svg/FavoriteSVG";
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
    <>
      <Head
        title="Meus Favoritos"
        description="Produtos adicionados como favorito"
      />
      {favorites.length ? (
        <main>
          <S.H1>Meus Favoritos</S.H1>
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
        </main>
      ) : (
        <EmptyPageWarning>
          <FavoriteSVG />
          <h1>Sua lista de favoritos está vazia :(</h1>
        </EmptyPageWarning>
      )}
    </>
  );
};

export default Favorites;
