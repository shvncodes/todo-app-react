import { useState } from "react";
import styles from "./add-todo.module.css";
import Dropdown from "./dropdown";
import { CATEGORIES } from "./constants";

function AddTodo(props) {
  const { setTodoList } = props;
  const [todo, setTodo] = useState({ task: "", description: "", category: "" });

  const handleChange = (event) => {
    const text = event.target.value;
    setTodo((prev) => {
      return {
        ...prev,
        task: text,
      };
    });
  };

  const handleDespChange = (e) => {
    const desp = e.target.value;
    setTodo((prev) => {
      return {
        ...prev,
        description: desp,
      };
    });
  };

  const handleCategoryChange = (val) => {
    setTodo((prev) => {
      return {
        ...prev,
        category: val,
      };
    });
  };

  const addTaskInTodo = () => {
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
    <div className={styles["AddTodo"]}>
      <h1>Add To-do</h1>
      <div className={styles["title"]}>
        <label htmlFor="input">Title</label>
        <input
          className={styles["task"]}
          type="text"
          placeholder="Add your task"
          value={todo.task}
          onChange={handleChange}
        />
      </div>
      <div className={styles["detail"]}>
        <label htmlFor="textarea">Description</label>
        <textarea
          className={styles["description"]}
          name="text"
          placeholder="Add description"
          value={todo.description}
          onChange={handleDespChange}
        />
      </div>
      <div className={styles["Addtask"]}>
        <Dropdown
          label={"Category"}
          id={"Category"}
          options={CATEGORIES}
          value={todo.category}
          setValue={handleCategoryChange}
        />
        <button className={styles["AddBtn"]} onClick={addTaskInTodo}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
