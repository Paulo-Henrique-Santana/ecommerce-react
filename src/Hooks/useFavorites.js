import React from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = React.useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  const addFavorite = (id) => {
    if (!favorites.includes(id)) setFavorites([...favorites, id]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((value) => value !== id));
  };

  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, addFavorite, removeFavorite };
};

export default useFavorites;
