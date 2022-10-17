import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.scss";
import Header from "./Header";
import Home from "./Home";
import Favorite from "./Favorite";
import Ranking from "./Ranking";
import MenuButton from "./MenuButton";

const App = () => {
  const [currentPage, setCurrentPage] = useState("ホーム");

  let contents = null;

  if (currentPage === "ホーム") {
    contents = <Home></Home>;
  } else if (currentPage === "お気に入り") {
    contents = <Favorite></Favorite>;
  } else if (currentPage === "ランキング") {
    contents = <Ranking></Ranking>;
  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}></Header>
      {contents}

      <nav className="menu">
        <MenuButton
          setCurrentPage={setCurrentPage}
          name="ホーム"
          currentPage={currentPage}
        ></MenuButton>
        <MenuButton
          setCurrentPage={setCurrentPage}
          name="お気に入り"
          currentPage={currentPage}
        ></MenuButton>
        <MenuButton
          setCurrentPage={setCurrentPage}
          name="ランキング"
          currentPage={currentPage}
        ></MenuButton>
      </nav>
    </div>
  );
};

export default App;
