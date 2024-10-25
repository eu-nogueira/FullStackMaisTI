import { useState } from 'react'
import { Component } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function aumentar() {
    if (count < 10) {
      setCount(count + 1)
    }
  }
  function diminuir() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  function resetar() {
    setCount(count - count)
  }

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={aumentar}>Incrementar</button>
      <button onClick={diminuir}>Decrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  )
}

export default App
