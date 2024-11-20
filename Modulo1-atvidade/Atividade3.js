let produto = {
    tipo: 'Carro',
    Modelo: 2015,
    ano: 2014,
    quantidade: 2,
    vendas: 49,
    quilometragem: 85000
}

function newObj() {
    let objNovo = {}
for(product in produto) {
    if (Number(produto[product]) >= 100) {
    objNovo[product] = produto[product]  
    } 
}
return objNovo
}

console.log(newObj())
