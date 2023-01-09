import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--color2);
  }

  :root {
    --color1: #f6f6f6;
    --color2: #212529;
    --color3: #f5f5f5;
    --border-radius-img: 5px;
  }
  
  body {
    overflow-y: scroll;
  }
  
  #root {
    min-height: 100vh;
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
    padding: 0 15px;
    max-width: 1440px;
  }
`;

export default GlobalStyle;
