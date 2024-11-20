let calculadora = document.querySelector('.calculadora')
let display = document.querySelector('.display')

let resolva = () => {
    let res = eval(display.innerText)
    display.innerHTML = res
}

calculadora.addEventListener('click', function(e) {
    const el = e.target
    if(el.classList.contains('num')) {
        display.innerHTML += el.innerText
    }
    if(el.classList.contains('dell')) {
        display.innerHTML = ' '
    }
    if(el.classList.contains('num-igual')) {
        resolva()
    }
})