const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

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

// zmiana roku w footerze

const handleCurrentYear = () => {
    // const year to funkcja; new Date to obiekt nowej daty; getFullYear to metoda;

    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    // dzięki temu na każdej sekcji jest wykonany poniższy kod 
    allSections.forEach(section =>{

        // jeśli sekcja posiada klasę white-section, sprawdza to.
        // && oraz czy górna krawędź sekcji jest mniejsza lub równa currentSection, czy wesła na sekcje 
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.add('black-bars-color')

              // jeśli sekcja na której jesteśmy nie posiada white-section ale dotknęła krawędzi przeglądarki to ma wykonać kod
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.remove('black-bars-color');
        }

    })
}


// wywołanie funkci zmiany koloru burgera

window.addEventListener('scroll', handleObserver);

// wywołanie funkcji zmiany daty
handleCurrentYear();

// nasłuchiwanie na burger ikonę
navBtn.addEventListener('click', handleNav);