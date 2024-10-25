let why = document.querySelector('.why')
let core = document.querySelector('.core')
let related = document.querySelector('.Related')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let p4 = document.querySelector('.p4')
let title = document.querySelector('.title')
let cont = document.querySelector('.cont')

core.addEventListener('click', function () {
    p1.innerHTML = "Components, JSX & Props"
    p2.innerHTML = "State"
    p3.innerHTML = "Hooks (e.g, useEffect())"
    p4.innerHTML = "Dynamic rendering"
    p4.style.color = "white"
    core.style.backgroundColor = 'rgb(198, 198, 0)'
    core.style.color = 'black'
    why.style.backgroundColor = 'rgb(10, 10, 10)'
    why.style.color = 'white'
    related.style.backgroundColor = 'rgb(10, 10, 10)'
    related.style.color = 'white'
})

related.addEventListener('click', function () {
    p1.innerHTML = "Official web page (react.dev)"
    p2.innerHTML = "Next.js (Fullstack framework)"
    p3.innerHTML = "React Native (build native mobile apps with React)"
    p4.style.color = "transparent"
    related.style.backgroundColor = 'rgb(198, 198, 0)'
    related.style.color = 'black'
    why.style.backgroundColor = 'rgb(10, 10, 10)'
    why.style.color = 'white'
    core.style.backgroundColor = 'rgb(10, 10, 10)'
    core.style.color = 'white'

})

why.addEventListener('click', function () {
    p1.innerHTML = "React is extremely popular"
    p2.innerHTML = "It makes building complex, interactive UIs a breeze"
    p3.innerHTML = "It's powerful & flexible"
    p4.innerHTML = "It has a very active and versatile ecosystem"
    p4.style.color = "white"
    why.style.backgroundColor = 'rgb(198, 198, 0)'
    why.style.color = 'black'
    core.style.backgroundColor = 'rgb(10, 10, 10)'
    core.style.color = 'white'
    related.style.backgroundColor = 'rgb(10, 10, 10)'
    related.style.color = 'white'
})