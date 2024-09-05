// ATIVIDADE 7

let produtos = [
    {nome: 'PS5', preco: 3450, desconto: 10},
    {nome: 'PS4', preco: 1450, desconto: 10},
    {nome: 'PS3', preco: 700, desconto: 10}
]

produtos.forEach((produto) => {
    let desc = (produto.preco / 100) * produto.desconto
    let valor = produto.preco - desc
    console.log(`O ${produto.nome} de R$${produto.preco} com o desconto ficou R$${valor}.`)
})