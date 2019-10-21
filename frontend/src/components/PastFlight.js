import React, {Component} from 'react'
import PostData from '../data/past.json'
import {Link} from "react-router-dom";
import '../vendor/bootstrap/css/bootstrap.min.css'


class PastFlight extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link to="/">Space X</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/NextFlight">Next Launch</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/LatestFlight">Lastest Launch</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/UpcomingFlight">Upcoming Launch</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/PastFlight">Past Launch</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <header className="bg-primary py-5 mb-5">
                </header>
                <div>
                    <h1>Past Launches</h1>
                    {PostData.map((postDetail, index) => {
                        return <div className="row" align="left">
                            <p>
                                <b>Flight Number:</b> {postDetail.flight_number}<br/>
                                <b>Mission Name:</b> {postDetail.mission_name}<br/>
                                <b>Mission ID:</b> {postDetail.mission_id}<br/>
                                <b>Launch Year:</b> {postDetail.launch_year}<br/>
                                <b>Launch Date (UNIX):</b> {postDetail.launch_date_unix}<br/>
                                <b>Launch Date (UTC)</b> {postDetail.launch_date_utc}<br/>
                                <b>Launch Date (Local):</b> {postDetail.launch_date_local}<br/>
                                <h1>Rocket</h1>
                                <b>Rocket Name:</b> {postDetail.rocket.rocket_name}<br/>
                                <b>Rocket ID:</b> {postDetail.rocket.rocket_id}<br/>
                                <b>Rocket Type:</b> {postDetail.rocket.rocket_type}<br/>
                                {postDetail.rocket.first_stage.cores.map((coresDetail, index)=> {
                                    return <div>
                                        <h1>Cores</h1>
                                        <b>Core Serial:</b> {coresDetail.core_serial}<br/>
                                        <b>Flight:</b> {coresDetail.flight}<br/>
                                        <b>Blocks:</b> {coresDetail.block}<br/>
                                    </div>
                                })}
                            </p>
                        </div>
                    })}
                </div>
            </div>
        )
    }

}

export default PastFlight