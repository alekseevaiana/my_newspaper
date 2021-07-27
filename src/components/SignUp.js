import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Input from "./Input";
import "./sign-up.css";
import Navigation from "./Navigation";
//import { Route } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import portraitImg from "../img/picasso.jpeg";
import Button from "./Button";

export default function SignUp(props) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    const { username, email, password } = props.inputs;

    Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        //phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      //validationData: [], //optional
    })
      .then((data) => console.log(data))
      //.then(() => this.props.switchComponent("Verify")) // switches Sign Up to Verification
      .catch((err) => {
        setErrorMessage(err.message);
        console.log(err);
      });
  };

  return (
    <>
      <Navigation type="dark" />
      <div className="sign-up_wrapper">
        <form className="sign-up_form" onSubmit={handleSignUp}>
          <Input
            style={{ color: "#4F4F4F" }}
            type="text"
            name="username"
            value={props.username}
            placeholder="Username"
            onChange={props.handleFormInput}
            className="sign-up_input"
            label_name="Username"
          />
          <Input
            type="email"
            name="email"
            value={props.email}
            placeholder="Email"
            onChange={props.handleFormInput}
            className="sign-up_input"
            label_name="Email"
          />
          <Input
            type="password"
            name="password"
            value={props.password}
            placeholder="Password"
            onChange={props.handleFormInput}
            className="sign-up_input"
            label_name="Password"
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button type="submit" className="sign-in-form_button button_button">
            Sign Up
          </Button>
        </form>
        <div>
          <img src={portraitImg} />
        </div>
      </div>
    </>
  );
}
