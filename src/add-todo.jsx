import { useState } from 'react';
import styles from './add-todo.module.css';

function AddTodo(props) {
    const {setTodoList} = props;
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (event) => {
        const text = event.target.value;
        setTask(text);
    }

    const handleDespChange = (e)=> {
        const desp = e.target.value;
        setDescription(desp);
    }

    const addTaskInTodo = ()=> {
        if(task.trim().length === 0) return;

        const taskObj = {
            id: Date.now(),
            task: task.trim(),
            description: description.trim(),
            isCompleted: false,
            createdAt: new Date().toDateString()
        }
        setTodoList((prev) => {
            return [taskObj, ...prev]
        });

        setTask("");
        setDescription("");
    }

    return (
        <div>
            <div className={styles["container"]}>
                <input type="text" placeholder='Add your task' value={task} onChange={handleChange}/>
                <button onClick={addTaskInTodo}>ADD</button>
            </div>
            <textarea className={styles["description"]} name='text' placeholder='Add description' value={description} onChange={handleDespChange}/>
        </div>
    )
}

export default AddTodo;