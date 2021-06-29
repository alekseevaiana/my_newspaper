import "./signInForm.css";
import Button from "./Button";

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
  return (
    <form className="sign-in-form">
      <Input
        type="text"
        name="email"
        label_name="Email"
        className="sign-in-form_input"
      />
      <Input
        type="text"
        name="password"
        label_name="Password"
        className="sign-in-form_input"
      />
      <Button type="button_button" className="sign-in-form_button">
        Sign In
      </Button>
    </form>
  );
}
