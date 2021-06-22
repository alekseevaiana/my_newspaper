import React from 'react';
import './App.css';
import './pages/MainPage';
import { withAuthenticator } from '@aws-amplify/ui-react'
import MainPage from './pages/MainPage';
import SignUpForm from './pages/SignUpForm';

function App() {
  
  return (
    <div className="app">
  {/* <SignUpForm/> */}
  <MainPage/>
    </div>
  );
}

export default withAuthenticator(App);