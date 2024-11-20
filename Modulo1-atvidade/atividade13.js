let carrinho = {
    itens: [
        {nome: 'copo', quantidade: 3, precoUnitario: 7.50},
        {nome: 'caneta', quantidade: 5, precoUnitario: 4.70},
        {nome: 'caneca', quantidade: 9, precoUnitario: 20},
        {nome: 'colher', quantidade: 2, precoUnitario: 2.85}
    ]
}
let valorTotalItem = 0;
let valorTotalCarrinho = 0;
carrinho.itens.forEach((produto) => {
    valorTotalItem = produto.precoUnitario * produto.quantidade
    return valorTotalCarrinho += valorTotalItem
})

console.log(valorTotalCarrinho)