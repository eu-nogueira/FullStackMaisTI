let pedidos = [
    { cliente: 'Marcos', produto: 'bola', quantidade: 4 },
    { cliente: 'Tamine', produto: 'rede', quantidade: 2 },
    { cliente: 'Diego', produto: 'luva', quantidade: 1 },
    { cliente: 'Marcos', produto: 'chuteira', quantidade: 2 },
    { cliente: 'Diego', produto: 'apito', quantidade: 1 }
]
let contador = {}
pedidos.forEach((pedido) => {
    if (contador[pedido.cliente]) {
        contador[pedido.cliente] += pedido.quantidade
    } else {
        contador[pedido.cliente] = pedido.quantidade
    }
})

console.log(contador)