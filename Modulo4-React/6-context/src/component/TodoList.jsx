import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoList = () => {
    const { todos } = useContext(TodoContext)

    return (
        <ul>
            {todos.map(todo => (
                <li key={todos.id}>
                    {todos.task}
                </li>
            ))}
        </ul>
    )
}

export default TodoList