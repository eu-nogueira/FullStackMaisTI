let add = document.querySelector('.add')
let criaLista = document.querySelector('.criaList')
let titulo = document.querySelector('.item')
let remove = document.querySelector('.remove')

add.addEventListener('click', function() {
    const li = document.createElement('li')
    li.innerText = `Item ${criaLista.children.length + 1}`
    criaLista.appendChild(li)
    titulo.innerHTML = 'Item adicionado'
    titulo.style.color = 'green'
})

remove.addEventListener('click', function() {
    if(criaLista.children.length > 0) {
        criaLista.removeChild(criaLista.lastElementChild)
        titulo.innerHTML = `Item removido`
        titulo.style.color = 'red'
    } else if (criaLista.children.length <= 0) {
        titulo.innerHTML = `Lista vazia`
        titulo.style.color = 'gray'
    }
})