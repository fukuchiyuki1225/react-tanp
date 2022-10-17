import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header setCurrentPage={props.setCurrentPage}></Header>
      <Outlet></Outlet>
      <nav>
        <ul className="menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-button--home menu-active" : "menu-button--home"
            }
            end
          >
            ホーム
          </NavLink>
          <NavLink
            to="favorite"
            className={({ isActive }) =>
              isActive
                ? "menu-button--favorite menu-active"
                : "menu-button--favorite"
            }
          >
            お気に入り
          </NavLink>
          <NavLink
            to="ranking"
            className={({ isActive }) =>
              isActive
                ? "menu-button--ranking menu-active"
                : "menu-button--ranking"
            }
          >
            ランキング
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
