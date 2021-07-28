import React from "react";
import "./navigation.css";
import SignOut from "./SignOut";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import useLoginState from "../hooks/useLoginState";

export default function Navigation(props) {
  const { className, type, loggedIn } = props;
  const location = useLocation();
  const authState = useLoginState();

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
      {console.log(location.pathname)}
      {/* route should link to "/", but first we have to figure out how to check user auth */}
      <Link to="/">
        <div>My_Newspapper.</div>
      </Link>
      <div className="navigation_right-column">
        <div className="navigation_right-column__item">
          <Link to="/">Home</Link>
        </div>
        {/* show if you are on page '/' or 'profile' */}
        <div className="navigation_right-column__item">
          <Link to="/profile">Profile</Link>
        </div>
        {/* show if you are on page '/' or 'profile'  */}
        {console.log("authState is? " + authState)}
        {authState === "logged" ? (
          <div className="navigation_right-column__item">
            <SignOut button_type="button_link">Sing out</SignOut>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
