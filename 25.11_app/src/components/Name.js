import React, { Component } from 'react'

export default class Name extends Component {
    state={name:""};
    changeHandlerName = (evt) => this.setState({name:evt.target.value});
    render() {
        return (
            <div>
                <input onChange={this.changeHandlerName} type="text"></input>
                <p>this is: {this.state.name}</p>
            </div>
        )
    }
}
