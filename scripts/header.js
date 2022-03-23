let searchForm = document.querySelector(".searchForm");
let searchBtn = document.querySelector("#searchBtn");

searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
};