import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [inputSeconds, setInputSeconds] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (seconds === 0 && isActive) {
            clearInterval(interval);
            alert("O tempo acabou!");
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused, seconds]);

    const handleStart = () => {
        if (!isActive) {
            setSeconds(parseInt(inputSeconds, 10));
            setIsActive(true);
            setIsPaused(false);
        }
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setSeconds(0);
        setInputSeconds('');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Timer de Contagem Regressiva</h1>
            <input 
                type="number"
                value={inputSeconds}
                onChange={(e) => setInputSeconds(e.target.value)}
                placeholder="Segundos"
                style={{ marginBottom: '20px', padding: '10px', width: '100px' }}
                disabled={isActive}
            />
            <div>
                <button onClick={handleStart} disabled={isActive}>
                    Iniciar
                </button>
                <button onClick={handlePause} disabled={!isActive}>
                    {isPaused ? "Continuar" : "Pausar"}
                </button>
                <button onClick={handleReset}>
                    Reiniciar
                </button>
            </div>
            <h2>{seconds} segundos</h2>
        </div>
    );
}

export default Timer;
