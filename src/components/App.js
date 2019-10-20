import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogListContainer from './HogListContainer';
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
        <HogListContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
