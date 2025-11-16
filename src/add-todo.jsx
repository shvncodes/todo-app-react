import { useState } from "react";
import TodoForm from "./todo-form";

function AddTodo(props) {
  const { setTodoList } = props;
  const [todo, setTodo] = useState({ task: "", description: "", category: "" });

  const handleSave = () => {
    if (todo.task.trim().length === 0) return;

    const taskObj = {
      id: Date.now(),
      task: todo.task.trim(),
      description: todo.description.trim(),
      category: todo.category,
      isCompleted: false,
      createdAt: new Date().toDateString(),
    };
    setTodoList((prev) => {
      return [taskObj, ...prev];
    });

    setTodo({
      task: "",
      description: "",
      category: "",
    });
  };

  return (
    <TodoForm
      heading={"Add To-do"}
      todo={todo}
      setTodo={setTodo}
      buttonText={"ADD"}
      handleSave={handleSave}
    />
  );
}

export default AddTodo;
