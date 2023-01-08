import React from "react";

const useFavoritesId = () => {
  const [favoritesId, setFavoritesId] = React.useState(
    localStorage.getItem("favoritesId")
      ? JSON.parse(localStorage.getItem("favoritesId"))
      : []
  );

  const toggleFavorite = (id) => {
    if (!favoritesId.includes(id)) setFavoritesId([...favoritesId, id]);
    else setFavoritesId(favoritesId.filter((value) => value !== id));
  };

  React.useEffect(() => {
    if (favoritesId.length)
      localStorage.setItem("favoritesId", JSON.stringify(favoritesId));
    else localStorage.removeItem("favoritesId");
  }, [favoritesId]);

  return { favoritesId, toggleFavorite };
};

export default useFavoritesId;
