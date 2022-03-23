let header = document.querySelector(".header");
let searchForm = document.querySelector(".searchForm");
let navbar = document.querySelector(".navbar");
let searchBtn = document.querySelector("#searchBtn");
let menuBtn = document.querySelector("#menuBtn");

window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");

    if (window.screenY > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
};

searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
};