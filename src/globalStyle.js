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
  
  :root {
    --color1: #f6f6f6;
    --color2: #212529;
    --color3: #a5a5a5;
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
  
  main {
    padding: 0 15px;
    max-width: 1440px;
    min-height: 600px;
    color: var(--color2);
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

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
