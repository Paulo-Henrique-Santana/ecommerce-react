import React from "react";
import Genders from "../Genders/Genders";
import Prices from "../Prices/Prices";
import SizesFilter from "../SizesFilter/SizesFilter";
import { FiltersStyle } from "../styles";
import {
  CloseBtn,
  BtnFilters,
  ContainerFiltersMobile,
  FiltersMobile,
  Filters,
} from "./styles";
import FiltersSVG from "../../../../Components/Svg/FiltersSVG";

const FiltersMenu = ({
  shoes,
  setSelectedSizes,
  setSelectedGenders,
  setSelectedPrices,
}) => {
  const [mobile, setMobile] = React.useState(false);
  const [filtersMobile, setFiltersMobile] = React.useState(false);
  const containerFiltersMobile = React.useRef();

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia("(max-width: 768px)");
      setMobile(matches);
    };
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, []);

  React.useEffect(() => {
    setSelectedSizes([]);
    setSelectedPrices([]);
    setSelectedGenders([]);
  }, [mobile, setSelectedSizes, setSelectedPrices, setSelectedGenders]);

  const handleClickOutside = ({ target }) => {
    if (target === containerFiltersMobile.current) {
      setFiltersMobile(false);
      containerFiltersMobile.current.removeEventListener(
        "click",
        handleClickOutside
      );
    }
  };

  const handleClickFiltersMobile = () => {
    setFiltersMobile(!filtersMobile);
    containerFiltersMobile.current.addEventListener(
      "click",
      handleClickOutside
    );
  };

  if (mobile)
    return (
      <>
        <BtnFilters onClick={handleClickFiltersMobile}>
          <span>Filtros</span>
          <FiltersSVG />
        </BtnFilters>
        <ContainerFiltersMobile
          ref={containerFiltersMobile}
          filtersMobile={filtersMobile}
        >
          <FiltersMobile>
            <FiltersStyle />
            <CloseBtn onClick={() => setFiltersMobile(false)}>x</CloseBtn>
            <SizesFilter shoes={shoes} setSelectedSizes={setSelectedSizes} />
            <Prices setSelectedPrices={setSelectedPrices} />
            <Genders shoes={shoes} setSelectedGenders={setSelectedGenders} />
          </FiltersMobile>
        </ContainerFiltersMobile>
      </>
    );
  else
    return (
      <Filters>
        <FiltersStyle />
        <SizesFilter shoes={shoes} setSelectedSizes={setSelectedSizes} />
        <Prices setSelectedPrices={setSelectedPrices} />
        <Genders shoes={shoes} setSelectedGenders={setSelectedGenders} />
      </Filters>
    );
};

export default FiltersMenu;
