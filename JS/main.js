const body = document.querySelector('body')
const mouse = document.querySelector('#mouse')
const toogler = document.querySelector('.navbar-toggler')
const icon = document.querySelector('.navbar-toggler-icon')
const menu = document.querySelector('.togglerMenu')
const link = document.querySelector('.nav-link')
const circleHover = document.querySelectorAll('.circleHover')
const circleHover1 = document.querySelector('.circleHover1')
const circleHover2 = document.querySelector('.circleHover2')
const svg = document.querySelector('.svg')
const myName = document.getElementById('myName')
const presentation = document.getElementById('presentation')
const navbarTop = document.querySelector('.navbar-nav-top')
const linkTop = document.querySelector('.navbar-link-top')
const navbarNav = document.querySelector('.navbar-nav')
const arowUp = document.querySelector('.arowUp')
const section = document.querySelector('.section')
const title = document.querySelector('.sectionTitle')
const aboutMe = document.querySelector('.aboutMe > p')







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
    svg.classList.toggle('active')


})

// Ajoute une class au survol du bouton menu
circleHover.forEach(element => {


    element.addEventListener('mouseover', () => {
        mouse.classList.add('activeHover')

    })

    element.addEventListener('mouseout', () => {
        mouse.classList.remove('activeHover')

    })

});
// link.addEventListener('mouseout', () => {

// })

window.addEventListener('mousemove', (e) => {


    const speed = myName.getAttribute('data-speed')
    const speedP = presentation.getAttribute('data-speed')

    const x = (window.innerWidth + e.pageX * speed) / 100
    const y = (window.innerHeight + e.pageY * speed) / 100
    const x1 = (window.innerWidth - e.pageX * speed) / 100
    const y1 = (window.innerHeight - e.pageY * speed) / 100

    myName.style.transform = `translateX(${x}px) translateY(${y}px)`
    presentation.style.transform = `translateX(${x1}px) translateY(${y1}px)`

})
// Afficher la barre de navigation au scroll
window.addEventListener('scroll', (event) => {

    if (scrollY > 800) {
        navbarTop.style.top = "0px"
        navbarTop.classList.add('active')
        arowUp.style.visibility = 'visible'

    } else {
        navbarTop.style.top = "-100px"
        navbarTop.classList.remove('showArow')
        arowUp.style.visibility = 'hidden'

    }
})

// Afficher la div aboutMe au scroll
window.addEventListener('scroll', (e) => {
    if (scrollY < 1125) {
        // aboutMe.style.opacity = '1'
        title.style.opacity = '1'
        aboutMe.style.left = '0'

    } else {
        // aboutMe.style.opacity = '0.1'
        aboutMe.style.left = '-120vh'
        title.style.opacity = '0.1'
    }

})

window.addEventListener('scroll', (e) => {
    if (scrollY < 925) {
        title.style.opacity = '1'

    } else {
        title.style.opacity = '0.1'
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
