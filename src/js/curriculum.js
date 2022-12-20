window.onload = function(){
   
    
    // menu interactivo
    
    const boton = document.getElementById("accion");
    const menu = document.getElementById("hide");
    const quitar = document.querySelector(".ul");
    const fuera = document.querySelector(".main");
    
    boton.addEventListener("click", desplegar);
    quitar.addEventListener("click", recoger);
    fuera.addEventListener("click", recoger);
    
    
    function desplegar(desplegar){
        menu.classList.toggle("desplegable")
        
        
    };
    function recoger(){
        menu.classList.remove("desplegable")
        console.log("cerrar")
    }
    
    
    
     };
    