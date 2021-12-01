import React, { Component, Fragment } from 'react'
import './App.css'
// import CounterSimple from './CounterSimple';
import FindNumber from './FindNumber';


// import GetPostById from './GetPostById';

export default class App extends Component {
  defaulteId = 1;
  state={id: this.defaulteId};
  render () {
    return (
      <Fragment>
        <div className="App">
        {/* id:{" "}
        <input defaulteId={this.defaulteId}
        onChange={(evt)=> this.setState({id: evt.target.value})} 
        type="text"
        />
        <GetPostById id={this.state.id}/> */}
        {/* <CounterSimple/> */}
        <FindNumber/>
        </div>
      </Fragment>
    )
  }
}
