import { useState } from "react";


function ListaProduto() {

    const [lista, addLista] = useState(true)

    return (
        <div  style={{ textAlign: 'center' }}>
            <h1>Controle de estoque</h1>
            {lista ? (
                <ul>
                    <li>Laranja</li>
                    <li>Batata</li>
                    <li>Cenoura</li>
                    <li>Morango</li>
                    <li>Abacaxi</li>
                    <li>Pera</li>
                </ul>
            ) : (
                <ul>
                    <li>Laranja</li>
                    <li>Batata</li>
                    <li>Banana</li>
                    <li>Manga</li>
                    <li>Cenoura</li>
                    <li>Morango</li>
                    <li>Abacaxi</li>
                    <li>Tomate</li>
                    <li>Pera</li>
                </ul>
            )}
            <button onClick={() => addLista(false)}>Todos</button>
            <button onClick={() => addLista(true)}>Disponiveis</button>
        </div>
    )
}

export default ListaProduto