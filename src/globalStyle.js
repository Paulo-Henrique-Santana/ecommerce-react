import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', 'Arial', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }
  
  :root {
    --color1: #212529;
    --color2: #f6f6f6;
    --border-radius-img: 5px;
    --box-shadow1: 0px 0px 6px 0px rgb(0 0 0 / 15%);
  }
  
  body {
    overflow-x: hidden;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    width: 100vw;
    position: relative;
  }
  
  main {
    flex: 1;
    padding: 0 15px;
    max-width: 1440px;
    color: var(--color1);
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

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes showLeft {
    from {
      opacity: 0;
      transform: translate(-25px, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes showRight {
    from {
      opacity: 0;
      transform: translate(25px, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

`;

export default GlobalStyle;
