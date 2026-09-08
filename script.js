let nav = document.querySelector('nav');
let header_wrap = document.querySelector('.header_wrap');

nav.addEventListener('mouseover', function () {
    nav.classList.add('on');
    header_wrap.classList.add('on');
});

nav.addEventListener('mouseleave', function () {
    nav.classList.remove('on');
    header_wrap.classList.remove('on');
});
