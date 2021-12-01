import React, { Component } from 'react'

export default class CounterButton extends Component {
    render() {
        return (
            <button onClick={this.props.click}>inc by 1 </button>
        )
    }
}
