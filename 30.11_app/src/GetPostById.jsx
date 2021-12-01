import React, { Component } from 'react';
import axios from 'axios';
export default class GetPostById extends Component {
    state={post: []};
    getPostById =()=>{
        const {post} = this.state;
        const url = `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
        axios.get(url).then(res=>{
            this.setState({post:res.data})
        }).catch(err=> console.error(err))
    }
    componentDidMount(){
        this.getPostById();
    }

    componentDidUpdate(pervProps, prevState, snapshot){
        if(pervProps.id !== this.props.id){
            this.getPostById();
        }
    }

    render() {
        const {post} = this.state;
        return (
            <div>
                <p>
                    id: {post.id} userid: {post.userId} title: {post.title}
                </p>
            </div>
        )
    }
}
