const navMenu = document.querySelector(".menu-nav");
const navMonster = document.querySelector(".navMonster");
const navBackground = document.querySelector(".nav-background");

navMenu.addEventListener("click", () => {
    navMonster.classList.add("open");
    navBackground.classList.add("active");
});

navBackground.addEventListener("click", () => {
    navMonster.classList.remove("open");
    navBackground.classList.remove("active");
});