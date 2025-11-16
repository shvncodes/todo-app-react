import { useState } from "react";
import styles from "./todo-item.module.css";
import TodoForm from "./todo-form";

function TodoItem(props) {
  const { todo, setTodoList } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editTodo, setEditTodo] = useState({
    task: todo.task,
    description: todo.description,
    category: todo.category,
  });

  const removeTodo = () => {
    setTodoList((prev) => {
      return prev.filter((item) => {
        return item.id !== todo.id;
      });
    });
  };

  const handleChange = () => {
    setTodoList((prev) => {
      return prev.map((item) => {
        if (item.id !== todo.id) return item;
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      });
    });
  };

  const handleEditSave =()=> {
    setTodoList((prev)=>{
        return prev.map((item)=>{
            if(item.id !== todo.id) return item;
            return{
                ...item,
                task: editTodo.task,
                description: editTodo.description,
                category: editTodo.category
            }
        })
    })
    setIsEditing(!isEditing);
  }

  if (isEditing) {
    return (
      <div className={styles["editSection"]}>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={styles["removeEdit"]}
        >
          X
        </button>
        <TodoForm
          heading={"Edit To-do"}
          todo={editTodo}
          setTodo={setEditTodo}
          buttonText={"Save"}
          handleSave={handleEditSave}
        />
      </div>
    );
  }

  return (
    <div className={styles["todoItem"]}>
      <div className={styles["leftContainer"]}>
        <label htmlFor={todo.id} className={styles["circleCheckbox"]}>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.isCompleted}
            onChange={handleChange}
          />
          <span className={styles["checkmark"]}></span>
        </label>
        <div className={todo.isCompleted ? styles["taskComplete"] : undefined}>
          <p className={styles["title"]}>{todo.task}</p>
          {todo.description && (
            <p className={styles["description"]}>{todo.description}</p>
          )}
          <p className={styles["createdAt"]}>{todo.createdAt}</p>
        </div>
      </div>
      <div className={styles["rightSection"]}>
        {todo.category && <p className={styles["category"]}>{todo.category}</p>}
        <div className={styles["btns"]}>
          <button
            className={styles["editBtn"]}
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </button>
          <button onClick={removeTodo} className={styles["removeBtn"]}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
