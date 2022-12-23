import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default App;
