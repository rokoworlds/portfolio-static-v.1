const nav = document.querySelector('.nav--list')
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav--link')

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    })
})
