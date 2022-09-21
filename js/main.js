const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
    // chowa/wyciąga menu po kliknięciu w hamburger
    nav.classList.toggle('nav--active') 

    // chowa menu po kliknięciu w item/link
    allNavItems.forEach (item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    // na końcu wywołuje funkcje animacji
    handleNavItemsAnimation();
}

// animacja
const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        // dodaje klase animacji
        item.classList.toggle('nav-items-animation')
        // następnie każdy item/link dostaje 0.1s opóźnienia 
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime ++;
    })
}

// nasłuchiwanie na burger ikonę
navBtn.addEventListener('click', handleNav)