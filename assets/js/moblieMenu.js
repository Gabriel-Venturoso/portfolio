let buttonMenu = document.querySelector(".menu-mobile");
let menu = document.querySelector(".menu-mobile-tags");
let menuTags= document.querySelectorAll(".menu-mobile-tags li");

buttonMenu.addEventListener("click", function(){
    buttonMenu.classList.toggle("active");
    menu.classList.toggle("active");
});

for(tag of menuTags){
    tag.addEventListener("click", function(){
        buttonMenu.classList.remove("active");
        menu.classList.remove("active");
    })
}

