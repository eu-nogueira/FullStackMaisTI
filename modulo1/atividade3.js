// ATIVIDADE 3

const prompt = require('prompt-sync')()

let nota = Number(prompt(`Digite uma nota: `))

if (nota < 3) {
    console.log(`Reprovado!`)
} else if (nota < 6) {
    console.log(`Recuperação!`)
} else if (nota >= 6) {
    console.log(`Aprovado!`)
}