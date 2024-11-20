import React, { useState, useEffect } from 'react';

function MudaCor() {
  function criaCor() {
    let Cor = '0123456789ABCDEF';
    let novaCor = '#';
    for (let c = 0; c < 6; c++) {
      novaCor += Cor[Math.floor(Math.random() * 16)];
    }
    return novaCor;
  }

  const [color, setColor] = useState(criaCor());

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(criaCor());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <h1>Simulador de mudança de cor</h1>
    </div>
  );
}

export default MudaCor;