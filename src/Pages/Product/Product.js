import React from "react";
import { useParams } from "react-router-dom";
import { Button, DivImages, Infos, Main, Name, Price, Sizes } from "./styles";

const Product = () => {
  const params = useParams();
  const [shoe, setShoe] = React.useState(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const images = React.useRef();

  React.useEffect(() => {
    const fetchShoes = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setShoe(json.find((shoe) => shoe.id === Number(params.id)));
    };
    fetchShoes("/products.json");
  }, [params]);

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
      <Main>
        <img src={imgSrc} alt={shoe.nome} />
        <Infos>
          <Name>{shoe.nome}</Name>
          <Price>R$ {shoe.preco}</Price>
          <DivImages ref={images}>
            {shoe.cores.map(({ url }, index) => (
              <div key={index} onClick={selectColor}>
                <img src={url} alt={`${shoe.nome}`} />
              </div>
            ))}
          </DivImages>
          <h2>Tamanhos</h2>
          <Sizes>
            {imgSrc &&
              shoe.cores
                .find(({ url }) => url === imgSrc)
                .tamanhos.map((n) => (
                  <li key={n} onClick={selectSize}>
                    {n}
                  </li>
                ))}
          </Sizes>
          <Button>Comprar</Button>
        </Infos>
      </Main>
    );
};

export default Product;
