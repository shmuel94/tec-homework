import React, { Component } from 'react'

export default class FindNumber extends Component {
    state={rendom: [], message:"", counter:0, time: null}

    componentDidMount(){
        const temp= [];
        for (let index = 0; index < 10; index++) {
            temp.push({number:Math.floor(Math.random()*20), isClicked : false});
        }
        this.setState({rendom: temp})

        this.setState({time:setInterval(() => {
            this.setState({counter: this.state.counter+1})
        }, 1000)})
    }

    isGameOver = () =>{
        for (let index = 0; index < this.state.rendom.length; index++) {
            const item = this.state.rendom[index];
            if((item.number % 2 === 0) && !item.isClicked){
                return false;
            }
        }
        return true;
    }

    render() {
        const elements = this.state.rendom.map((item, index) => (
            <button disabled={this.state.rendom[index].isClicked} onClick={()=>{
                this.state.rendom[index].isClicked=true;
                if(this.isGameOver()){
                this.setState({message:"Game Over!!!!!!"})
                clearInterval(this.state.time);
                }
                this.setState({rendom : this.state.rendom})
            }} key={index}>{item.number}</button>
        ));
        return <div> <h1>Choose Even:</h1> {elements} <h3> {this.state.counter}</h3> <h2> {this.state.message}  </h2></div>;
    }
}


    
    
    // return (
    //     <div>
    //         <h2>Choose Even</h2>
    //         {this.state.rendom.map((itme,i)=><button key={i}>{itme.number}</button>)}
    //     </div>
    // )
    
    
    
    
    