const newTar = document.querySelector('.newTar')
const add = document.querySelector('.add')
const list = document.querySelector('.list')

add.addEventListener('click', function() {
    if(newTar.value) {
    let li = document.createElement('li')
    li.textContent = newTar.value.trim() 
    let btnRem = document.createElement('span')
    btnRem.textContent = `remover`
    btnRem.style.color = `Red`
    list.appendChild(li)
    li.appendChild(btnRem)
    btnRem.addEventListener('click', function() {
       li.remove()
    })
}
})