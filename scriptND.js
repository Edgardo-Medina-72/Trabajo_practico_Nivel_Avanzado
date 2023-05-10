//despliegue del menu

function desplegar() {
  let menuTema = document.querySelector(".menuTema");
  menuTema.classList.toggle("show");
}

//cambio de tema
function temaDia() {
  document.querySelector("body").classList.add("fondoDia");
  document
    .querySelectorAll("#marco")
    .forEach((mrc) => mrc.classList.add("marcoDia"));
  document
    .querySelectorAll("#relleno")
    .forEach((rlln) => rlln.classList.add("rellenoDia"));
  document
    .querySelectorAll(".botonMenu")
    .forEach((btn) => btn.classList.add("botonMenuDia"));
  document
    .querySelectorAll(".tarjetaM")
    .forEach((card) => card.classList.add("tarjetaMDia"));
  localStorage.setItem("tema", "dia");
}
/* ------------------------------------------------------------ */
function temaNoche() {
  document.querySelector("body").classList.remove("fondoDia");
  document
    .querySelectorAll("#marco")
    .forEach((mrc) => mrc.classList.remove("marcoDia"));
  document
    .querySelectorAll("#relleno")
    .forEach((rlln) => rlln.classList.remove("rellenoDia"));
  document
    .querySelectorAll(".botonMenu")
    .forEach((btn) => btn.classList.remove("botonMenuDia"));
  document
    .querySelectorAll(".tarjetaM")
    .forEach((card) => card.classList.remove("tarjetaMDia"));
  localStorage.setItem("tema", "noche");
}

let infoTema = localStorage.getItem("tema");

if (infoTema == "dia") {
  temaDia();
} else {
  temaNoche();
}
/* ------------------------------------- */
function desplegarM() {
  let menu = document.querySelector("#menu");
  menu.classList.toggle("menu");
}
