let add = document.querySelector('.add')
let remove = document.querySelector('.remove')
let item = document.querySelector('.item')
let cont = 0

add.addEventListener('click', function() {
    cont++
    let criaLI = document.createElement('li')
    criaLI.textContent = `item ${cont}`
    document.body.appendChild(criaLI)
    item.innerHTML = `Item adicionado`
    item.style.color = 'green'

    remove.addEventListener('click', function() {
        criaLI.removeChild(criaLI.lastElementChild)
        item.innerHTML = `Item removido`
        item.style.color = 'red'
        cont--
    })
})
