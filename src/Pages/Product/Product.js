import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useFavoritesId from "../../Hooks/useFavoritesId";
import { ShoesContext } from "../../ShoesContext";
import * as S from "./styles";

const Product = () => {
  const shoes = React.useContext(ShoesContext);
  const [shoe, setShoe] = React.useState(null);
  const [colorIndex, setColorIndex] = React.useState(0);
  const [selectedSize, setSize] = React.useState(null);
  const colors = React.useRef();
  const sizes = React.useRef();
  const { favoritesId, toggleFavorite } = useFavoritesId();
  const { addToCart } = useCart();
  const id = Number(useSearchParams()[0].get("id"));
  const navigate = useNavigate();

  React.useEffect(() => {
    if (shoes.data) setShoe(shoes.data.find((shoe) => shoe.id === id));
  }, [shoes.data, id]);

  const removeSelectedSizes = () =>
    sizes.current.childNodes.forEach((li) => li.classList.remove("selected"));

  const selectColor = ({ currentTarget }) => {
    const targetColorIndex = Number(currentTarget.dataset.colorIndex);
    if (targetColorIndex !== colorIndex) {
      setColorIndex(targetColorIndex);
      colors.current
        .querySelectorAll("img")
        .forEach((img) => img.classList.remove("selected"));
      currentTarget.classList.add("selected");
      removeSelectedSizes();
      setSize(null);
    }
  };

  const selectSize = ({ target }) => {
    removeSelectedSizes();
    target.classList.add("selected");
    setSize(Number(target.innerText));
  };

  const buy = () => {
    addToCart(id, selectedSize, colorIndex);
    setTimeout(() => {
      navigate("/cart");
    }, 1);
  };

  if (shoe)
    return (
      <S.Main>
        <S.BoxImage>
          <img src={shoe.colors[colorIndex].url} alt={shoe.name} />
          <S.Favorite
            active={favoritesId.includes(id)}
            onClick={() => toggleFavorite(id)}
          />
        </S.BoxImage>
        <S.Infos>
          <S.Name>{shoe.name}</S.Name>
          <S.Price>{shoes.toCurrencyBRL(shoe.price)}</S.Price>
          <S.Colors ref={colors}>
            {shoe.colors.map(({ url }, index) => (
              <li
                className={index === colorIndex ? "selected" : ""}
                key={index}
                data-color-index={index}
                onClick={selectColor}
              >
                <img src={url} alt={`${shoe.name}`} />
              </li>
            ))}
          </S.Colors>
          <h2>Tamanhos</h2>
          <S.Sizes ref={sizes}>
            {shoe.colors[colorIndex].sizes.map((n) => (
              <li key={n} onClick={selectSize}>
                {n}
              </li>
            ))}
          </S.Sizes>
          <S.Button disabled={!selectedSize} onClick={buy}>
            Comprar
          </S.Button>
        </S.Infos>
      </S.Main>
    );
};

export default Product;
