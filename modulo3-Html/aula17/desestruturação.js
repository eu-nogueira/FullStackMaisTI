/* let numeros = [10, 20, 41]

const [primeiro, segundo, terceiro] = numeros

console.log(primeiro)
console.log(segundo)
console.log(terceiro)

const pessoa = {
    nome: 'Marcos',
    idade: 21,
    emprego: 'Dev'
}
const {nome, idade, emprego} = pessoa

console.log(nome)
console.log(idade)
console.log(pessoa)

let numeros = [10, 20, 30, 40, 50, 60]

const [a, b, c] = numeros

console.log(a)
console.log(b)
console.log(c)
*/

const desenvolvedor = {
    nome: 'Carlos',
    idade: 21,
    contato: {
        email: 'carlos.dev@example.com',
        endereco: {
            cidade: 'POA',
            estado: 'RS',
            pais: 'Brasil'
        }
    },
    projetos: ['Website', 'App Mobile', 'API']
}

const {nome, idade} = desenvolvedor

const { contato: {email}} = desenvolvedor

const {cidade, estado, pais} = desenvolvedor.contato.endereco

const {projetos: [Website, AppMobile]} = desenvolvedor

console.log(nome)
console.log(idade)
console.log(email)
console.log(cidade)
console.log(estado)
console.log(pais)
console.log(Website)
console.log(AppMobile)