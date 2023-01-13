import React from "react";
import Genders from "../GendersFilter/GendersFilter";
import Prices from "../PricesFilter/PricesFilter";
import SizesFilter from "../SizesFilter/SizesFilter";
import FiltersSVG from "../../../../Components/Svg/FiltersSVG";
import * as S from "./styles";

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
        <S.BtnFilters onClick={handleClickFiltersMobile}>
          <span>Filtros</span>
          <FiltersSVG />
        </S.BtnFilters>
        <S.ContainerFiltersMobile
          ref={containerFiltersMobile}
          filtersMobile={filtersMobile}
        >
          <S.FiltersMobile>
            <S.FilterTitle>Filtros</S.FilterTitle>
            <S.CloseBtn onClick={() => setFiltersMobile(false)}>x</S.CloseBtn>
            <SizesFilter shoes={shoes} setSelectedSizes={setSelectedSizes} />
            <Prices setSelectedPrices={setSelectedPrices} />
            <Genders shoes={shoes} setSelectedGenders={setSelectedGenders} />
          </S.FiltersMobile>
        </S.ContainerFiltersMobile>
      </>
    );
  else
    return (
      <S.Filters>
        <S.FilterTitle>Filtros</S.FilterTitle>
        <SizesFilter shoes={shoes} setSelectedSizes={setSelectedSizes} />
        <Prices setSelectedPrices={setSelectedPrices} />
        <Genders shoes={shoes} setSelectedGenders={setSelectedGenders} />
      </S.Filters>
    );
};

export default FiltersMenu;
