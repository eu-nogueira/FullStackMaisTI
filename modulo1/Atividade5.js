// ATIVIDADE 5

const prompt = require('prompt-sync')()

let altura = Number(prompt(`Digite a sua altura: `))
let peso = Number(prompt(`Digite o seu peso: `))
let imc = peso / (altura * altura)

if (imc < 18.5) {
   console.log(`seu peso imc é ${imc.toFixed(2)}, portanto você está abaixo do peso!`)
} else if (imc < 25) {
   console.log(`seu peso imc é ${imc.toFixed(2)}, portanto você está com o peso normal!`)
} else if (imc < 30) {
   console.log(`seu peso imc é ${imc.toFixed(2)}, portanto você está com sobrepeso!`)
} else if (imc >= 30) {
   console.log(`seu peso imc é ${imc.toFixed(2)}, portanto você está com obesidade!`)
}