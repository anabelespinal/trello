function nombrarListas(valor, spanAnadirLista){
  trelloObject.formHtml.style.display = "none";
  // creando el span para el nombre de la lista y el boton para añadir tarjeta
  var nombreLista = document.createElement("span");
  var anadirTarjeta = document.createElement("button");
  nombreLista.innerText = valor.value;

  nombreLista.setAttribute("class", "nombreLista");
  anadirTarjeta.innerText = "añadir tarjetas";
  anadirTarjeta.setAttribute("class", "anadirTarjeta");
  trelloObject.spanAnadirLista.parentElement.appendChild(nombreLista);
  trelloObject.spanAnadirLista.parentElement.appendChild(anadirTarjeta);
  valor.value = "";

// contenedor para las tarjetas
  var contenedorTarjetasNuevas = document.createElement("div");
  spanAnadirLista.parentElement.insertBefore(contenedorTarjetasNuevas, spanAnadirLista.parentElement.children[3]);
  contenedorTarjetasNuevas.setAttribute("class", "contenedorTarjetas");

  contenedorNuevaLista();

  anadirTarjeta.addEventListener("click", function(){
    formCrearTarjetas(anadirTarjeta, contenedorTarjetasNuevas, nombreLista.innerText);
  });
}

//funcion para el nuevo contenedor
function contenedorNuevaLista(){
  var nuevaFila= document.createElement("div");
  trelloObject.contenedor.appendChild(nuevaFila);
  nuevaFila.setAttribute("class", "nuevaFila");
  nuevaFila.appendChild(trelloObject.spanAnadirLista);
  nuevaFila.appendChild(trelloObject.formHtml);
  trelloObject.spanAnadirLista.style.display = "inline-block";
  
  trelloObject.botonHtml.disabled = true;
  trelloObject.inputHtml.addEventListener("keyup", function(){
    var longitud = trelloObject.inputHtml.value.length;
    if (longitud <= 0){
      trelloObject.botonHtml.disabled = true;
    }else if (longitud >= 1){
      trelloObject.botonHtml.disabled = false;
    }
  });
}