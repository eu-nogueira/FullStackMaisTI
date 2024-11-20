// ATIVIDADE 6

let funcionarios = [
    {nome: 'Marcos', cargo: 'Codificador de dados', salario: 1980},
    {nome: 'Silvio', cargo: 'Auxiliar administrativo', salario: 2200},
    {nome: 'Vitor', cargo: 'Técnico em eletrônica', salario: 2400},
]
    for(pessoa of funcionarios) {
        if(pessoa.salario >= 2000) {
            console.log(`${pessoa.nome} é ${pessoa.cargo} e recebe R$${pessoa.salario}`)
        }
    }