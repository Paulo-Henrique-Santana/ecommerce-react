import React from "react";
import FiltersListItem from "../FiltersListItem/FiltersListItem";
import { H2, Ul } from "../styles";

const Genders = ({ shoes, setSelectedGenders }) => {
  const genders = [...new Set(shoes.map((shoe) => shoe.genero))];

  const selectGender = ({ currentTarget }) => {
    setSelectedGenders((prev) =>
      prev.includes(currentTarget.innerText)
        ? prev.filter((value) => value !== currentTarget.innerText)
        : [...prev, currentTarget.innerText]
    );
  };

  return (
    <div>
      <H2>Gênero</H2>
      <Ul>
        {genders.map((gender, index) => (
          <FiltersListItem key={index} selectItem={selectGender}>
            {gender}
          </FiltersListItem>
        ))}
      </Ul>
    </div>
  );
};

export default Genders;
