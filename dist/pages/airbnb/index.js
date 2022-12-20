var footer = document.querySelector("#footer");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 0){
        footer.classList.add("scroll");
    }
    else {
        footer.classList.remove("scroll");
    }

    
});

