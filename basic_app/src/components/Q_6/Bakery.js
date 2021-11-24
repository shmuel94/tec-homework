import React from "react";

class Bakery extends React.Component{
    render(){
        return (<div style={{width:"33%"}}>
            <img style={{width:"200px", height:"200px"}} src={this.props.obj.img}></img>
            <h1>
                {this.props.obj.name}
            </h1>
            <h2>{this.props.obj.description}</h2>
        </div>)
    }
}
export default Bakery;