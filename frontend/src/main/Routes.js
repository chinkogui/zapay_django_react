import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from "../components/Home";
import NextFlight from "../components/NextFlight";
import LatestFlight from "../components/LatestFlight"
import UpcomingFlight from "../components/UpcomingFlight"
import PastFlight from "../components/PastFlight"


export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/NextFlight' component={NextFlight}/>
                    <Route exact path='/LatestFlight' component={LatestFlight}/>
                    <Route exact path='/UpcomingFlight' component={UpcomingFlight}/>
                    <Route exact path='/PastFlight' component={PastFlight}/>
                </Switch>
            </main>
        )
    }
};

export default Routes;