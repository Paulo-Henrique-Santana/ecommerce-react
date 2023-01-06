import React from "react";
import { useParams } from "react-router-dom";
import useFavoritesId from "../../Hooks/useFavoritesId";
import { ShoesContext } from "../../ShoesContext";
import * as S from "./styles";

const Product = () => {
  const { shoes } = React.useContext(ShoesContext);
  const [shoe, setShoe] = React.useState(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const images = React.useRef();
  const { favoritesId, toggleFavorite } = useFavoritesId();
  const id = Number(useParams().id);

  React.useEffect(() => {
    if (shoes) setShoe(shoes.find((shoe) => shoe.id === id));
  }, [shoes, id]);

  React.useEffect(() => {
    if (shoe) {
      images.current.querySelector("img").classList.add("selected");
      setImgSrc(images.current.querySelector("img").src);
    }
  }, [shoe]);

  const selectColor = ({ target }) => {
    setImgSrc(target.src);
    images.current
      .querySelectorAll("img")
      .forEach((img) => img.classList.remove("selected"));
    target.classList.add("selected");
  };

  const selectSize = ({ target }) => {
    target.parentNode.childNodes.forEach((li) =>
      li.classList.remove("selected")
    );
    target.classList.add("selected");
  };

  if (shoe)
    return (
      <S.Main>
        <S.BoxImage>
          <img src={imgSrc} alt={shoe.nome} />
          <S.Favorite
            active={favoritesId.includes(id)}
            onClick={() => toggleFavorite(id)}
          />
        </S.BoxImage>
        <S.Infos>
          <S.Name>{shoe.nome}</S.Name>
          <S.Price>R$ {shoe.preco}</S.Price>
          <S.DivImages ref={images}>
            {shoe.cores.map(({ url }, index) => (
              <div key={index} onClick={selectColor}>
                <img src={url} alt={`${shoe.nome}`} />
              </div>
            ))}
          </S.DivImages>
          <h2>Tamanhos</h2>
          <S.Sizes>
            {imgSrc &&
              shoe.cores
                .find(({ url }) => url === imgSrc)
                .tamanhos.map((n) => (
                  <li key={n} onClick={selectSize}>
                    {n}
                  </li>
                ))}
          </S.Sizes>
          <S.Button>Comprar</S.Button>
        </S.Infos>
      </S.Main>
    );
};

export default Product;
