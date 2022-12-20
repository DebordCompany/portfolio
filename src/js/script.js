var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// desplegar descripcion
var h2Select = document.querySelector("h2");
var btnMostrar = document.querySelector("#ver");
var filtro = document.querySelector("#vietnam");

function casa() {
  h2Select.classList.toggle("ver");
  filtro.classList.toggle("filtro");
}
btnMostrar.addEventListener("click", casa);

//cambio de imagen vietnam

var edited01 = document.getElementById("vietnam");
var boton01 = document.getElementById("trans-01");
var botonreverse01 = document.getElementById("trans--01");

boton01.addEventListener("click", cambio01);

function cambio01() {
  edited01.src = "/media/vietnam-pre.jpg";
}
botonreverse01.addEventListener("click", regresar01);

function regresar01() {
  edited01.src = "/media/practica vietnam nocturno.jpg";
}

//cambio imagen monika

var edited02 = document.getElementById("rolling");
var boton02 = document.getElementById("trans-02");
var botonreverse02 = document.getElementById("trans--02");

boton02.addEventListener("click", cambio02);

function cambio02() {
  edited02.src = "/media/rolling-pre.jpg";
}
botonreverse02.addEventListener("click", regresar02);

function regresar02() {
  edited02.src = "/media/rolling stones.png";
}
