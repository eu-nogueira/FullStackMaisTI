import { useState } from 'react'

function App() {
  const [contagem, setContagem] = useState(0)
  
  function Aumentar() {
    setContagem(contagem + 1)
  }
  
  function Diminuir() {
    setContagem(contagem - 1)
  }

  return (
    <div style={{textAlign: 'center', marginTop: '250px'}}>
      <h1>{contagem}</h1>
    <button onClick={Aumentar}>Aumentar</button>
    <button onClick={Diminuir}>Diminuir</button>
    </div>
  )
}

export default App
