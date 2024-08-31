// ATIVIDADE 13

const prompt = require('prompt-sync')()

let soma = 0
let media = 0
let quant = 0
let numero;

while (numero !== 0) {
    numero = Number(prompt(`Digite um número para calcular a média arimética: `))

    if (numero !== 0) {
        soma += numero
        quant++
    }
}

if (quant > 0) {
    media = soma / quant
    console.log(`A média aritmética é: ${media}`)
} else {
    console.log(`Número inválido`)
}