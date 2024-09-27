let year = document.querySelector('.year')
let month = document.querySelector('.month')
let day = document.querySelector('.dia')
let tipo = document.querySelector('.tipo')
let desc = document.querySelector('.desc')
let btnSave = document.querySelector('.btn')
let cont = document.querySelector('.cont')

btnSave.addEventListener('click', function (e) {
    e.preventDefault()
        if (Number(day.value) <= 31) {
            let date = document.createElement('p')
            date.textContent = `${day.value} ${month.value} ${year.value}`
            date.style.marginTop = '10px'
            cont.appendChild(date)
        }
})