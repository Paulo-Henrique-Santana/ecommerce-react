import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Head from "../../Components/Head/Head";
import useCart from "../../Hooks/useCart";
import useFavoritesId from "../../Hooks/useFavoritesId";
import { ShoesContext } from "../../ShoesContext";
import * as S from "./styles";

const Product = () => {
  const shoes = React.useContext(ShoesContext);
  const [product, setProduct] = React.useState(null);
  const [colorIndex, setColorIndex] = React.useState(0);
  const [selectedSize, setSize] = React.useState(null);
  const colors = React.useRef();
  const sizes = React.useRef();
  const { favoritesId, toggleFavorite } = useFavoritesId();
  const { addToCart } = useCart();
  const id = Number(useSearchParams()[0].get("id"));
  const navigate = useNavigate();

  React.useEffect(() => {
    if (shoes.data) {
      const product = shoes.data.find((product) => product.id === id);
      if (product) setProduct(product);
      else navigate("/");
    }
  }, [shoes.data, id, navigate]);

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

  if (product)
    return (
      <S.Main>
        <Head title={product.name} description={product.name} />
        <S.BoxImage>
          <img src={product.colors[colorIndex].url} alt={product.name} />
          <S.Favorite
            active={favoritesId.includes(id)}
            onClick={() => toggleFavorite(id)}
          />
        </S.BoxImage>
        <S.Infos>
          <S.Name>{product.name}</S.Name>
          <S.Price>{shoes.toCurrencyBRL(product.price)}</S.Price>
          <S.Colors ref={colors}>
            {product.colors.map(({ url }, index) => (
              <li
                className={index === colorIndex ? "selected" : ""}
                key={index}
                data-color-index={index}
                onClick={selectColor}
              >
                <img src={url} alt={`${product.name}`} />
              </li>
            ))}
          </S.Colors>
          <h2>Tamanhos</h2>
          <S.Sizes ref={sizes}>
            {product.colors[colorIndex].sizes.map((n) => (
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
