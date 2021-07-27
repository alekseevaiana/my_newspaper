import React from "react";
import "./navigation.css";
import SignOut from "./SignOut";
import clsx from "clsx";
import { Link } from "react-router-dom";

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
    <nav className={classes}>
      {
        // route should link to "/", but first we have to figure out how to check user auth
      }
      <Link to="/sign_in">
        <div>My_Newspapper.</div>
      </Link>
      <div className="navigation_right-column">
        <div className="navigation_right-column__item">
          <Link>Home</Link>
        </div>
        <div className="navigation_right-column__item">
          <Link>Profile</Link>
        </div>
        <div className="navigation_right-column__item">
          <SignOut button_type="button_link">Sing out</SignOut>
        </div>
      </div>
    </nav>
  );
}
