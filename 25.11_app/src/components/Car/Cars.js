import React, { Component } from 'react'
import Car from './Car'

export default class Cars extends Component {
    state={
        cars: [
            {module: "tesla", price:130000, img:"https://cdn.pixabay.com/photo/2021/01/21/11/09/tesla-5937063__340.jpg"},
            {module: "nissan gtr", price:110000, img:"https://cdn.pixabay.com/photo/2019/10/19/04/41/skyline-gtr-4560581__340.jpg"},
            {module: "bmw", price:120000, img:"https://cdn.pixabay.com/photo/2020/10/18/16/40/bmw-5665352__340.jpg"},
            {module: "ford", price:130000, img:"https://cdn.pixabay.com/photo/2021/11/20/02/55/ford-mustang-6810739__340.jpg"},
        ]
    }
    render() {
        return (
            <div>
                {this.state.cars.map((car, i)=>
                <Car carObj = {car}/>
                )}
            </div>
        )
    }
}
