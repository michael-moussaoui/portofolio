const body = document.querySelector('body')
const mouse = document.querySelector('.mouse')
const toogler = document.querySelector('.navbar-toggler')
const icon = document.querySelector('.navbar-toggler-icon')
const menu = document.querySelector('.togglerMenu')
const link = document.querySelector('.nav-link')
const myName = document.querySelector('.myName')





window.addEventListener('mousemove', (e) => {

    // mouse.style.left = e.pageX + 'px'
    // mouse.style.top = e.pageY + 'px'

    // mouse.style.left = e.pageX + 'px'
    // mouse.style.top = e.pageY + 'px'

})

toogler.addEventListener('click', () => {
    body.classList.toggle('active')
    body.classList.toggle('background')
    icon.classList.toggle('active')
    menu.classList.toggle('active')
    myName.classList.toggle('active')

})

// link.addEventListener('mouseout', () => {

// })

window.addEventListener('mousemove', (e) => {
    const speed = myName.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    myName.style.transform = `translateX(${x}px) translateY(${y}px)`

    mouse.style.left = e.pageX + 'px'
    mouse.style.top = e.pageY + 'px'

})

