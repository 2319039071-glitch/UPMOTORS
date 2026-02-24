const toggle = document.getElementById("menu-toggle");
const navMobile = document.getElementById("nav-mobile");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navMobile.classList.remove("active");
    overlay.classList.remove("active");
});