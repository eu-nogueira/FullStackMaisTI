import { useState } from 'react'
import './App.css'
import Form from './components/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Form />
    </div>
  )
}

export default App
