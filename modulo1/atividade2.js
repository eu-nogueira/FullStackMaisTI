// ATIVIDADE 2

const prompt = require('prompt-sync')()

let idade = Number(prompt(`Digite a sua idade: `))

if (idade <= 12) {
    console.log(`Você tem ${idade} anos, portanto você é criança!`)
} else if (idade < 18) {
    console.log(`Você tem ${idade} anos, portanto você é adolescente!`)
} else if (idade >= 18 && idade < 60) {
    console.log(`Você tem ${idade} anos, portanto você é adulto!`)
} else if (idade >= 60) {
    console.log(`Você tem ${idade} anos, portanto você é idoso!`)
}