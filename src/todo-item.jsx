import styles from "./todo-item.module.css";

function TodoItem(props) {
    const {todo, setTodoList} = props;

    const removeTodo = ()=> {
        setTodoList((prev)=> {
            return (prev.filter((item)=>{
                return item.id !== todo.id;
            }))
        })
    }

    const handleChange = ()=> {
        setTodoList((prev)=> {
            return(prev.map((item)=> {
                if(item.id !== todo.id) return item;
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }))
        })
    }

    return(
        <div className={styles["todoItem"]}>
            <label htmlFor={todo.id} className={styles["circleCheckbox"]}>
                <input type="checkbox" id={todo.id} checked={todo.isCompleted} onChange={handleChange}/>
                <span className={styles["checkmark"]}></span>
            </label>
            <p className={todo.isCompleted && styles["taskComplete"]}>{todo.task}</p>
            <button onClick={removeTodo} className={styles["removeBtn"]}>X</button>
        </div>
    )
}

export default TodoItem;