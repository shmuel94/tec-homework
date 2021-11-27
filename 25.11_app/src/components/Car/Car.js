import React, { Component } from 'react'
import * as Style from "./Car.module.css"

export default class Car extends Component {
    render() {
        return (
            <div className={Style.card}>
                <h2> {this.props.carObj.module}</h2>
                <h3> {this.props.carObj.price}$</h3>
                <img src = {this.props.carObj.img} alt=""/>
            </div>
        )
    }
}
