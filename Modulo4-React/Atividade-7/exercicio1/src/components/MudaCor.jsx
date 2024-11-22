import { useState, useEffect } from "react";

function MudarCor() {
    const [color, setColor] = useState(0); // começa em zero.
    const colors = ['red', 'blue', 'orange', 'green']; // cores disponiveis.

    useEffect(() => {
        document.body.style.backgroundColor = colors[color]; // muda cor do body.
    }, [color]); //quando color mudar a cor de fundo sera alterada.

    const changeColor = () => {
        setColor((prevcolor) => (prevcolor + 1) % colors.length); // prevcolor = cor atual
    };

    return (
        <div style={{ height: '100vh' }}>
            <button onClick={changeColor}>Muda cor</button>
        </div>
    );
}

export default MudarCor;
