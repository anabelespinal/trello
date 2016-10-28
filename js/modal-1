var ids = 1;

function nuevaTarjeta(anadirTarjeta,contenedorTarjetas, newForm, textArea){
  newForm.style.display = "none";

  // span que tendra la nueva tarjeta
  var nuevaTarjeta = document.createElement("span");
  nuevaTarjeta.innerText = textArea.value;
  contenedorTarjetas.appendChild(nuevaTarjeta);
  contenedorTarjetas.parentElement.appendChild(anadirTarjeta);
  nuevaTarjeta.setAttribute("class", "newTarjeta");
  nuevaTarjeta.setAttribute("id", ids++);
  nuevaTarjeta.setAttribute("draggable", "true");
  anadirTarjeta.style.display = "inline-block";

  // nombrando los eventos para drag and drop
  contenedorTarjetas.addEventListener("drop", drop);
  contenedorTarjetas.addEventListener("dragover",allowDrop);// contetarjetas
  nuevaTarjeta.addEventListener("dragstart",dragStart);
}