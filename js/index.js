
const headerHamburguesa = document.querySelector(`.Header-hamburguesa`)

const headerNav = document.querySelector(`.mobile`)


headerHamburguesa.addEventListener(`click` , () => {
    headerNav.classList.toggle(`isActive`)
})