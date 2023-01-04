import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    overflow-y: scroll;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    max-width: 100%;
  }

  main {
    max-width: 1440px;
  }
`;

export default GlobalStyle;
