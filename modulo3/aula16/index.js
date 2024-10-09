const pedidoPizza = new Promise ((resolve, reject) => {
    let pizzaPronta = true

    if(pizzaPronta) {
        resolve("Pizza foi entregue")
    } else {
        reject("O pedido da pizza falhou")
    }
})

pedidoPizza.then((message) => {
    console.log(message)
})
.catch((erro) => {
    console.log(erro)
})

function buscarDados() {
    return new Promise((resolve, reject) => {
    })
}