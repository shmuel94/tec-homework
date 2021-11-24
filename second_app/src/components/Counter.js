import React from "react";

class Counter extends React.Component{

    state = {count : 0};

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

export default Counter;