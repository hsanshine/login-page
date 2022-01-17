import React from "react";
import Button from "../UI/Button/Button";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogOut}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navigation.defaultProps = {
  isLoggedIn: true,
};
export default Navigation;
