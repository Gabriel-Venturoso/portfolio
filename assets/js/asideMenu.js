const asideMenu = document.querySelector(".aside-menu");

window.addEventListener("scroll", debounce(showMenu, 10))

function showMenu(event){
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(window.scrollY > window.innerHeight);
    if(window.scrollY > window.innerHeight){
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

