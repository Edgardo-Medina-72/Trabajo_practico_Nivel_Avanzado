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
  ev.target.classList.add("parJuego");
  ev.target.setAttribute("ondragover", "");
}

/* Reiniciar el juego  */
document.querySelector(".reinicio").addEventListener("click", reinicio);

function reinicio() {
  window.location.reload();
}