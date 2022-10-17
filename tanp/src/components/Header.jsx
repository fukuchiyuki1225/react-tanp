import React from "react";

const Header = (props) => {
  return (
    <h1 className="header">
      <button onClick={() => props.setCurrentPage("ホーム")} type="button">
        TANP
      </button>
    </h1>
  );
};

export default Header;
