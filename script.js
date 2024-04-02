const headernav = document.querySelector(".header__nav");
const togglemenu = document.querySelector(".toggle__menu");

togglemenu.addEventListener("click", ()=>{
    headernav.classList.toggle("open");
     togglemenu.classList.toggle("open");
})