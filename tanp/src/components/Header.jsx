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
      <Link to="/">TANP</Link>
    </h1>
  );
};

export default Header;
