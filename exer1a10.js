/* 

@1

let num = 10

if (num < 0) {
    console.log(`O número ${num} é negativo`)
} else if (num === 0) {
    console.log(`O número é 0`)
} else {
    console.log(`O número ${num} é positivo`)
} 

@2

let ano = 2024

if (ano%4==0 && ano%100>=1) {
    console.log('O ano é bissexto')
} else {
    console.log('O ano não é bissexto')
} 

@3

let n1 = 9
let n2 = 9
let n3 = 8
let media = (n1 + n2 + n3) / 3
if (media < 1) {
    console.log(`sua nota ${media} = F`)
}
if (media <= 2) {
    console.log(`sua nota ${media} = E`)
}
else if (media <= 3) {
    console.log(`sua nota ${media} = D`)
}
else if (media < 7) {
    console.log(`sua nota ${media} = C`)
}
else if (media >= 7 && media < 9) {
    console.log(`sua nota ${media} = B`)
}
else if (media >= 9) {
    console.log(`sua nota ${media} = A`)
}
 
@4

let num = 4

if (num%2===0) {
    console.log(`O número ${num} é par`)
} else {
    console.log(`O número ${num} é impar`)
}

@5

let idadeNadador = 16

if (idadeNadador >= 5 && idadeNadador <= 7) {
    console.log('Infantil A')
}
if (idadeNadador >= 8 && idadeNadador <= 10) {
    console.log('Infantil B')
}
if (idadeNadador >= 11 && idadeNadador <= 13) {
    console.log('Juvenil A')
}
if (idadeNadador >= 14 && idadeNadador <= 17) {
    console.log('Juvenil B')
}
if (idadeNadador >= 18) {
    console.log('Adulto')
}

@6

let dia = new Date;
let sem = dia.getDay()

switch(sem) {
    case 0:
        console.log('Domingo')
    break;
    case 1: 
        console.log('Segunda-feira')
    break;
    case 2:
        console.log('Terça-feira')
    break;
    case 3:
        console.log('Quarta-feira')
    break;
    case 4:
        console.log('Quinta-feira')
    break;
    case 5:
        console.log('Sexta-feira')
    break;
    case 6:
        console.log('Sabado')
    break;
}

@8

let estacao = 4

switch(estacao) {
    case 1:
        console.log('Primavera')
    break;
    case 2:
        console.log('Verão')
    break;
    case 3:
        console.log('Outono')
    break;
    case 4:
        console.log('Inverno')
    break;
}
 
@9

let idade = 45
let faixaE;

if (idade < 0) {
    return
} else if (idade > 0 && idade <= 12) {
    faixaE = 1
} else if (idade <= 17) {
    faixaE = 2
} else if (idade <= 59) {
    faixaE = 3
} else {
    faixaE = 4
}

switch (faixaE) {
    case 1:
        console.log('Criança')
        break;
    case 2:
        console.log('Adolescente')
        break;
    case 3:
        console.log('Adulto')
        break;
    case 4:
        console.log('Idoso')
        break;
}

@10

let peso = 67
let altura = 1.72
let imc = peso / (altura * altura)
if (imc < 18.5) {
    console.log(`Abaixo do peso ${imc}`)
}
else if (imc < 24.9) {
    console.log(`Peso normal ${imc}`)
}
else if (imc < 29.9) {
    console.log(`Sobrepeso ${imc}`)
}
else if (imc < 34.9) {
    console.log(`Obesidade grau 1 ${imc}`)
}
else if (imc < 39.9) {
    console.log(`Obesidade grau 2 ${imc}`)
}
else if (imc >= 40) {
    console.log(`Obesidade grau 3 ${imc}`)
}

*/

const prompt = require('prompt-sync')() // CHAMAR BIBLIOTECA PROMPT SYNC

let num1 = Number(prompt('Insira o primeiro valor: ')) // MUDAR PARA NUMBER E PERGUNTAR VALOR 1
let num2 = Number(prompt('Insira o segundo valor: '))  // MUDAR PARA NUMBER E PERGUNTAR VALOR 2
let operation = prompt("informe a operação desejada (+, -, /, *)") // PERGUNTAR OPERADOR
let result = 0 // VARIAVEL DE RESULTADO

if (operation === '+') { // SE OPERADOR FOR IGUAL A +, RESULT RECEBE NUM1 + NUM2
    result = num1 + num2
} else if (operation === '-') { // SE OPERADOR FOR IGUAL A -, RESULT RECEBE NUM1 - NUM2
    result = num1 - num2
} else if (operation === '/') { // SE OPERADOR FOR IGUAL A /, RESULT RECEBE NUM1 / NUM2
    if (num2 !== 0) { // SE NUM2 FOR DIFERENTE DE 0 CONFIRMO QUE RESULT RECEBE NUM1/NUM2
        result = num1 / num2
    } else { // SE NUM2 FOR IGUAL A 0 GERAR ERRO DE DIVISÃO POR 0 E RESULT = 0
        console.log(`Erro: divisão por zero!`)
        result = 0
    }
} else if (operation === '*') { // SE OPERADOR FOR IGUAL A *, RESULT RECEBE NUM1 * NUM2
    result = num1 * num2
} else { // SE OPERADOR NÃO FOR ESCOLHIDO OPERADOR FAÇA:
    console.log('Operação inválida!')
    result = undefined
}

if (result !== undefined) { // SE RESULTADO FOR DIFERENTE DE UNDEFINED MOSTRE O RESULTADO
    console.log(`Resultado: ${result}`)
}