// ATIVIDADE 6

const prompt = require('prompt-sync')()

let ladoA = Number(prompt(`Digite o tamanho do lado A do triangulo: `))
let ladoB = Number(prompt(`Digite o tamanho do lado B do triangulo: `))
let ladoC = Number(prompt(`Digite o tamanho do lado C do triangulo: `))

if (ladoA == ladoB && ladoB == ladoC) {
    console.log(`Este triângulo é equilátero, pois todos os lados são iguais.`)
} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log(`Este triângulo é isósceles, pois possui dois lados iguais.`)
} else if (ladoA != ladoB && ladoB != ladoC) {
    console.log(`Este triângulo é escaleno, pois todos os lados são diferentes.`)
}