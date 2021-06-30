import React from "react";
import "./navigation.css";
import SignOut from "./SignOut";
import clsx from "clsx";

export default function Navigation(props) {
  const { className, type } = props;
  const classes = clsx(
    {
      navigation_wrapper: true,
      "dark-font": type === "dark",
      "light-font": type === "light",
    },
    className
  );
  return (
    <div className={classes}>
      <div>My_Newspapper.</div>
      <div className="navigation_right-column">
        <div className="navigation_right-column__item">Home</div>
        <div className="navigation_right-column__item">Profile</div>
        <div className="navigation_right-column__item">
          <SignOut button_type="button_link">Sing out</SignOut>
        </div>
      </div>
    </div>
  );
}
