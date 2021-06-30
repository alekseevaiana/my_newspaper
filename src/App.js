import React from "react";
import "./App.css";
import "./pages/MainPage";
import { withAuthenticator } from "@aws-amplify/ui-react";
import MainPage from "./pages/MainPage";
import WelcomePage from "./pages/WelcomePage";
// import SignUpForm from "./pages/SignUpForm";
import Authentication from "./components/Authentication";

export default function App() {
  return (
    <div>
      <Authentication />
    </div>
  );
}

// export default withAuthenticator(App);
