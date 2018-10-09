import React from 'react';
import './css/jm-style.css';
import './css/slick.css';
import './css/slick-theme.css';
import './js/script.js';
import './js/slick.js';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {
    Router,
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router-dom';
import history from './history';
import { Provider } from "react-redux";
import store from "./store/index";

// import Home from './Home';
// const hist = createBrowserHistory();

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import('./Home'),
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

const FourOFour  = Loadable({
    loader: () => import('./404'),
    loading: Loading,
})

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/second-page" component={SecondPage} />
                <Route path="/about" component={About} />
                <Route path="/2018/10/03/10-yoga-centres-to-get-your-zen-on" component={Story} />
                <Route path="/2018/10/03/:post_name" component={Story} />
                <Route component={FourOFour} />
            </Switch>
        </Router>
    </Provider>

    , document.getElementById('app'));
