var ids = 1;

function nuevaTarjeta(anadirTarjeta,contenedorTarjetas, newForm, textArea){
    newForm.style.display = "none";

    // span que tendra la nueva tarjeta
    var newTarjeta = document.createElement("span");
    newTarjeta.innerText = textArea.value
    contenedorTarjetas.appendChild(newTarjeta);
    contenedorTarjetas.parentElement.appendChild(anadirTarjeta);
    newTarjeta.setAttribute("class", "newTarjeta");
    newTarjeta.setAttribute("id", ids++);
    newTarjeta.setAttribute("draggable", "true");
    anadirTarjeta.style.display = "inline-block";
    // newTarjeta.classList.add("bounceOut");

        // nombrando los eventos para drag and drop
    contenedorTarjetas.addEventListener("drop", drop);
    contenedorTarjetas.addEventListener("dragover",allowDrop);
    newTarjeta.addEventListener("dragstart",dragStart);

  }