import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import SecondPage from './SecondPage';
import { Link, Route } from 'react-router-dom';
import List from './List';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Webapck Demo App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/About.js</code> and save to reload.
        </p>
      </div>

    );
  }
}
export default About;
