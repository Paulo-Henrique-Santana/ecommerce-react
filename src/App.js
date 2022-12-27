import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
