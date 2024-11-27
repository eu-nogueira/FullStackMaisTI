import React, { useState } from 'react';

function FormularioRegistro() {
   
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [enviado, setEnviado] = useState(false);


    const validarFormulario = () => {
        if (!nome || !email || !senha) {
            setErro('Todos os campos são obrigatórios.');
            return false;
        }
        setErro('');
        return true;
    };


    const enviar = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            setEnviado(true);
        }
    };

    if (enviado) {
        alert (`Boas Vindas ${nome} ${email}`)}

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Formulário de Registro</h1>
            <form onSubmit={enviar}>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        style={{ padding: '10px', width: '200px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: '10px', width: '200px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        style={{ padding: '10px', width: '200px' }}
                    />
                </div>
                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                <button type="submit" style={{ padding: '10px 20px' }}>Registrar</button>
            </form>
        </div>
    );
}

export default FormularioRegistro;
