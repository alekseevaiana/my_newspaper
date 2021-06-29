import "./signInForm.css";
import Button from "./Button";
import { Auth } from "aws-amplify";
import { AmplifyEmailField, AmplifyPasswordField } from "@aws-amplify/ui-react";

function Input({ type, name, onChange, label_name, className }) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label_name}</label>
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
}

export default function SignInForm() {
  function handleNameChange(event) {
    console.log(event.target.value);
  }

  function handleNameChange(event) {
    console.log(event.target.value);
  }

  const onClick = async () => {
    try {
      // await Auth.signIn()
      const user = await Auth.signIn(AmplifyEmailField, AmplifyPasswordField);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onClick} className="sign-in-form">
      <Input
        type="text"
        name={AmplifyEmailField}
        label_name="Email"
        className="sign-in-form_input"
      />
      <Input
        type="text"
        name={AmplifyPasswordField}
        label_name="Password"
        className="sign-in-form_input"
      />
      <Button type="button_button" className="sign-in-form_button">
        Sign In
      </Button>
    </form>
  );
}
