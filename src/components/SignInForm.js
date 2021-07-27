import React, { useState } from "react";

import "./signInForm.css";
import Button from "./Button";
import { Auth } from "aws-amplify";
import Input from "./Input";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

export default function SignInForm({
  inputs,
  handleFormInput,
  username,
  password,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  async function handleSignIn(event) {
    event.preventDefault();
    const { username, password } = inputs;
    // You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger
    try {
      const user = await Auth.signIn({ username, password });
      history.push("/");
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  }

  return (
    <form autocomplete="off" className="sign-in-form" onSubmit={handleSignIn}>
      <Input
        type="text"
        name="username"
        label_name="Email"
        className="sign-in-form_input"
        value={username}
        onChange={handleFormInput}
      />
      <Input
        type="password"
        name="password"
        label_name="Password"
        className="sign-in-form_input"
        value={password}
        onChange={handleFormInput}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit" className="sign-in-form_button button_button">
        Sign In
      </Button>
    </form>
  );
}
