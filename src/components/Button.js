import React from 'react';
import './button.css';
import clsx from "clsx";

export default function Button(props) {

  const classes = clsx({
    "button_link": (props.type === "button_link"),
    "button_button": (props.type === "button_button")
  }, props.className);

  return (
    <button 
        onClick={props.onClick}
        className={classes}
        >{props.children}</button>
  );
}