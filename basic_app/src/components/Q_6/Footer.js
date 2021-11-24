import React from "react";

class Footer extends React.Component{
    render(){
        return (<div>
            <form>
                <input type="text" placeholder="name">{this.props.name}</input><br></br>
                <input type="email" placeholder="email">{this.props.email}</input><br></br>
                <input type="text" placeholder="message">{this.props.message}</input><br></br>
                <button type="submit">send</button>
            </form>
        </div>)
    }
}
export default Footer;
