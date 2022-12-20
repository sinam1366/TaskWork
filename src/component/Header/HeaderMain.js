import React from "react";
import classes from "./HeaderMain.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderMain = (props) => {
  const checkLogin = useSelector((state) => state.auth.isLogin);
  return (
    <header className={`${classes.header_main} col-12`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          {!checkLogin ? (
            <li className="nav-item mx-2">
              <NavLink
                className={"nav-link"}
                to={"/login"}
                activeClassName={classes.active}
              >
                Login
              </NavLink>
            </li>
          ) : (
            <li className="nav-item mx-2">
              <NavLink
                className={"nav-link"}
                to={"/logout"}
                activeClassName={classes.active}
              >
                Logout
              </NavLink>
            </li>
          )}
          <li className="nav-item mx-2">
            <NavLink
              className={"nav-link"}
              to={"/products"}
              activeClassName={classes.active}
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className={"nav-link"}
              to={"/home"}
              activeClassName={classes.active}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMain;
