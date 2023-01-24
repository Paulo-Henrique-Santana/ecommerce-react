import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = "ReactShoes" + (props.title ? ` | ${props.title}` : "");
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);
};

export default Head;
