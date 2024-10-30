import React, { useState } from "react";

function Form() {
    const [tarefas, setTarefas] = useState([])

    const [novaTarefa, setNovaTarefa] = useState('')

    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value)
    }
    const handleAddTask = () => {
        if (novaTarefa.trim() === '') {
            return
        }

        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa('')
    }

    const handleRemoveTask = (index) => {
        const updateTasks = tarefas.filter((_, i) => i !== index)
        setTarefas(updateTasks)
    }
    const handleConclTask = (index) => {
       const addColor = index.style.backgroundColor = 'red'
       setTarefas(addColor)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input type="text"
            value={novaTarefa}
            onChange={handleInputChange}
            placeholder="Digite uma nova tarefa" 
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                        <button onClick={() => handleConclTask(index)}>Concluido</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Form