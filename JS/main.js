const body = document.querySelector('body')
const mouse = document.querySelector('.mouse')
const toogler = document.querySelector('.navbar-toggler')
const icon = document.querySelector('.navbar-toggler-icon')
const menu = document.querySelector('.togglerMenu')
const link = document.querySelector('.navbar-link')
const myName = document.querySelector('.myName')
const presentation = document.querySelector('.presentation')
const navbarTop = document.querySelector('.navbar-nav-top')
const linkTop = document.querySelector('.navbar-link-top')
const section = document.querySelector('.section')






// Animation Menu au click
toogler.addEventListener('click', () => {
    body.classList.toggle('active')
    body.classList.toggle('background')
    icon.classList.toggle('active')
    menu.classList.toggle('active')
    myName.classList.toggle('active')
    presentation.classList.toggle('active')


})

// link.addEventListener('mouseout', () => {

// })

window.addEventListener('mousemove', (e) => {
    const speed = myName.getAttribute('data-speed')

    const x = (window.innerWidth + e.pageX * speed) / 100
    const y = (window.innerHeight + e.pageY * speed) / 100
    const x1 = (window.innerWidth - e.pageX * speed) / 100
    const y1 = (window.innerHeight - e.pageY * speed) / 100

    myName.style.transform = `translateX(${x}px) translateY(${y}px)`
    presentation.style.transform = `translateX(${x1}px) translateY(${y1}px)`

    mouse.style.left = e.pageX + 'px'
    mouse.style.top = e.pageY + 'px'

})
// Afficher la barre de navigation au scroll
window.addEventListener('scroll', (event) => {

    if (scrollY > 500) {
        navbarTop.style.top = "0px"

    } else {
        navbarTop.style.top = "-100px"
    }
})

// Modofier l'opacité au scroll

window.addEventListener('scroll', () => {
    if (window.scrollY > 501) {
        section.style.opacity = 0.5
    } else {
        section.style.opacity = 1
    }



})
