let estoque = [
    {produto: 'ps5', quantidade: 5, minino: 3},
    {produto: 'controle', quantidade: 2, minino: 3},
    {produto: 'televisão', quantidade: 3, minino: 5},
    {produto: 'mouse', quantidade: 1, minino: 1},
    {produto: 'teclado', quantidade: 4, minino: 1}
]

estoque.forEach((item) => {
    if(item.quantidade < item.minino) {
        item.quantidade = item.quantidade * 2
    }
})

console.log(estoque)