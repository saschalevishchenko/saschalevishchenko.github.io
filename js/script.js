const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const body = document.body;

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        body.classList.remove('no-scroll');
    } else {
        menu.classList.add('open');
        body.classList.add('no-scroll');
    }
}


window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const backToTopButton = document.querySelector('.back-to-top');

    if (scrollPosition > window.innerHeight) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


