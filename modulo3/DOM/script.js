let titulo = document.querySelector('#titulo')
let botao = document.querySelector('.botao')
titulo.style.color = 'blue'

botao.addEventListener('click', function() {
    alert ('Olá')
})

let novoParagrafo = document.createElement('p')

novoParagrafo.innerHTML = 'novo paragrafo'

document.body.appendChild(novoParagrafo)

novoParagrafo.remove()