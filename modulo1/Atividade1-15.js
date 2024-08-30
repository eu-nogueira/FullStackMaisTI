// ATIVIDADE 1
/*

let numero = 5

return numero % 2 == 0 ? console.log(`O número ${numero} é par!`) : console.log(`O número ${numero} é impar!`)


// ATIVIDADE 2

let idade = 18

if (idade <= 12) {
    console.log(`Você tem ${idade} anos, portanto você é criança!`)
} else if (idade < 18) {
    console.log(`Você tem ${idade} anos, portanto você é adolescente!`)
} else if (idade >= 18 && idade < 60) {
    console.log(`Você tem ${idade} anos, portanto você é adulto!`)
} else if (idade >= 60) {
    console.log(`Você tem ${idade} anos, portanto você é idoso!`)
}

// ATIVIDADE 3

let nota = 6

if (nota < 3) {
    console.log(`Reprovado!`)
} else if (nota < 6) {
    console.log(`Recuperação!`)
} else if (nota >= 6) {
    console.log(`Aprovado!`)
}

// ATIVIDADE 4

let numEsc = 2

switch(numEsc) {
    case 0:
        console.log(`Você selecionou o número 0!`)
        break;
        case 1:
            console.log(`Você selecionou o número 1!`)
            break;
    case 2:
        console.log(`Você selecionou o número 2!`)
        break;

    }

    // ATIVIDADE 5

    let altura = 1.69
    let peso = 71
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

// ATIVIDADE 6

let ladoA = 7
let ladoB = 8
let ladoC = 6

if (ladoA == ladoB && ladoB == ladoC) {
    console.log(`Este triângulo é equilátero, pois todos os lados são iguais.`)
} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log(`Este triângulo é isósceles, pois possui dois lados iguais.`)
} else if (ladoA != ladoB && ladoB != ladoC) {
    console.log(`Este triângulo é escaleno, pois todos os lados são diferentes.`)
}

// ATIVIDADE 7

let quantiaMaca = 12
let valorMaca = 0
let valorTotal = 0
if(quantiaMaca < 12) {
    valorMaca = 0.30
    valorTotal = quantiaMaca * valorMaca
    console.log(`O valor total da compra ficou R$${valorTotal}!`)
} else {
    valorMaca = 0.25
valorTotal = quantiaMaca * valorMaca
console.log(`O valor total da compra ficou R$${valorTotal}!`)
}

// ATIVIDADE 8

let numero1 = 17
let numero2 = 19

if (numero1 > numero2) {
    console.log(`${numero1}, ${numero2}`)
} else {
    console.log(`${numero2}, ${numero1}`)
}
// ATIVIDADE 9

for(c=10;c>0;c--) {
    console.log(c)
}

// ATIVIDADE 10 

let numero = 5

for(c=0;c<=10;c++) {
    console.log(`${numero}`)
}

// ATIVIDADE 11

const prompt = require('prompt-sync')()
let result = 0

for(c=1;c<=5;c++) {
    let num = Number(prompt(`digite o ${c}° número:`))
    result += num
}

console.log(`A soma total é: ${result}`)

// ATIVIDADE 12
const prompt = require('prompt-sync')()

let numero = Number(prompt(`Digite o número que deseja ver a tabuada: `))
let result = 0
for (c = 1; c <= 10; c++) {
    result = numero * c
    console.log(`${numero} x ${c} = ${result}`)
}
*/
