import React from 'react';
import './button.css';

export default function Button(props) {
    let button_class = "";
    if (props.type === "button_link") {
        button_class = button_class + "button_link";
    } else if (props.type === "button_button") {
      button_class = button_class + "button_button"
    }
  return (
    <button 
        onClick={props.onClick}
        className={button_class}
        >{props.children}</button>
  );
}