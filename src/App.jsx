import { useEffect, useState } from "react";
import AddTodo from "./add-todo";
import TodoItem from "./todo-item";
import "./App.css";

const LS_KEY = "todo-list-react";

function readTodosFromLocalStorage() {
  try{
    const lsTodos = JSON.parse(localStorage.getItem(LS_KEY));
    if(!lsTodos) return [];
    return lsTodos;
  } catch(err) {
    console.log("Error: ", err);
    return[];
  }
}

function App() {
  const [todoList, setTodoList] = useState(()=> readTodosFromLocalStorage());

  useEffect(()=>{
    try{
      localStorage.setItem(LS_KEY, JSON.stringify(todoList));
    } catch(err) {
      console.log("Error: ", err);
    }
  }, [todoList]);

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