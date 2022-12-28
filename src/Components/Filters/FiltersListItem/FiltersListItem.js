import React from "react";
import Checkbox from "../../Svg/Checkbox";

const FiltersListItem = ({ children, selectItem, id }) => {
  const [active, setActive] = React.useState(false);

  const handleClick = (event) => {
    selectItem(event);
    setActive(!active);
  };

  return (
    <li onClick={handleClick} id={id}>
      <Checkbox active={active} />
      <span>{children}</span>
    </li>
  );
};

export default FiltersListItem;
