import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import SecondPage from './SecondPage';
import { Link, Route } from 'react-router-dom';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Webapck Demo App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List />
        <Link to="/second-page"><h2>Second Page</h2></Link>
        <Link to="/about"><h2>About us</h2></Link>
        <Link to="/story"><h2>Story</h2></Link>
      </div>

    );
  }
}
export default App;
