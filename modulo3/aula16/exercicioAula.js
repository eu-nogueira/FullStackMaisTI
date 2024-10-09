function fazerPedido(cafe) {
    return new Promise((resolve, reject) => {
        if (cafe === 'Expresso') {
            setTimeout(function() {
                resolve(`O seu café ${cafe} está pronto!`)
            }, 2000)
        } else if (cafe === 'Late') {
            setTimeout(function() {
                resolve(`O seu café ${cafe} está pronto!`)
            }, 3000)
        } else {
            reject(`Café não disponível.`)
        }
    })
}
function realizarPedido(cafe) {
    fazerPedido(cafe).then((msg) => {
        console.log(msg)
    })
    .catch((erro) => {
        console.log(erro)
    })
}

realizarPedido('Late')
realizarPedido('Expresso')
realizarPedido('seila') 