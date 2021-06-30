import "./signInForm.css";
import Button from "./Button";
import { Auth } from "aws-amplify";

function Input({ type, name, value, onChange, label_name, className }) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label_name}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
}

export default function SignInForm({
  inputs,
  switchComponent,
  handleFormInput,
  username,
  password,
}) {
  function handleSignIn(event) {
    event.preventDefault();
    const { username, password } = inputs;
    // You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger
    Auth.signIn({ username, password })
      .then((user) => console.log(user))
      .then(() => switchComponent("MainPage"))
      .catch((err) => console.log(err));
  }

  return (
    <form className="sign-in-form">
      <Input
        type="text"
        name="username"
        label_name="username"
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
      <Button
        type="submit"
        onClick={handleSignIn}
        className="sign-in-form_button"
      >
        Sign In
      </Button>
    </form>
  );
}
