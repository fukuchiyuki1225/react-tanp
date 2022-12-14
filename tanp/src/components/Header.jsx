import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <h1
      className={
        useLocation().pathname === "/search" ? "header--search" : "header"
      }
    >
      <Link to={`${process.env.PUBLIC_URL}/`}>Sanrio goods search</Link>
    </h1>
  );
};

export default Header;
