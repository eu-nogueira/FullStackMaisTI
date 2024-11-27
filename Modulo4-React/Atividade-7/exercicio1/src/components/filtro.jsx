import React, { useState } from 'react';

function FiltroDeLista() {
    
    const [nomes] = useState([
        'Marcos', 'Larissa', 'Carlos', 'Diego', 'Bruno', 'Cristiano', 'Wanderson', 'Alan'
    ]);
    const [filtro, setFiltro] = useState('');

    
    const mudaFiltro = (e) => {
        setFiltro(e.target.value);
    };

    
    const nomesFiltrados = nomes.filter(nome => 
        nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Filtro de Lista de Nomes</h1>
            <input 
                type="text"
                placeholder="Digite aqui"
                value={filtro}
                onChange={mudaFiltro}
                style={{ marginBottom: '20px', padding: '10px', width: '200px' }}
            />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {nomesFiltrados.map((nome, index) => (
                    <li key={index} style={{ margin: '5px 0' }}>{nome}</li>
                ))}
            </ul>
        </div>
    );
}

export default FiltroDeLista;
