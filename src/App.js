import React from 'react';
import './App.css';
import './pages/MainPage';
import { withAuthenticator } from '@aws-amplify/ui-react'
import MainPage from './pages/MainPage';

function App() {
  
  return (
    <div className="app">
      <MainPage/>
    </div>
  );
}

export default withAuthenticator(App);