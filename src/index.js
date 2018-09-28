import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router-dom';
import { browserHistory } from 'react-router';

import { createBrowserHistory } from 'history';
import { Provider } from "react-redux";
import store from "./store/index";

const Loading = () => <div>Loading...</div>;

const App = Loadable({
    loader: () => import('./App'),
    loading: Loading,
});

const SecondPage = Loadable({
    loader: () => import('./SecondPage'),
    loading: Loading,
});

const About = Loadable({
    loader: () => import('./About'),
    loading: Loading,
});

const Story = Loadable({
    loader: () => import('./Story'),
    loading: Loading,
});


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/second-page" component={SecondPage} />
                <Route path="/about" component={About} />
                <Route path="/story" component={Story} />
            </Switch>
        </Provider>
    </Router>

    , document.getElementById('app'));
