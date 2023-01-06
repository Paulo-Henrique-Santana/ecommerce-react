import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import GlobalStyle from "./globalStyle";
import Favorites from "./Pages/Favorites/Favorites";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import { ShoesStorage } from "./ShoesContext";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ShoesStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </ShoesStorage>
    </BrowserRouter>
  );
};

export default App;
