// ATIVIDADE 14

const prompt = require('prompt-sync')()

let numeroFat = Number(prompt('Digite o número que você deseja calcular o Fatorial: '))
let multiplicador = numeroFat - 1
let result = 1
while (multiplicador >= 0) {
    result += result * multiplicador
    multiplicador--
}
console.log(result)