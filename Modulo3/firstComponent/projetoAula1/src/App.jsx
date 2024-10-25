import React, {useState} from 'react' //useState é um hook.

function App() {
    const [contagem, setContagem] = useState(0) // contagem valor atual(0), setContagem atualiza.

    const incrementar = () => {
        setContagem(contagem + 1) // set contagem recebe contagem + 1
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}> 
            <h1>Contador: {contagem} </h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App