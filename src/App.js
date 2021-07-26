import React from "react";
import "./App.css";
import "./pages/MainPage";
import { withAuthenticator } from "@aws-amplify/ui-react";
import MainPage from "./pages/MainPage";
import WelcomePage from "./pages/WelcomePage";
// import SignUpForm from "./pages/SignUpForm";
import Authentication from "./components/Authentication";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Authentication />
      </BrowserRouter>
    </div>
  );
}

// export default withAuthenticator(App);
