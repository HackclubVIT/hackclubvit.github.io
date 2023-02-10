const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-content");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

hamburger.querySelector(".nav-tags").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));