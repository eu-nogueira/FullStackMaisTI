//    ATIVIDADE 2

const livro = {
    titulo: 'O pequeno prinncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoPublicacao: '06/04/1943',
    genero: 'ficção',
}

for (especifi in livro) {
    if (especifi != 'editora') {
        livro.editora = 'HarperCollins Brasil'
    } 
}
console.log(livro)