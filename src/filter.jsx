import { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { CATEGORIES, STATUSES } from "./constants";
import styles from "./filter.module.css";

function Filter(props) {
  const { todoList, setFilteredList } = props;
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const StatusFilteredTodos = todoList.filter((todo) => {
      if (status === "Pending") {
        return !todo.isCompleted;
      } else if (status === "Completed") {
        return todo.isCompleted;
      }
      return true;
    });

    const categoryFilteredTodoList = StatusFilteredTodos.filter((todo) => {
      if (category === "") return true;
      if (todo.category === category) return true;
      return false;
    });

    const finalTodoList = categoryFilteredTodoList.filter((todo) => {
      return (
        todo.task.includes(searchQuery) ||
        todo.description.includes(searchQuery)
      );
    });

    setFilteredList(finalTodoList);
  }, [todoList, status, category, searchQuery]);

  const resetFilters = ()=> {
    setCategory("");
    setStatus("");
    setSearchQuery("");
  }

  return (
    <div className={styles["filterSection"]}>
      <h1>Filters</h1>
      <input
        type="text"
        className={styles["serach"]}
        placeholder="Search by todo and description"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
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
        <button className={styles["resetBtn"]} onClick={resetFilters}>Reset</button>
    </div>
  );
}

export default Filter;
