import React, { useState, useEffect } from 'react';

function Temporizador() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '150px' }}>
            <h1>Temporizador: {seconds} segundos</h1>
            <div>
                <button onClick={startTimer}>Iniciar</button>
                <button onClick={pauseTimer}>Pausar</button>
                <button onClick={resetTimer}>Reiniciar</button>
            </div>
        </div>
    );
}

export default Temporizador;
