import React from "react";

const useFavoritesId = () => {
  const [favoritesId, setFavoritesId] = React.useState(
    localStorage.getItem("favoritesId")
      ? JSON.parse(localStorage.getItem("favoritesId"))
      : []
  );

  const addFavorite = (id) => {
    if (!favoritesId.includes(id)) setFavoritesId([...favoritesId, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesId(favoritesId.filter((value) => value !== id));
  };

  React.useEffect(() => {
    localStorage.setItem("favoritesId", JSON.stringify(favoritesId));
  }, [favoritesId]);

  return { favoritesId, addFavorite, removeFavorite };
};

export default useFavoritesId;
