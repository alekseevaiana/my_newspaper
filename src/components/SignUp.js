import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Input from "./Input";
import "./sign-up.css";
import Navigation from "./Navigation";

export default class SignUp extends Component {
  handleSignUp = (event) => {
    event.preventDefault();
    const { username, email, password, phone_number } = this.props.inputs;
    Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      validationData: [], //optional
    })
      .then((data) => console.log(data))
      .then(() => this.props.switchComponent("Verify")) // switches Sign Up to Verification
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Navigation type="dark" />
        <form className="sign-up_form">
          <Input
            style={{ color: "#4F4F4F" }}
            type="text"
            name="username"
            value={this.props.username}
            placeholder="Username"
            onChange={this.props.handleFormInput}
            className="sign-up_input"
            label_name="Username"
          />
          <Input
            type="email"
            name="email"
            value={this.props.email}
            placeholder="Email"
            onChange={this.props.handleFormInput}
            className="sign-up_input"
            label_name="Email"
          />
          <Input
            type="password"
            name="password"
            value={this.props.password}
            placeholder="Password"
            onChange={this.props.handleFormInput}
            className="sign-up_input"
            label_name="Password"
          />
          <Input
            type="text"
            name="phone_number"
            value={this.props.phone_number}
            placeholder="Phone Number"
            onChange={this.props.handleFormInput}
            className="sign-up_input"
            label_name="Phone number"
          />
          <input
            type="submit"
            value="SIGN UP"
            onClick={this.handleSignUp}
            className="sign-up_button"
          />
        </form>
      </>
    );
  }
}
