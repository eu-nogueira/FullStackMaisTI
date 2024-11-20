import { useState } from "react"
import { Component } from "react"



const FirstComponent = () => {
    let [count, setCount] = useState(0)
    function Incrementar() {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    function Decrementar() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function Resetar() {

            setCount(count * 0)
        
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Incrementar}>Incrementar</button>
            <button onClick={Decrementar}>Decrementar</button>
            <button onClick={Resetar}>Resetar</button>
        </div>
    )
}

export default FirstComponent