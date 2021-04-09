import React from 'react';
import './App.css';
import './pages/MainPage';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);