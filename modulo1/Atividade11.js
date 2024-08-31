// ATIVIDADE 11

const prompt = require('prompt-sync')()

let result = 0

for (c = 1; c <= 5; c++) {
    let num = Number(prompt(`digite o ${c}° número:`))
    result += num
}

console.log(`A soma total é: ${result}`)