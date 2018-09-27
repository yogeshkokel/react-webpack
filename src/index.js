import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import SecondPage from './SecondPage';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/second-page" component={SecondPage} />
        </Switch>
    </Router>
    , document.getElementById('app'));
