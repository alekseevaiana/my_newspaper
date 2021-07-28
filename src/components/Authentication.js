import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MainPage from "../pages/MainPage";
import WelcomePage from "../pages/WelcomePage";
import SignUp from "./SignUp";
import Verify from "./Verify";
import NotFound from "./NotFound";
import useLoginState from "../hooks/useLoginState.js";

export default function Authentication() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    code: "",
    user: null, // will contain our user data object when signed in
    status: "SignIn",
  });

  const history = useHistory();

  // init | logged | notlogged
  const authState = useLoginState();

  useEffect(() => {
    if (
      authState === "notlogged" &&
      history.location.pathname !== "/sign_in" &&
      history.location.pathname !== "/sign_up"
    ) {
      history.push("/sign_in");
    }
  }, [authState, history]);

  if (authState == "init") {
    return "checking login";
  }

  const handleFormInput = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      {console.log("authState is " + authState)}
      <Switch>
        <Route exact path="/sign_in">
          <WelcomePage handleFormInput={handleFormInput} inputs={state} />
        </Route>
        <Route exact path="/sign_up">
          <SignUp handleFormInput={handleFormInput} inputs={state} />
        </Route>
        <Route path="/">
          <MainPage loggedIn={authState === "logged"} />
        </Route>
        <Route exact path="/verify">
          <Verify handleFormInput={handleFormInput} inputs={state} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
