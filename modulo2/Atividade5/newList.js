let cont = document.querySelector('#conteudo')
let button = document.querySelector('#register')
let lista = document.querySelector('.lista')

button.addEventListener('click', function (e) {
    let li = document.createElement('li')
    let newCont = document.createElement('input')
    let del = document.createElement('button')
    let edit = document.createElement('button')
    let confirmEdit = document.createElement('button')
    let newValue;
    confirmEdit.textContent = 'Confirmar'
    confirmEdit.style.marginLeft = '5px'
    confirmEdit.style.backgroundColor = '#045071'
    confirmEdit.style.border = 'none'
    del.style.marginLeft = '5px'
    del.style.backgroundColor = 'red'
    del.style.color = 'white'
    del.style.border = 'none'
    del.style.borderRadius = '5px'
    edit.style.marginLeft = '5px'
    edit.style.backgroundColor = '#fd6084'
    edit.style.color = 'white'
    edit.style.border = 'none'
    edit.style.borderRadius = '5px'
    li.style.listStyle = 'none'
    del.textContent = 'Excluir'
    edit.textContent = 'Editar'
    li.textContent = cont.value
    lista.appendChild(li)
    li.style.padding = '5px'
    li.appendChild(del)
    li.appendChild(edit)
    del.addEventListener('click', function () {
        li.remove()
    })
    edit.addEventListener('click', function () {
        li.appendChild(newCont)
        li.appendChild(confirmEdit)
        confirmEdit.addEventListener('click', function () {
            newValue = newCont.value
            li.textContent = newValue
            li.appendChild(del)
            li.appendChild(edit)
        })
    })

    cont.value = ''
})