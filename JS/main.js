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

// window.addEventListener('scroll', (e) => {
//     if (scrollY < 1125) {
//         // aboutMe.style.opacity = '1'
//         title.style.opacity = '1'
//         aboutMe.style.left = '0'

//     } else {
//         // aboutMe.style.opacity = '0.1'
//         aboutMe.style.left = '-130vh'
//         title.style.opacity = '0.1'
//     }

// })

window.addEventListener('scroll', (e) => {
    if (scrollY < 900) {
        title.style.opacity = '1'

    } else {
        title.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 975) {
        aboutMe.style.opacity = '1'

    } else {
        aboutMe.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 1675) {
        title2.style.opacity = '1'

    } else {
        title2.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 1855) {
        studiesP.style.opacity = '1'

    } else {
        studiesP.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 2415) {
        title3.style.opacity = '1'

    } else {
        title3.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 2615) {
        myLanguage.style.opacity = '1'

    } else {
        myLanguage.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 2865) {
        myTools.style.opacity = '1'

    } else {
        myTools.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 3200) {
        title4.style.opacity = '1'

    } else {
        title4.style.opacity = '0.1'
    }

})
window.addEventListener('scroll', (e) => {
    if (scrollY < 3965) {
        title5.style.opacity = '1'

    } else {
        title5.style.opacity = '0.1'
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


// Effacer le formulaire après la soumission
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }