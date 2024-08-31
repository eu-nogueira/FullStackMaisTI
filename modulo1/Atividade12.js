// ATIVIDADE 12

const prompt = require('prompt-sync')()

let numero = Number(prompt(`Digite o número que deseja ver a tabuada: `))
let result = 0
for (c = 1; c <= 10; c++) {
    result = numero * c
    console.log(`${numero} x ${c} = ${result}`)
}