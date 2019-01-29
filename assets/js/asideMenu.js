const asideMenu = document.querySelector(".aside-menu");

showMenu();

window.addEventListener("scroll", debounce(showMenu, 10))

function showMenu(event){
    if(window.scrollY > window.innerHeight*0.6){
        asideMenu.classList.add("active");
    }
    else{
        asideMenu.classList.remove("active");
    }
}

function debounce(func, wait, immediate = true) {
    var timeout;
    
    return function executedFunction() {
        var context = this;
        var args = arguments;
        
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        var callNow = immediate && !timeout;
        
        clearTimeout(timeout);
        
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
};

