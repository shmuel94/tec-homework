import React, { Component } from 'react'
import CounterMessage from './CounterMessage'
import CounterButton from './CounterButton'

export default class CounterSimple extends Component {
    state={count:0}
    increment=()=>{
        this.setState({count: this.state.count + 1})
    }
    render() {
        return (
            <>
              <h1> counter simple</h1>
              <CounterButton click = {this.increment}/>
              <CounterMessage count = {this.state.count}/>
            </>
        )
    }
}
