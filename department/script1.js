const btn = document.querySelector(".menu");
const link = document.querySelector(".links");
const nav = document.querySelector("nav");
const menu = document.querySelector(".container");
const e = document.querySelector(".he");
btn.addEventListener("click",() => {
    link.classList.toggle("mobile-menu");
    nav.classList.toggle("nav-li");
    menu.classList.toggle("change");
})
