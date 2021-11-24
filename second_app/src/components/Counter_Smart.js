import React from "react";

class Counter_SMART extends React.Component{

    state = {count : (this.props.number)};

    incremenet = ()=> {
        this.setState({count : this.state.count +1})
    }

    decrement = ()=> {
        this.setState({count : this.state.count -1})
    }

    render(){
        return(<div>
            <button onClick={this.incremenet}> Increment </button>
            <button onClick={this.decrement}> Decrement </button>
            <p> count is : {this.state.count} </p>
        </div>)
    }
}

export default Counter_SMART;