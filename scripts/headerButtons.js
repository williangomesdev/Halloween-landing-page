import { menuBtn, navbar, searchForm, searchBtn } from './variables.js'

menuBtn.onclick = () => {
    navbar.classList.toggle("active")
    searchForm.classList.remove("active")
}

searchBtn.onclick = () => {
    searchForm.classList.toggle("active")
    navbar.classList.remove("active")
}