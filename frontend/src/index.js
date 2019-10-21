//Importing React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//Importing BrowserRouter, Switch and Route
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Importing App
import App from './main/App';
//Importing the Flights Page
import NextFlight from "./components/NextFlight";
import LatestFlight from "./components/LatestFlight"
import UpcomingFlight from "./components/UpcomingFlight"
import PastFlight from "./components/PastFlight"

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/NextFlight" exact={true} component={NextFlight} />
            <Route path="/LatestFlight" exact={true} component={LatestFlight} />
            <Route path="/UpcomingFlight" exact={true} component={UpcomingFlight} />
            <Route path="/PastFlight" exact={true} component={PastFlight} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
