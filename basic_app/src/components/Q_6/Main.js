import React from "react";

class Main extends React.Component{
    render(){
        return (<div>
            <h1>
                {this.props.name}
            </h1>
            <img src={this.props.img}></img>
            <video controls ><source src={this.props.url}></source></video>
        </div>)
    }
}
export default Main;