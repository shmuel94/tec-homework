import React from "react";
import "./Weather.css";
import axios from "axios";

class Weather extends React.Component{
    state = {city:"", minWeather:"", maxWeather:"", err:"", stylColor: "", styleBackgruond: ""}
    changeHandlerCity = (evt) => this.setState({city:evt.target.value})
    getData = ()=>{
        const ApiKey = "24eb1f3865b172500862dbea676d5d22";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${ApiKey}`
        axios
        .get(url)
        .then((res)=>{
            console.log(res.data);
            this.setState({maxWeather:"max temp: "+ parseInt(res.data.main.temp_max -273.15)+"c", minWeather:"min temp: "+ parseInt(res.data.main.temp_min -273.15)+"c", stylColor: "green", styleBackgruond: "#c2f6c2"});
        })
        .catch((err) =>{
            console.log(err);
            this.setState({err: "That city could not be found", stylColor:"red", styleBackgruond: "#F8B6E7"})
        })
    }
    render(){
        return(
            <div className="Weather">
                <h1>What's The Weather? App </h1>
                <h4> Enter the name of the city:</h4>
                <input onChange={this.changeHandlerCity}></input><br/><br/>
                <button type="submit" onClick={this.getData}> submit</button>
                <p style={{color: this.state.stylColor, backgroundColor: this.state.styleBackgruond}}> {this.state.err} {this.state.minWeather} {this.state.maxWeather}</p>
            </div>
        )
    }
}
export default Weather;