const bars = document.querySelector('.bars');
const mobileMenu = document.querySelector('.mobile__menu');
const hero = document.querySelector('.hero');
const body = document.querySelector('body')
bars.addEventListener('click', function() {
    if (bars.classList.contains("open")&&mobileMenu.classList.contains('menu__open')) {
        bars.classList.remove('open')
        mobileMenu.classList.remove('menu__open')
    } else {
        mobileMenu.classList.add('menu__open')
        bars.classList.add("open")
    }
    
})





