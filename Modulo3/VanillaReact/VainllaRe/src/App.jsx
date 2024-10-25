import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="OIP-removebg-preview" alt="logo js" />
      </div>
      <div>
        <h1>Vanilla Javascript</h1>
        <p>i.e, JavaScript without any (UI) framework or library</p>
      </div>
    </div>
  )
}

export default App
