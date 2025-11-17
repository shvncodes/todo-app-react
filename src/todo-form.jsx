import styles from "./todo-form.module.css";
import Dropdown from "./dropdown";
import { CATEGORIES } from "./constants";

function TodoForm(props) {
  const { heading, todo, setTodo, buttonText, handleSave } = props;

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

  return (
    <div className={styles["AddTodo"]}>
      <h1>{heading}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className={styles["title"]}>
          <label htmlFor="task">Title</label>
          <input
            id="task"
            className={styles["task"]}
            type="text"
            placeholder="Add your task"
            value={todo.task}
            onChange={handleChange}
          />
        </div>
        <div className={styles["detail"]}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
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
          <button type="submit" className={styles["AddBtn"]}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
