import React, { Component } from "react";

class Login_Validation extends Component{
    state = {name: "", password: ""}
    changeHandlerName = (evt) => this.setState({name:evt.target.value})
    changeHandlerPassword = (evt) => this.setState({password: evt.target.value})
    isValidation = () => this.state.password.length > 5 && this.state.name.length > 3 
    login = () => console.log(this.state.name, this.state.password);

    render(){
        const passwordStyle = {color: this.state.password.length <= 5 ? "red" : "black",};
        const nameStyle = {color: this.state.name.length <= 3 ? "red" : "black",};
        const disabledButton = !this.isValidation();
        return(
            <div>
            <h1> Login_Validation</h1>
            <input style={nameStyle}
            onChange={this.changeHandlerName} 
            type="text" placeholder="enter user name"
            />
            <br/>
            <input style={passwordStyle}
            onChange={this.changeHandlerPassword}
            type="password" placeholder="enter password"
            />
            <br/>
            <button onClick={this.login} disabled={disabledButton}>Login</button>
        </div>
        )
    }
}
export default Login_Validation;