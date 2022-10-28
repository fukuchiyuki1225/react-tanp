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
            to={`${process.env.PUBLIC_URL}/`}
            className={({ isActive }) =>
              isActive ? "menu-button--home menu-active" : "menu-button--home"
            }
            end
          >
            ホーム
          </NavLink>
          <NavLink
            to={`${process.env.PUBLIC_URL}/favorite`}
            className={({ isActive }) =>
              isActive
                ? "menu-button--favorite menu-active"
                : "menu-button--favorite"
            }
          >
            お気に入り
          </NavLink>
          <NavLink
            to={`${process.env.PUBLIC_URL}/search`}
            className={({ isActive }) =>
              isActive
                ? "menu-button--search menu-active"
                : "menu-button--search"
            }
          >
            検索
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
