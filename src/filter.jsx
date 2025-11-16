import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { CATEGORIES, STATUSES } from "./constants";
import styles from "./filter.module.css";

function Filter(props) {
  const { todoList, setFilteredList } = props;
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const StatusFilteredTodos = todoList.filter((todo) => {
      if (status === "Pending") {
        return !todo.isCompleted;
      } else if (status === "Completed") {
        return todo.isCompleted;
      }
      return true;
    });

    const finalTodoList = StatusFilteredTodos.filter((todo) => {
      if (category === "") return true;
      if (todo.category === category) return true;
      return false;
    });

    setFilteredList(finalTodoList);
  }, [todoList, status, category]);

  return (
    <div className={styles["filterSection"]}>
      <h1>Filters</h1>
      <Dropdown
        label={"Status"}
        id={"Status"}
        options={STATUSES}
        value={status}
        setValue={setStatus}
      />
      <Dropdown
        label={"Categories"}
        id={"Category"}
        options={CATEGORIES}
        value={category}
        setValue={setCategory}
      />
    </div>
  );
}

export default Filter;
