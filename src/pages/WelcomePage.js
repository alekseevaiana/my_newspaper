import "./welcomePage.css";
import SignInForm from "../components/SignInForm";
import { useHistory, Link } from "react-router-dom";
import Button from "../components/Button";
import SignUp from "../components/SignUp";

export default function WelcomePage({ handleFormInput, inputs }) {
  const history = useHistory();
  const handleSignUpButton = () => {
    history.push("/sign_up");
  };

  return (
    <div className="welcome-page">
      <div className="welcome-page_flex-wrapper">
        <div>
          <h1 className="welcome-page_header">Welcome to My_NewsPapper!</h1>
          <p className="welcome-page_description">
            Share with your friends what did you learn today!
          </p>
          <SignInForm handleFormInput={handleFormInput} inputs={inputs} />
        </div>
        <div className="welcome-page_flex-wrapper__right">
          <Link
            to="/sign_up"
            className="sign-up-button"
            onClick={handleSignUpButton}
          >
            Sign Up!
          </Link>
        </div>
      </div>
    </div>
  );
}
