
const mouse = document.querySelector('.mouse')
const smallMouse = document.querySelector('.smallMouse')


window.addEventListener('mousemove', (e) => {

    mouse.style.left = e.clientX + 'px'
    mouse.style.top = e.clientY + 'px'

    smallMouse.style.left = e.clientX + 'px'
    smallMouse.style.top = e.clientY + 'px'

})
