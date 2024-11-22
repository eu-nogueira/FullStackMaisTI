import React, { useState } from 'react';

function ListaTarefa() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task => 
    filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Tarefas</h1>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite sua tarefa aqui..."
      />
      <button onClick={addTask}>Adicionar</button>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("active")}>Pendentes</button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleTask(index)} style={{ marginLeft: '10px' }}>
              {task.completed ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => removeTask(index)} style={{ marginLeft: '10px' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefa;