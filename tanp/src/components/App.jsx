import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.scss";
import Home from "./Home";
import Favorite from "./Favorite";
import Search from "./Search";
import Layout from "./Layout";

const App = () => {
  console.log(`${process.env.PUBLIC_URL}/`);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Layout></Layout>}>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<Home></Home>}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/favorite`}
            element={<Favorite></Favorite>}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/search`}
            element={<Search></Search>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
