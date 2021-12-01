import React, { Component } from 'react'

export default class CounterMessage extends Component {
    render() {
        return (
            <p> count: {this.props.count}</p>
        )
    }
}
