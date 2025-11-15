import { useState } from 'react';
import styles from './add-todo.module.css';

function AddTodo(props) {
    const {setTodoList} = props;
    const [todo, setTodo] = useState({task: "", description: ""});

    const handleChange = (event) => {
        const text = event.target.value;
        setTodo(prev => {
           return {
                ...prev,
                task: text
            }
        });
    }

    const handleDespChange = (e)=> {
        const desp = e.target.value;
        setTodo((prev) =>{
            return {
                ...prev,
                description: desp
            }
        }
        );
    }

    const addTaskInTodo = ()=> {
        if(todo.task.trim().length === 0) return;

        const taskObj = {
            id: Date.now(),
            task: todo.task.trim(),
            description: todo.description.trim(),
            isCompleted: false,
            createdAt: new Date().toDateString()
        }
        setTodoList((prev) => {
            return [taskObj, ...prev]
        });

        setTodo({
            task: "",
            description: ""
        })
    }

    return (
        <div>
            <div className={styles["container"]}>
                <input type="text" placeholder='Add your task' value={todo.task} onChange={handleChange}/>
                <button onClick={addTaskInTodo}>ADD</button>
            </div>
            <textarea className={styles["description"]} name='text' placeholder='Add description' value={todo.description} onChange={handleDespChange}/>
        </div>
    )
}

export default AddTodo;