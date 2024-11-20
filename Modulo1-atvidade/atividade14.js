let empresa = {
    departamentos: [
        {nomeDP: 'Controlador', funcionario1: 'Marcos', funcionario2: 'Douglas', funcionario3: 'Rodrigo'},
        {nomeDP: 'Líder', funcionario1: 'Vitor', funcionario2: 'Cananda', funcionario3: 'Léo'},
        {nomeDP: 'Motorista', funcionario1: 'Leandro', funcionario2: 'Cesar', funcionario3: 'Pedro'},
        {nomeDP: 'Vendedor', funcionario1: 'Anderson', funcionario2: 'Jennifer', funcionario3: 'Lisandro'},
        {nomeDP: 'Superior', funcionario1: 'Raul', funcionario2: 'Guilherme', funcionario3: 'Lucas'}
    ]
}

for (empress of empresa.departamentos) {
    for(func in empress) {
        if (func !== 'nomeDP') {
        console.log(`${empress.nomeDP}  ${empress[func]}`)
    }
    }
}