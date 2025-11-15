import { useState } from "react";
import AddTodo from "./add-todo";
import TodoItem from "./todo-item";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <div className="mainContainer">
      <h1 className="title">To-Do List</h1>
      <AddTodo setTodoList = {setTodoList}/>
      <div className="todoList">
        {todoList.map((todo)=> {
            return <TodoItem key={todo.id} todo={todo} setTodoList= {setTodoList}/>
          })}
      </div>
    </div>
  )
  
}

export default App;