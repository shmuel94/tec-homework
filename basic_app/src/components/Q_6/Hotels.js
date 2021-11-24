import React from "react";

class Hotels extends React.Component{
    render(){
        return (<div style={{width:"33%"}}>
            <img style={{width:"200px", height:"200px", borderRadius:"50%"}} src={this.props.obj.img}></img>
            <h1>
                {this.props.obj.name}
            </h1>
            <h2>{this.props.obj.job}</h2>
        </div>)
    }
}
export default Hotels;