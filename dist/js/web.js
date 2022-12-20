
const minimo = document.querySelector(".privacidad");
const texto = document.querySelector(".texto");

minimo.addEventListener("click", abrir);
function abrir() {
  texto.classList.toggle("desplegar");
}

