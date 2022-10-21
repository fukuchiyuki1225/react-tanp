import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.scss";
import Home from "./Home";
import Favorite from "./Favorite";
import Search from "./Search";
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorite" element={<Favorite></Favorite>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
