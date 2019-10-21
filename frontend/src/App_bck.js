import React, {Component} from 'react'
import NextFlight from './flights/NextFlight'
import './main/App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
          <NextFlight/>
        </div>
    )
  }
}

export default App;
