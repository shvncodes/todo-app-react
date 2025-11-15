import { useState } from 'react';
import styles from './add-todo.module.css';

function AddTodo(props) {
    const {setTodoList} = props;
    const [task, setTask] = useState("");

    const handleChange = (event) => {
        const text = event.target.value;
        setTask(text);
    }

    const addTaskInTodo = ()=> {
        const taskObj = {
            id: Date.now(),
            task: task,
            isCompleted: false
        }
        setTodoList((prev) => {
            return [taskObj, ...prev]
        });

        setTask("");
    }

    return (
        <div className={styles["container"]}>
            <input type="text" placeholder='Add your task' value={task} onChange={handleChange}/>
            <button onClick={addTaskInTodo}>ADD</button>
        </div>
    )
}

export default AddTodo;