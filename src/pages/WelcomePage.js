import "./welcomePage.css";
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";

export default function WelcomePage({
  switchComponent,
  handleFormInput,
  inputs,
}) {
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

      <Button className="sign-up-button">Sign Up!</Button>
    </div>
  );
}
