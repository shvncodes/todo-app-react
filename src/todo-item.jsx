import styles from "./todo-item.module.css";

function TodoItem(props) {
  const { todo, setTodoList } = props;

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
            <button className={styles["editBtn"]}>Edit</button>
            <button onClick={removeTodo} className={styles["removeBtn"]}>
            X
            </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
