// ATIVIDADE 10

let vendas = [
    {produto: 'Teclado', quantidade: 5, valor: 350},
    {produto: 'Mouse', quantidade: 8, valor: 130},
    {produto: 'Monitor', quantidade: 3, valor: 945},
    {produto: 'Processador', quantidade: 7, valor: 600},
    {produto: 'SSD 480GB', quantidade: 10, valor: 225}
]
let totalItem = 0
let total = 0
vendas.forEach((item) => {
    totalItem = item.quantidade * item.valor
    total += totalItem
})
console.log(`O valor total de vendas de todos os produtos é R$${total}`)