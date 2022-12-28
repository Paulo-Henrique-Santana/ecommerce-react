import React from "react";
import { H2, Ul } from "../styles";

const Genders = ({ shoes, setSelectedGenders }) => {
  const genders = [...new Set(shoes.map((shoe) => shoe.genero))];

  const selectGender = ({ target }) => {
    target.classList.toggle("selected");
    setSelectedGenders((prev) =>
      prev.includes(target.innerText)
        ? prev.filter((value) => value !== target.innerText)
        : [...prev, target.innerText]
    );
  };

  return (
    <div>
      <H2>Gênero</H2>
      <Ul>
        {genders.map((gender, index) => (
          <li key={index} onClick={selectGender}>
            {gender}
          </li>
        ))}
      </Ul>
    </div>
  );
};

export default Genders;
