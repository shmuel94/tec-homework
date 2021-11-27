import React from "react";
import Post from "./Post";

class Posts extends React.Component{
    state={posts:[]}
    getPosts = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data =>  this.setState({posts:data}))
        .catch(error => console.log(error))
        }
    render(){
        return(
        <div>
            <button onClick={this.getPosts}> get posts</button>
            <div>
            <p> {this.state.posts.map((post,i)=>
            <Post key={i} postObj={post}/>
            )}</p>
            </div>
        </div>)
    }
}

export default Posts;
