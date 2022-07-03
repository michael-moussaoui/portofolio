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
const title = document.querySelector('.titleOne')
const title2 = document.querySelector('.titleTwo')
const studiesP = document.querySelector('.studiesP')
const title3 = document.querySelector('.titleThree')
const myLanguage = document.querySelector('.myLanguage')
const myTools = document.querySelector('.myTools')
const title4 = document.querySelector('.titleFour')
const aboutMe = document.querySelector('.aboutMe > p')
const title5 = document.querySelector('.titleFive')






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



// window.addEventListener('mousemove', (e) => {

//     const speed = myName.getAttribute('data-speed')
//     const speedP = presentation.getAttribute('data-speed')

//     const x = (window.innerWidth + e.pageX * speed) / 100
//     const y = (window.innerHeight + e.pageY * speed) / 100
//     const x1 = (window.innerWidth - e.pageX * speed) / 100
//     const y1 = (window.innerHeight - e.pageY * speed) / 100

//     myName.style.transform = `translateX(${x}px) translateY(${y}px)`
//     presentation.style.transform = `translateX(${x1}px) translateY(${y1}px)`

// })
// Afficher la barre de navigation au scroll
window.addEventListener('scroll', (event) => {

    if (scrollY > 800) {
        navbarNav.style.top = "0px"
        navbarNav.classList.add('active')
        arowUp.style.visibility = 'visible'

    } else {
        navbarNav.style.top = "-100px"
        navbarNav.classList.remove('active')
        arowUp.style.visibility = 'hidden'

    }
})






// hover navlink 
link.addEventListener('mouseover', e => {
    console.log('hover');
    // link.classList.add('hover')

})




// Effacer le formulaire après la soumission
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }