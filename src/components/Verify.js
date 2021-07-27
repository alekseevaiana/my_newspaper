import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

export default function Verify(props) {
  const history = useHistory();
  const handleVerification = (event) => {
    event.preventDefault();
    const { username, code } = props.inputs;
    // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(username, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true,
    })
      .then((data) => console.log(data))
      .then(() => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <form className="authentication__form">
      <input
        type="text"
        name="code"
        value={props.code}
        placeholder="Verification Code"
        onChange={props.handleFormInput}
        className="authentication__input"
      />
      <input
        type="submit"
        value="SUBMIT VERIFICATION"
        onClick={handleVerification}
        className="authentication__button"
      />
    </form>
  );
}
