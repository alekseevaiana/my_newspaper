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
      {authState === "logged" ? (
        <>
          <Link to="/">My_Newspapper.</Link>
          <div className="navigation_right-column">
            <Link to="/" className="navigation_right-column__item">
              Home
            </Link>
            <Link to="/profile" className="navigation_right-column__item">
              Profile
            </Link>
            <div className="navigation_right-column__item">
              <SignOut button_type="button_link">Sing out</SignOut>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/sign_in">My_Newspapper.</Link>
        </>
      )}
    </nav>
  );
}
