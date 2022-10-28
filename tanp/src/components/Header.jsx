import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  console.log();
  return (
    <h1
      className={
        useLocation().pathname === "/search" ? "header--search" : "header"
      }
    >
      <Link to="react-tanp">Sanrio goods search</Link>
    </h1>
  );
};

export default Header;
