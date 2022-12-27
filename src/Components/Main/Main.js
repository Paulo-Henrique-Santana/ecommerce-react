import React from "react";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";
import * as L from "./styles";

const Main = () => {
  const [sizes, setSizes] = React.useState([]);
  const [genders, setGenders] = React.useState([]);

  const selectSize = ({ target }) => {
    target.classList.toggle("selected");
    const size = Number(target.innerText);
    if (sizes.includes(size)) setSizes(sizes.filter((value) => value !== size));
    else setSizes([...sizes, size]);
  };

  const selectGender = ({ target }) => {
    target.classList.toggle("selected");
    if (genders.includes(target.innerText))
      setGenders(genders.filter((value) => value !== target.innerText));
    else setGenders([...genders, target.innerText]);
  };

  return (
    <L.StyledMain>
      <Filters selectSize={selectSize} selectGender={selectGender} />
      <Products sizes={sizes} genders={genders} />
    </L.StyledMain>
  );
};

export default Main;
