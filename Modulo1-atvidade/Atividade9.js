// ATIVIDADE 9

let clientes = [
    {nome: 'Marcos', idade: 22, cidade: 'Alvorada'},
    {nome: 'Silvio', idade: 50, cidade: 'Porto Alegre'},
    {nome: 'Shirlei', idade: 48, cidade: 'Pelotas'},
    {nome: 'Carla', idade: 45, cidade: 'Caxias'},
    {nome: 'Lucas', idade: 21, cidade: 'Novo Hamburgo'},
]

let contador = 0
clientes.forEach((pessoa) => {
    if(pessoa.idade > 30) {
        contador++
    }
})
console.log(`Há ${contador} clientes com mais de 30 anos.`)