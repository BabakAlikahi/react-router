import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./main-navigation.module.css"
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home Page</NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>Products Page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
