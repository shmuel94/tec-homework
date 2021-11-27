import React, { Component } from 'react'
export default class Post extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.postObj.title}</h3>
                <p> {this.props.postObj.id}</p>
                <p> {this.props.postObj.body}</p>
            </div>
        )
    }
}