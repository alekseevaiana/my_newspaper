import "./signInForm.css";
import Button from "./Button";
import { Auth } from "aws-amplify";
import Input from "./Input";
import { useHistory } from "react-router-dom";

export default function SignInForm({
  inputs,
  handleFormInput,
  username,
  password,
}) {
  const history = useHistory();
  async function handleSignIn(event) {
    event.preventDefault();
    const { username, password } = inputs;
    console.log("UP", username, password);
    // You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger
    try {
      const user = await Auth.signIn({ username, password });
      console.log("user from sign in", user);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form autocomplete="off" className="sign-in-form" onSubmit={handleSignIn}>
      {/* {console.log(
        "state " + typeof inputs.username + " " + typeof inputs.password
      )} */}
      <Input
        type="text"
        name="username"
        label_name="Username"
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
      <Button type="submit" className="sign-in-form_button button_button">
        Sign In
      </Button>
    </form>
  );
}
