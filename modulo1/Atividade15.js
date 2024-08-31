// ATIVIDADE 15

let numAnt = 0
let numAtu = 1
for (c = 1; c <= 10; c++) {
    let result = numAtu + numAnt
    numAnt = numAtu
    numAtu = result
    console.log(result)
}