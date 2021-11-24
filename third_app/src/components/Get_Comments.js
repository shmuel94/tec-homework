import React from "react";
import axios from "axios";

class Get_Comments extends React.Component{
    getUrl = ()=>{
        const url = "https://jsonplaceholder.typicode.com/comments";
        axios.get(url)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    render(){
        return(
        <div>
            <h1> jason placeholder</h1>
            <button onClick={this.getUrl}> get comments</button>
        </div>)
    }
}

export default Get_Comments;
