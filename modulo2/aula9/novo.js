let text = document.querySelector('.text')
let btn = document.querySelector('.botao')
let cont = document.querySelector('.btn-cont')
let conta = document.querySelector('.conta')
let passar = document.querySelector('.passar')
let voltar = document.querySelector('.voltar')
let contador = 0

btn.addEventListener('click', function() {
    setTimeout(function() {
        text.innerHTML = 'novo texto'
    }, 3000)
})

cont.addEventListener('click', function() {
    setInterval(function() {
        conta.innerHTML = contador
        contador++
    }, 1000)
})
