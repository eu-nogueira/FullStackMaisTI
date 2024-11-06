import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const AddTodo = () => {
    const { AddTodo } = useContext(TodoContext)
    const {newTask, setNewTask} = useState('')

    const handleAdd = () => {
        AddTodo(newTask)
        setNewTask('')
    }

    return (
        <div>
            <input type="text" value={newTask}
            onChange={(event) => setNewTask (event.target.value)}
            placeholder="Nova Tarefa"/>
        </div>
    )
}

export default AddTodo