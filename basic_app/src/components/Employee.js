import React from "react";
import "./Employee.css"

class Employee extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.obj.name}</h1>
        <img src={this.props.obj.img}></img>
        <h2>{this.props.obj.age}</h2>
        <h3>{this.props.obj.job}</h3>
      </div>
    )
  }
}

export default Employee;
