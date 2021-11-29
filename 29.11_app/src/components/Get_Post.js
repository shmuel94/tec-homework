import React, { Component } from 'react'

export default class Get_Post extends Component {
    state={posts:[]}

    componentDidMount(){
        console.log("component mounted");
        this.getPosts();
    }

      componentDidUpdate(prevProps){
         return prevProps.id!==this.props.id?
         this.getPosts():""
    }

    getPosts = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(response => response.json())
        .then(data => this.setState({posts:data}))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div> 
             <div>
                <h5>userId: {this.state.posts.userId}</h5>
                <h5>title: {this.state.posts.title}</h5>
                <h5>body: {this.state.posts.body}</h5> 
            </div>
            </div>
        )
    }
}
