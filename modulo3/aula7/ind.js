const newTar = document.querySelector('.newTar')
const add = document.querySelector('.add')
const list = document.querySelector('.list')
const concluido = document.querySelector('.concluido')
add.addEventListener('click', function () {
    if (newTar.value) {

        let li = document.createElement('li')
        li.textContent = newTar.value.trim()
        let btnRem = document.createElement('span')
        btnRem.textContent = `remover`
        btnRem.style.color = `Red`
        list.appendChild(li)
        li.appendChild(btnRem)
        btnRem.style.paddingLeft = '10px'

        newTar.value = ''
        btnRem.addEventListener('click', function () {
            li.remove()
        })

        concluido.addEventListener('click', function() {
            let todas = []
            todas.push(newTar.value)
            li.replaceChild(li, todas)
        })
    }
})