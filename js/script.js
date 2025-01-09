const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    const isOpen = menu.classList.contains('open');

    if (isOpen) {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        body.classList.remove('no-scroll');
    } else {
        menu.classList.add('open');
        overlay.classList.add('open');
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


