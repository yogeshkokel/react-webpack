import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import { connect } from "react-redux";
import Form from './Form';

class SecondPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This Is Second Page</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/SecondPage.js</code> and save to reload.
        </p>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { articles: state.articles };
};

export default SecondPage;
