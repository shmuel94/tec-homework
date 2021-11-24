import React from "react";

class Toggle_Color extends React.Component{
    state = {color: "green"};
    clickHendlier = ()=> {
        if(this.state.color == "green"){
            this.setState({color : "yellow" });
        } else if(this.state.color == "yellow"){
            this.setState({color : "red" });
        }else{
            this.setState({color : "green"});
        }
    }
    


    render(){
        const styleGreen = {color : this.state.color};
        return(<div>
            <h2 onClick={this.clickHendlier}  style={styleGreen}> {this.props.text}</h2>
            </div>
        )
    }
}
export default Toggle_Color;
