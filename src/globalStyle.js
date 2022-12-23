import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
