import { useState, useEffect } from "react";

function LifeCycleFuncional() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Componente montado!")

        return () => (console.log("Componente será desmontado"))
    }, []) // montagem usar dependencia vazia!

    useEffect(() => {
        console.log("Componente atualizado")
    }, [count])
    
    const increment = () => {
        setCount(count + 1)

    }
    return (
        <div>
        <p>Contagem: {count}</p>
        <button onClick={increment}>Incrementar</button>
    </div>
)

}
export default LifeCycleFuncional