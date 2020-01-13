import React, { Component } from 'react';

import "./styles.css";

import api from './services/api';
import Header from './components/header';
import Main from './pages/main';

import "./styles.css";

const App = () => (
  <div className="App">
      <Header/>
      <Main />
    </div>
);

export default App;
