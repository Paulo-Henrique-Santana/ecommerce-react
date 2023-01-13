import React from "react";
import Filter from "../Filter/Filter";
import FiltersListItem from "../FiltersListItem/FiltersListItem";
import { Ul } from "../styles";

const GendersFilter = ({ shoes, setSelectedGenders }) => {
  // const genders = [...new Set(shoes.map((shoe) => shoe.gender))];
  const genders = ["Masculino", "Feminino", "Unissex", "Infantil"];

  const selectGender = ({ currentTarget }) => {
    setSelectedGenders((prev) =>
      prev.includes(currentTarget.innerText)
        ? prev.filter((value) => value !== currentTarget.innerText)
        : [...prev, currentTarget.innerText]
    );
  };

  return (
    <Filter>
      <h2>Gênero</h2>
      <Ul>
        {genders.map((gender, index) => (
          <FiltersListItem key={index} selectItem={selectGender}>
            {gender}
          </FiltersListItem>
        ))}
      </Ul>
    </Filter>
  );
};

export default GendersFilter;
