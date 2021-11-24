import React, { Component } from "react";
import "./Register.css"

class Register extends Component{
    state = {firstName: "", password: "", lasttName: "",email: "", confirmedPassword: ""}
    changeHandlerFirstName = (evt) => this.setState({firstName:evt.target.value})
    changeHandlerLasttName = (evt) => this.setState({lasttName:evt.target.value})
    changeHandlerEmail = (evt) => this.setState({email:evt.target.value})
    changeHandlerPassword = (evt) => this.setState({password: evt.target.value})
    changeHandlerConfirmedPassword = (evt) => this.setState({confirmedPassword: evt.target.value})
    isValidation = () => this.state.password.length > 0 && this.state.firstName.length > 0  && this.state.lasttName.length > 0 && this.state.email.length > 0 && this.state.confirmedPassword.length > 0 && this.state.confirmedPassword == this.state.password
    login = () => console.log(this.state);

    render(){
        const disabledButton = !this.isValidation();
        return(
            <div className="Register">
            <h1> Register</h1>
            <input
            onChange={this.changeHandlerFirstName} 
            type="text" placeholder="enter firs name"
            />
            <br/>
            <input
            onChange={this.changeHandlerLasttName} 
            type="text" placeholder="enter last name"
            />
            <br/>
            <input
            onChange={this.changeHandlerEmail} 
            type="email" placeholder="enter email"
            />
            <br/>
            <input
            onChange={this.changeHandlerPassword}
            type="password" placeholder="enter password"
            />
            <br/>
            <input
            onChange={this.changeHandlerConfirmedPassword}
            type="password" placeholder="confirmed password"
            />
            <br/>
            <input name="checbok" type="checkbox"></input>
            <label htmlFor="checkbox"> I accept the terms of use & privacy policy.</label>
            <br/>
            <button onClick={this.login} disabled={disabledButton}>Login</button>
        </div>
        )
    }
}
export default Register;