import './App.css';

import React, { Component } from 'react'
import Todos from './components/Todos';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos/>
      </div>
    )
  }
}
