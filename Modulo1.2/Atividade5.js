// ATIVIDADE 5

let media = 0

let alunos = [
    {nome: 'Marcos', nota1: 6, nota2: 9},
    {nome: 'Lucas', nota1: 10, nota2: 9},
    {nome: 'Fred', nota1: 2, nota2: 5}
]

for (aluno of alunos) {
    media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`A média do aluno ${aluno.nome} é ${media}.`)
}