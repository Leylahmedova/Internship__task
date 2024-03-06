const brands=document.getElementById("brends")
const menu=document.querySelector(".menu")
const navIcon=document.querySelector(".nav__menu")
const navMenu=document.querySelector(".menu__brands")
const close=document.querySelector(".close")
brands.addEventListener('mouseenter', () => {
    menu.classList.remove("close");
    menu.classList.add("open");
});

menu.addEventListener('mouseleave', () => {
    menu.classList.remove("open");
    menu.classList.add("close");
});

navIcon.addEventListener("click",()=>{
    navMenu.style.left = "0";
})
close.addEventListener("click",()=>{
    navMenu.style.left = "-100%";
})