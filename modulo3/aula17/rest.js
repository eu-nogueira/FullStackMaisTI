/*
let numeros = [1,2,3]
let novosNumeros = [...numeros, 4, 5]

console.log(novosNumeros)

let pessoa = {
    nome: 'Neymar',
    idade: 32,
}
let novaPesoa = { ...pessoa, cidade: 'Santos' }

console.log(novaPesoa)

function soma(a,b,c) {
    return a + b + c
}

let numeros = [1,2,3]
console.log(soma(...numeros))


/* function soma(...numeros) {
    return numeros.reduce((total, numero) => total + numero)
}

console.log(soma(1,2,3,4,5)) 


function calculaMedia(...numeros) {
    let soma = numeros.reduce((total,numero) => total + numero)
    return soma/numeros.length
}

console.log(calculaMedia(50,70,100,30))

let cadastroAnt = {
    nome: 'Marcos',
    idade: 18,
    profissao: 'Dev'
}

let novoCadast = {...cadastroAnt, endereco: 'Rua nevada, 40'}

console.log(novoCadast)
*/

let num = [4,5,6]
let newNum = [1,2,3, ...num, 7,8,9]

console.log(newNum)

