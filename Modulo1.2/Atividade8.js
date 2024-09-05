// ATIVIDADE 8

let filmes = [
    {titulo: 'Star Wars: O despertar da força', diretor: 'J. J. Abrams', anoLancamento: 2015},
    {titulo: 'Vingadores: Ultimato', diretor: 'Joe Russo', anoLancamento: 2019},
    {titulo: 'Homem-Aranha: Sem volta pra casa', diretor: 'Jon Watts', anoLancamento: 2021}
]

filmes.forEach((tituloFilme) => {
    let titulo = []
    titulo.push(tituloFilme.titulo)
    console.log(titulo)
})