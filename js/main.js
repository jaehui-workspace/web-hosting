const btn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', ()=> {
    nav.classList.toggle('show-menu');

    const isExpanded = nav.classList.contains('show-menu');
    btn.setAttribute('aria-expanded', isExpanded);

    if (isExpanded) {
        btn.setAttribute('aria-label', 'Close Menu');
    } else {
        btn.setAttribute('aria-label', 'Open Menu');
    }
});