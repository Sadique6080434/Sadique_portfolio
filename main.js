//menu 
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu__navbar")
const menuInput = document.querySelector("#menu");
const mediaQuery = window.matchMedia( "(max-width: 992px)" );
const menuBig = document.querySelector(".menu__navbar-bigger")

menu.addEventListener("click",(e)=>{
    e.stopPropagation();
})

menuInput.addEventListener("click",(e)=>{
    e.stopPropagation();
    if (mediaQuery.matches) {
        if(menuNav.classList.contains("opening")){
            menuNav.style.opacity="0";
            menuNav.classList.add("invisible");
            menuNav.classList.remove("opening");
            menu.classList.remove("menu--back");
            return;
        }

        if(!menuBig.classList.contains("opening")){
            menuBig.style.left="0%";
            menuBig.classList.add("opening");
        }
        else{
            menuBig.style.left="-100%";
            menuBig.classList.remove("opening");
        }
    }
    else {
        if(menuBig.classList.contains("opening")){
            menuBig.style.left="-100%";
            menuBig.classList.remove("opening");
            return;
        }
        menu.classList.toggle("menu--back");
        if(menu.classList.contains("menu--back")){
            menuNav.style.opacity="1";
            menuNav.classList.remove("invisible");
            menuNav.classList.add("opening");
        }
        else{
            menuNav.style.opacity="0";
            menuNav.classList.add("invisible");
            menuNav.classList.remove("opening");
        }
    
        document.body.addEventListener("click",()=>{
            if(menu.classList.contains("menu--back")){
                menuInput.click();
            }
        })
    }
})

document.querySelector(".menu__list-bigger").addEventListener("click",()=>{
    menuInput.click();
})







//hover
const hoverItems = document.querySelectorAll("[data-hover-in]");
hoverItems.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
        const HoverIt = document.querySelector(`[data-hover-item=${item.getAttribute('data-hover-in')}]`);
        HoverIt.style.backgroundSize="100%";

    })
    item.addEventListener("mouseout",()=>{
        const HoverIt = document.querySelector(`[data-hover-item=${item.getAttribute('data-hover-in')}]`);
        HoverIt.style.backgroundSize="0";
    })
    
    
})



//work
const workBoxes = document.querySelectorAll(".work__box");
workBoxes?.forEach((box)=>{
    box.addEventListener("mouseover",()=>{
        const workClose = box.querySelector(".work__close");
        workClose.style.left="0%";
    })
    box.addEventListener("mouseout",()=>{
        const workClose = box.querySelector(".work__close");
        workClose.style.left="-100%";
    })
})


