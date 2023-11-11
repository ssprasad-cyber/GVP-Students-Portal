const btn = document.querySelector(".menu");
const link = document.querySelector(".links");
const nav = document.querySelector("nav");
const nut = document.querySelector(".nul");
const main = document.querySelector(".main");
const page1 = document.querySelector(".page1");
btn.addEventListener("click",() => {
    link.classList.toggle("mobile-menu");
    nav.classList.toggle("nav-li");
    nut.classList.toggle("null-a");
    main.classList.toggle("null-a");
    page1.classList.toggle("null-a");
})
console.log(nut)
//notification bar;
const notify = document.querySelector(".notifications");
const notifications = new Set(["eager club batch 1 -20 members", "eager club batch 2 -34 members", "eager club batch 3 -102 members"]);

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