// ATIVIDADE 1

const prompt = require('prompt-sync')()

let numero = Number(prompt(`Digite um número: `))

return numero % 2 == 0 ? console.log(`O número ${numero} é par!`) : console.log(`O número ${numero} é impar!`)