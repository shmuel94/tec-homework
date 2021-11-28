import React, { Component } from 'react'

export default class Posts extends Component {
    state={posts:[] ,tenPosts:[]}
    index=0;

    componentDidMount(){
        console.log("component mounted");
        this.getPosts();
    }

    getPosts = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            this.setState({posts:data, tenPosts:data.slice(0,10)})
        }
        )
        .catch(error => console.log(error))
    }

    moreTen=()=>{
        if(this.index < this.state.posts.length - 10){
            this.index +=10;
            this.setState({tenPosts:this.state.posts.slice(this.index,this.index+10)});
           console.log("hi");
        }
    }

    lesTen=()=>{
        if(this.index > 9){
            this.index -=10;
            this.setState({tenPosts:this.state.posts.slice(this.index,this.index+10)});
           console.log("hi -10");

        }
   }

    render() {
        return (
            <div>
            <button onClick={this.lesTen}>PREVIOUS</button>  
            <button onClick={this.moreTen}>NEXT</button>  
            {this.state.tenPosts.map((post,i)=>
             <div key={i}> <h4>{post.id}</h4> <h4>{post.title}</h4> <h4>{post.body}</h4> </div>
            )}
            </div>
        )
    }
}
