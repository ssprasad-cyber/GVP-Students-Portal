const btn = document.querySelector(".menu");
const link = document.querySelector(".links");
const nav = document.querySelector("nav");
btn.addEventListener("click",() => {
    link.classList.toggle("mobile-menu")
    nav.classList.toggle("nav-li")
})
