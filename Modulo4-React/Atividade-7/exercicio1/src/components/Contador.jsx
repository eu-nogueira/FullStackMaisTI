import { useState } from "react";

function Contador() {
    const [count, setCount] = useState(0)

    function incrementar() {
        setCount(count + 1)
    }
    function decrementar() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '150px' }}>
            <h1>{count}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Contador