/* Contador de tiempo de video */

document.querySelector(".play").addEventListener("click", cronometrar);
document.querySelector(".pausa").addEventListener("click", parar);

document.getElementById("hms").innerText = "00:00";

function cronometrar() {
  document.querySelector(".video").play();
  id = setInterval(escribir, 1000);
  document.querySelector(".play").removeEventListener("click", cronometrar);
}
i = 0;
function escribir() {
  k = parseInt(document.querySelector(".video").currentTime.toFixed(0));
  k = k * 1000;
  let date = new Date(k);

  let m = date.getMinutes();
  let s = date.getSeconds();

  sAux = s < 10 ? `0${s}` : s;
  mAux = m < 10 ? `0${m}` : m;

  document.getElementById("hms").innerHTML = `${mAux}:${sAux}`;
  //console.log(document.querySelector(".video").currentTime);
}

function parar() {
  document.querySelector(".video").pause();
  clearInterval(id);
  document.querySelector(".play").addEventListener("click", cronometrar);
}
/* ------------------------------------- */
