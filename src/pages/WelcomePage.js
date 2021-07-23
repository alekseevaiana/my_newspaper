import "./welcomePage.css";
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";
import SignUp from "../components/SignUp";

export default function WelcomePage({
  switchComponent,
  handleFormInput,
  inputs,
}) {
  const handleSignUpButton = () => {
    switchComponent("SignUp");
  };
  return (
    <div className="welcome-page">
      <h1 className="welcome-page_header">Welcome to My_NewsPapper!</h1>
      <p className="welcome-page_description">
        Share with your friends what did you learn today!
      </p>
      <SignInForm
        switchComponent={switchComponent}
        handleFormInput={handleFormInput}
        inputs={inputs}
      />

      <Button className="sign-up-button" onClick={handleSignUpButton}>
        Sign Up!
      </Button>
    </div>
  );
}
