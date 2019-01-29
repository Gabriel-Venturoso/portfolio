let buttonMenu = $(".menu-mobile");
let menu = $(".menu-mobile-tags");
let menuTags= $(".menu-mobile-tags li");

buttonMenu.click(function(){
    buttonMenu.toggleClass("active");
    menu.toggleClass("active");
});

menuTags.click(function(){
    buttonMenu.removeClass("active");
    menu.removeClass("active");
})

