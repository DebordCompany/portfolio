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
var h2Select = document.querySelectorAll("h2");
var btnMostrar = document.querySelectorAll(".minimo");
var filtro = document.querySelectorAll(".fondo");
var swiperSlide = document.querySelector("#tiempo");
var swiperSlideactive = document.querySelectorAll(".swiper-slide-active");

function ver() {
  this.classList.toggle("ver");
}

btnMostrar.forEach(function (elemento) {
  elemento.addEventListener("click", ver);
});
function clear() {
  if (swiperSlide.classList.contains("swiper-slide-next")) {
    h2Select.forEach(function (elemento) {
      elemento.classList.remove("ver");
    });
    filtro.forEach(function (elemento) {
      elemento.classList.remove("filtro");
    });
    console.log("hola");
  }
}
clear();
console.log(swiperSlide.classList.contains("swiper-slide-active"));

/*btnMostrar.addEventListener("click", casa);
function casa() {
  h2Select.forEach(function () {
    h2Select.classList.toggle("ver");
    filtro.classList.toggle("filtro");
  });
}*/

//cambio de imagen vietnam

var edited01 = document.getElementById("vietnam");
var boton01 = document.getElementById("trans-01");
var botonreverse01 = document.getElementById("trans--01");

boton01.addEventListener("click", cambio01, { passive: true });

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
