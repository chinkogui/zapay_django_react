import React, { Component } from 'react';
import '../components/NextFlight'
import './App.css';
import '../vendor/bootstrap/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
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
                                <Link to="/LatestFlight">Latest Launch</Link>
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

                <div className="row">
                    <div className="col-md-5 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2018/12/45473446114_fd0e11923d_k.jpg" alt="" width="200px" height="300px" />
                                <div className="card-body">
                                    <h4 className="card-title">Next Launch</h4>
                                    <p className="card-text">See more information about the next Space X launch</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/NextFlight">Find Out More!</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Bangabandhu_Satellite-1_Mission_%2842025499722%29.jpg/270px-Bangabandhu_Satellite-1_Mission_%2842025499722%29.jpg" alt="" width="200px" height="300px" />
                                <div className="card-body">
                                    <h4 className="card-title">Latest Launch</h4>
                                    <p className="card-text">See more information about the latest Space X launch</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/LatestFlight">Find Out More!</Link>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://imagens.canaltech.com.br/196898.416704-Falcon-Heavy-SpaceX.jpg" alt="" width="200px" height="300px" />
                            <div className="card-body">
                                <h4 className="card-title">Upcoming Launches</h4>
                                <p className="card-text">See more information about the upcoming Space X launches</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/UpcomingFlight">Find Out More!</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://thumbs-prod.si-cdn.com/tgny1TLAwlXLHFqgGcUBcGcJLVc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/f0/c7/f0c7098c-4267-407a-964c-0eb844cd6fe1/file-20180207-74470-1x5fdkt.png" alt="" width="200px" height="300px" />
                            <div className="card-body">
                                <h4 className="card-title">Past Launches</h4>
                                <p className="card-text">See more information about the past Space X launches</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/PastFlight">Find Out More!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    }
    export default App;