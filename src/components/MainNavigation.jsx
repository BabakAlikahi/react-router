import {  NavLink } from "react-router-dom";

import classes from "./main-navigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"} className={({ isActive }) => (isActive ? classes.active : undefined)}>
              Products Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
