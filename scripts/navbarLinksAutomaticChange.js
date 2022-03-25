import { navbar, searchForm, header, section, navLink } from "./variables.js"

window.onscroll = () => {
    navbar.classList.remove("active")
    searchForm.classList.remove("active")

    if (window.scrollY > 0) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }

    section.forEach((sec) => {
        let top = window.scrollY
        let offset = sec.offsetTop - 200
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLink.forEach((link) => {
                link.classList.remove("active")

                document
                    .querySelector(".header .navbar a[href*=" + id + "]")
                    .classList.add("active")
            })
        }
    })
}