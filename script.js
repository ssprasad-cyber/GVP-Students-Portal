const btn = document.querySelector(".menu");
const link = document.querySelector(".links");
const nav = document.querySelector("nav");
const nut = document.querySelector(".nul");
const main = document.querySelector(".main");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3-1");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");
const page6 = document.querySelector(".page6");
const footer = document.querySelector("footer");
const menu = document.querySelector(".container");
btn.addEventListener("click",() => {
    link.classList.toggle("mobile-menu");
    menu.classList.toggle("change");
    nav.classList.toggle("nav-li");
    nut.classList.toggle("null-a");
    main.classList.toggle("null-a");
    page1.classList.toggle("null-a");
    page2.classList.toggle("null-a");
    page3.classList.toggle("null-a");
    page4.classList.toggle("null-a");
    page5.classList.toggle("null-a");
    page6.classList.toggle("null-a");
    footer.classList.toggle("null-a");
    x.classList.toggle("change");
})
console.log(nut)
//notification bar;
const notify = document.querySelector(".notifications");
const notifications = new Set(["vamsi just visited the code","eager club batch 1 -20 members", "eager club batch 2 -34 members", "eager club batch 3 -102 members"]);

for(const x of notifications.values()){
    const no = document.createElement("span");
    const a = document.createElement("a");
    a.setAttribute("href","")
    const node = document.createTextNode(x);
    no.appendChild(node);
    a.appendChild(no);
    notify.appendChild(a);
    
}

console.log(notify)
