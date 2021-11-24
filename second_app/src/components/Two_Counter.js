import React from "react";

class Two_Counter extends React.Component{

    state = {count : 0, count2 : 0};


    incremenet = ()=> {
        this.setState({count : this.state.count +1})
    }

    increment2 = ()=> {
        this.setState({count2 : this.state.count2 +2})
    }

    render(){
        return(<div>
            <button onClick={this.incremenet}> First Increment  </button>
            <button onClick={this.increment2}> Second Increment </button>
            <p> count is : {this.state.count} </p>
            <p> count 2 is : {this.state.count2} </p>
        </div>)
    }
}

export default Two_Counter;