const toggleBtn = document.querySelector(".menu-toggle");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("show");
});

sidebar.addEventListener("click", function (e) {
    e.stopPropagation();
});

document.addEventListener("click", function () {
    sidebar.classList.remove("show");
});