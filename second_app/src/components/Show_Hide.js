import React from "react";

class Show_Hide extends React.Component{
    state = {style: "inline"};
    click = ()=> {
        if(this.state.style == "none"){
            this.setState({style : "inline" });
        }else{
            this.setState({style : "none"});
        }
    }

    render(){
        const style = {display : this.state.style};
        const {text} = this.props
        return(<div>
            <button onClick={this.click} > click </button>
            <p style={style}> {text}</p>
            </div>
        )
    }
}
export default Show_Hide;