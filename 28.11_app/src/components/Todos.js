import React, { Component } from 'react'

export default class Todos extends Component {
    state = {
        todos: [
            { title: "task1", completed: false , id:1},
            { title: "task2", completed: true, id:2},
            { title: "task3", completed: false, id:3 },
            { title: "task4", completed: false, id:4},
        ],
        todoInput:""
    }
    

    newTodo = (e) => {this.setState({todoInput: e.target.value})}

    deleteTodo = (id) => {
        const temp = this.state.todos; 
        temp.splice(id, 1);
        this.setState({ todos: temp });
    }

    updateTodo = (i) => {
        const temp2= this.state.todos[i];
        temp2.completed = true;
        console.log(temp2);
        // this.setState({temp2})
        this.setState({todos: [...this.state.todos.concat(temp2)]})
    }

    addNewTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            title: this.state.todoInput,
            completed: false,
            id:this.state.todos[this.state.todos.length -1].id+1
        };
        this.setState({todos: [...this.state.todos.concat(newTodo)]})
        console.log(newTodo);
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1> 
                {this.state.todos.map((todo, i) =>
                    <div key={i}>
                        {
                        !todo.completed ?
                            <h3>{todo.title} id:{todo.id} <button onClick= {this.deleteTodo}>delete</button> <button onClick={()=>this.updateTodo(i)}> update</button></h3>
                            :""
                        }
                    </div>
                )}
                <form onSubmit={this.addNewTodo}>
                <input onChange={this.newTodo} placeholder="Add a new todo"/>
                <button type="submit"> add</button>
                </form>
            </div>
        )
    }
}
