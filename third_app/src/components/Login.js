import React, { Component } from "react";

class Login extends Component{
    logLogin = (e)=>{
        console.log(`user name is: ` + e.target.form[0].value);
        console.log(`password is: ` + e.target.form[1].value);
        // console.log(e.target.form[2].value);
        e.preventDefault();
    };
    render(){
        return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="enter user name"></input><br/>
                {/* <input type="email" placeholder="enter email"></input><br/> */}
                <input type="password" placeholder="enter password"></input><br/>
                <button onClick={this.logLogin} type="submit">log in</button>
            </form>
        </div>)
    }
}
export default Login;