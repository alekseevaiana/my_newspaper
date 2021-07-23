import React, { PureComponent } from "react";

import SignUp from "./SignUp";
import Verify from "./Verify";

import { Auth } from "aws-amplify";
import MainPage from "../pages/MainPage";
import WelcomePage from "../pages/WelcomePage";

export default class Authentication extends PureComponent {
  state = {
    username: "",
    email: "",
    password: "",
    phone_number: "",
    code: "",
    user: null, // will contain our user data object when signed in
    status: "",
  };

  // happens if user email verifided
  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then((data) => {
        let user = { username: data.username, ...data.attributes };
        if (user.email_verified) this.setState({ user, status: "Welcome" });
      })
      .catch((err) => console.log(err));
  }

  // Handle changes to form inputs on sign-up, verification and sign-in
  handleFormInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  AuthComponent = () => {
    switch (this.state.status) {
      case "SignUp":
        return (
          <SignUp
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );

      case "Verify":
        return (
          <Verify
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );

      // case "SignIn":
      //   return (
      //     <WelcomePage
      //       switchComponent={this.switchComponent}
      //       handleFormInput={this.handleFormInput}
      //       inputs={this.state}
      //     />
      //   );
      // It is not welcome page, it is first page after authorization
      case "Welcome":
        return <MainPage />;
      default:
        return (
          // This is a Welcome page where you can find signin form and sign up button
          <WelcomePage
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
    }
  };
  switchComponent = (status) => {
    this.setState({ status });
  };
  render() {
    return <div>{this.AuthComponent()}</div>;
  }
}
