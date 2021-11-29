import React, { Component } from 'react'
import * as style from "./Table_Post.module.css"

export default class Table_Post extends Component {
    state={
        posts:[],
        postToEdit:{title:"", body:""},
        inputTitle: "",
        inputBody: ""
    }


    componentDidMount(){
        console.log("component mounted");
        this.getPosts();
    }

    getPosts = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(response => response.json())
        .then(data => this.setState({posts:data}))
        .catch(error => console.log(error))
    }

    deleteTodo = () => {
        const temp = this.state.posts; 
        temp.splice(0, 1);
        this.setState({ posts: temp });
    }

    render() {
        return (
            <div> 
          <input
            onChange={(evt) => {
              this.setState({ inputTitle: evt.target.value });
            }}
            defaultValue={this.state.inputTitle}
          />
          <br />
          body{" "}
          <input
            onChange={(evt) => {
              this.setState({ inputBody: evt.target.value });
            }}
            defaultValue={this.state.inputBody}
          />
          <br />
          <button
            onClick={() => {
              let newPost = [...this.state.posts];
              let post = newPost.find((it) => it.id === this.state.postToEdit.id);
              post.title = this.state.inputTitle;
              post.body = this.state.inputBody;
              this.setState({ posts: newPost });
            }}
          >
            Update
          </button>
             <table id="cartTableContainer" className={style.table}>
                 <tr id="cartTable">
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th></th>
                    <th></th>
                 </tr>
            {this.state.posts.map((post)=>
                <tr key={post.id}> 
                <td> {post.userId}</td>
                <td> {post.id}</td>
                <td> {post.title}</td>
                <td> {post.body} </td>
                <td> <button onClick= {this.deleteTodo}>Delete</button> </td>
                <td> <button onClick={() => {this.setState({ postToEdit: post, inputBody: post.body, inputTitle: post.title });}}>Edit</button> </td>
                </tr>
            )}
            </table>
            </div>
        )
    }
}
