import React from "react";
import "./App.css";
import "./pages/MainPage";
import { withAuthenticator } from "@aws-amplify/ui-react";
import MainPage from "./pages/MainPage";
import WelcomePage from "./pages/WelcomePage";
// import SignUpForm from "./pages/SignUpForm";

export default function App() {
  return (
    <div className="app">
      <WelcomePage />
      {/* <MainPage /> */}
    </div>
  );
}

// export default withAuthenticator(App);
