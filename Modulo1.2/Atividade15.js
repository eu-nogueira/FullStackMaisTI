let transacoes = [
    {tipo: 'entrada', valor: 50},
    {tipo: 'saida', valor: 150},
    {tipo: 'entrada', valor: 1020},
    {tipo: 'entrada', valor: 40},
    {tipo: 'saida', valor: 150},
    {tipo: 'saida', valor: 750},
]
totalReduz = 0
saldoSoma = 0
saldoFinal = 0
transacoes.forEach((saldo) => {
    if(saldo.tipo !== "entrada") {
        totalReduz += saldo.valor
    } 
    if (saldo.tipo == "entrada") {
        saldoSoma += saldo.valor
    }
    saldoFinal = saldoSoma - totalReduz
})

console.log(`As transções terminaram em ${saldoFinal}`)