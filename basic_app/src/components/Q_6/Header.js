import React from "react";

class Header extends React.Component{
    render(){
        return (<div>
            <h1>
                {this.props.name}
            </h1>
            <img src={this.props.img}></img>
        </div>)
    }
}
export default Header;