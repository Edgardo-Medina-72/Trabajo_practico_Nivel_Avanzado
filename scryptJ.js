/* arrastrar y soltar imagenes */

function permitirSoltar(ev) {
  ev.preventDefault();
}

function arrastrar(ev) {
  ev.dataTransfer.setData("figura", ev.target.id);
  ev.target.setAttribute("draggable", "false");
}

function soltar(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("figura");
  ev.target.appendChild(document.getElementById(data));
  //ev.target.classList.add("parJuego");
  ev.target.classList.add("borderTarjetaVacia");
  ev.target.setAttribute("ondragover", "");
}

/* Reiniciar el juego  */

const reinicio = document.querySelector(".reinicio");
reinicio.addEventListener("click", () => {
  window.location.reload();
});

/* document.querySelector(".reinicio").addEventListener("click", reinicio);

function reinicio() {
  window.location.reload();
} */

/* ----------------------------------- */

function borrar(ev) {
  ev.target.classList.add("parJuego");
}
