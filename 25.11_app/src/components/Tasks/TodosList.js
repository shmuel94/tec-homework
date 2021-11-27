import React from "react";
import GetTodosList from "./GetTodosList";
class TodosList extends React.Component {
  state = {
    todos: [
      {
        title: "do homework",
        status: "true",
      },
      {
        title: "clean the house",
        status: "false",
      },
    ],
  };
  AddTodo=()=>{
    this.setState({
      button: this.state.todos.push({
      title:"rddy",
      status:"true"
      }),
    }); 
  }
  render() {
    return (
      <div>
<div>
{this.state.todos.map((todo, i) => (
<GetTodosList todos={todo} />
))}
<button onClick={this.AddTodo}>Add Todo</button>
</div>
</div>
    );
  }
}
export default TodosList;