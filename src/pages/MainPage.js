import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import TextInput from "../components/TextInput";
import MainPageWrapper from "../components/MainPageWrapper";
import useLoginState from "../hooks/useLoginState";
import "./MainPage.css";

// how to check if user logged in?

export default function MainPage({ loggedIn }) {
  return (
    <>
      {/* {console.log("loggedIn? " + authState)} */}
      <div className="main-page">
        <Navigation type="light" />
        <MainPageWrapper>
          <Switch>
            <Route exact path="/">
              <TextInput />
            </Route>
            <Route exact path="/profile">
              User Info
            </Route>
          </Switch>
        </MainPageWrapper>
      </div>
    </>
  );
}
