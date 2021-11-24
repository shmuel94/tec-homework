import React from "react";
import axios from "axios";

class Get_Data extends React.Component{
    state = {url: "", length: 0}
    changeHandlerUrl = (evt) => this.setState({url:evt.target.value})
    getUrl = ()=>{
        axios.get(this.state.url )
        .then((res)=>{
            console.log(res.data);
            this.setState({length: res.data.length});
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    render(){
        return(
        <div>
            <h1> jason placeholder</h1>
            <input onChange={this.changeHandlerUrl} type="url" placeholder="enter url"></input><br/>
            <button onClick={this.getUrl}> get data</button>
            <p> number of items: {this.state.length}</p>
        </div>)
    }
}
export default Get_Data;