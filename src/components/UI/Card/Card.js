import React from "react";
import classes from "./Card.module.css";

//since we made this component, it does not know what the attribute class name means when it is put on it.
// so here we take the props and return a defualt, html element that knows what to do with all the props we gave its parent.
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
