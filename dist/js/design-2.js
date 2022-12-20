function carga(){
  var cargado = document.querySelector("#carga");
  cargado.classList.add("cargado")
}


// apertura parrafo

const parrafo = document.querySelectorAll("p")



parrafo.forEach(function(elemento){
    elemento.addEventListener("click", ()=>{
        elemento.classList.toggle("desplegar")
        
    })
})

//cambio de imagen vietnam

var edited01 = document.getElementById("vietnam");
var boton01 = document.getElementById("trans-01");
var botonreverse01 = document.getElementById("trans--01");

boton01.addEventListener("click", cambio01);

function cambio01() {
  edited01.src = "/media/vietnam-pre.webp";
}
botonreverse01.addEventListener("click", regresar01, { passive: true });

function regresar01() {
  edited01.src = "/media/practica vietnam nocturno.webp";
}

//cambio imagen monika

var edited02 = document.getElementById("rolling");
var boton02 = document.getElementById("trans-02");
var botonreverse02 = document.getElementById("trans--02");

boton02.addEventListener("click", cambio02, { passive: true });

function cambio02() {
  edited02.src = "/media/rolling-pre.webp";
}
botonreverse02.addEventListener("click", regresar02, { passive: true });

function regresar02() {
  edited02.src = "/media/rolling stones.png";
}

//cambio imagen bare-postpo

var edited03 = document.getElementById("bare");
var boton03 = document.getElementById("trans-03");
var botonreverse03 = document.getElementById("trans--03");

boton03.addEventListener("click", cambio03, { passive: true });

function cambio03() {
  edited03.src = "/media/bare-postpo-black.webp";
}
botonreverse03.addEventListener("click", regresar03, { passive: true });

function regresar03() {
  edited03.src = "/media/bare-postpo.webp";
}