import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import route Components here
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import SecondPage from './SecondPage';
import { Provider } from "react-redux";
import store from "./store/index";



ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/second-page" component={SecondPage} />
            </Switch>
        </Provider>
    </Router>

    , document.getElementById('app'));
