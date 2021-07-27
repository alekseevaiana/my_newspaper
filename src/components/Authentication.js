import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MainPage from "../pages/MainPage";
import WelcomePage from "../pages/WelcomePage";
import SignUp from "./SignUp";
import Verify from "./Verify";
import NotFound from "./NotFound";
import { Auth } from "aws-amplify";

async function checkAuth() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    return null;
  }
}

// init | logged | notlogged
function useLoginState() {
  const [authState, setAuthState] = useState("init"); // init | logged | notlogged

  useEffect(() => {
    let finished = false;

    const checkLoggenIn = async () => {
      const user = await checkAuth();

      if (!finished) {
        if (user) {
          setAuthState("logged");
        } else {
          setAuthState("notlogged");
        }
      }
    };
    checkLoggenIn();

    return () => {
      finished = true;
    };
  }, [setAuthState]);

  return authState;
}

export default function Authentication() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    code: "",
    user: null, // will contain our user data object when signed in
    status: "SignIn",
  });
  // при клике на sign up -> перевести на sign_up
  const history = useHistory();

  const handleFormInput = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

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

  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/sign_in">
        <WelcomePage handleFormInput={handleFormInput} inputs={state} />
      </Route>
      <Route exact path="/sign_up">
        <SignUp handleFormInput={handleFormInput} inputs={state} />
      </Route>
      <Route exact path="/verify">
        <Verify handleFormInput={handleFormInput} inputs={state} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
