import React, { Component } from "react";
import { Auth } from "aws-amplify";

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
      <form className="authentication__form">
        <input
          type="text"
          name="username"
          value={this.props.username}
          placeholder="Username"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="email"
          name="email"
          value={this.props.email}
          placeholder="Email"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="password"
          name="password"
          value={this.props.password}
          placeholder="Password"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="text"
          name="phone_number"
          value={this.props.phone_number}
          placeholder="Phone Number"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="submit"
          value="SIGN UP"
          onClick={this.handleSignUp}
          className="authentication__button"
        />
      </form>
    );
  }
}
