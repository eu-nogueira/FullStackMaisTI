// ATIVIDADE 7

const prompt = require('prompt-sync')()

let quantiaMaca = Number(prompt(`Digite a quantidade de maças que deseja comprar: `))
let valorMaca = 0
let valorTotal = 0
if (quantiaMaca < 12) {
    valorMaca = 0.30
    valorTotal = quantiaMaca * valorMaca
    console.log(`O valor total da compra ficou R$${valorTotal}!`)
} else {
    valorMaca = 0.25
    valorTotal = quantiaMaca * valorMaca
    console.log(`O valor total da compra ficou R$${valorTotal}!`)
}