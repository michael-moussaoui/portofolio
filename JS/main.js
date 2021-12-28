const body = document.querySelector('body')
const mouse = document.querySelector('#mouse')
const toogler = document.querySelector('.navbar-toggler')
const icon = document.querySelector('.navbar-toggler-icon')
const menu = document.querySelector('.togglerMenu')
const link = document.querySelector('.nav-link')
const myName = document.querySelector('.myName')
const presentation = document.querySelector('.presentation')
const navbarTop = document.querySelector('.navbar-nav-top')
const linkTop = document.querySelector('.navbar-link-top')
const navbarNav = document.querySelector('.navbar-nav')
const arowUp = document.querySelector('.arowUp')
const section = document.querySelector('.section')





window.addEventListener('mousemove', (e) => {
    mouse.style.left = e.pageX + 'px'
    mouse.style.top = e.pageY + 'px'
})


// Animation Menu au click
toogler.addEventListener('click', () => {
    body.classList.toggle('active')
    body.classList.toggle('background')
    icon.classList.toggle('active')
    menu.classList.toggle('active')
    navbarNav.classList.toggle('clicked')
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

})
// Afficher la barre de navigation au scroll
window.addEventListener('scroll', (event) => {

    if (scrollY > 500) {
        navbarTop.style.top = "0px"
        navbarTop.classList.add('active')
        arowUp.style.visibility = 'visible'

    } else {
        navbarTop.style.top = "-100px"
        navbarTop.classList.remove('showArow')
        arowUp.style.visibility = 'hidden'

    }
})

// hover navlink 
link.addEventListener('mouseover', e => {
    console.log('hover');
    // link.classList.add('hover')

})

// Modifier l'opacité au scroll

// window.addEventListener('scroll', () => {
//     let height = document.scrollTop
//     if (height > 501) {
//         section.style.background = blue
//     }
//     //  else {
//     //     section.style.background = green
//     // }

// })

// $(window).scroll(function () {
//     var height = $(window).scrollTop();

//     if (height > some_number) {
//         // do something
//     }
// });
