import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <h1 className="header">
      <Link to="/">TANP</Link>
    </h1>
  );
};

export default Header;
