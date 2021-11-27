import React, { Component } from 'react'
import * as Style from "./Movie.module.css"

export default class Movie extends Component {
    render() {
        return (
            <div className={Style.card}>
                <h2> {this.props.movieObj.name}</h2>
                <h3> {this.props.movieObj.mainActore}</h3>
                <h4> {this.props.movieObj.YearOfPublication}</h4>
                <img src = {this.props.movieObj.img} alt=""/>
            </div>
        )
    }
}
