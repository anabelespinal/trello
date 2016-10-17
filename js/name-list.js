function nombrarListas(valor, spanAnadirLista){
  trelloObject.formHtml.style.display = "none";
  // creando el span para el nombre de la lista y el boton para añadir tarjeta
  var nombreLista = document.createElement("span");
  var anadirTarjeta = document.createElement("button");
  nombreLista.innerText = valor.value;

  nombreLista.setAttribute("id", "nombreLista");
  anadirTarjeta.innerText = "añadir tarjetas";
  anadirTarjeta.setAttribute("id", "anadirTarjeta");
  trelloObject.spanAnadirLista.parentElement.appendChild(nombreLista);
  trelloObject.spanAnadirLista.parentElement.appendChild(anadirTarjeta);
  valor.value = "";

// contenedor para las tarjetas
  var contenedorTarjetasNuevas = document.createElement("div");
  spanAnadirLista.parentElement.insertBefore(contenedorTarjetasNuevas, spanAnadirLista.parentElement.children[3]);
  contenedorTarjetasNuevas.setAttribute("class", "contenedorTarjetas");

  contenedorNuevaLista();

  anadirTarjeta.addEventListener("click", function(){
    formCrearTarjetas(anadirTarjeta, contenedorTarjetasNuevas);
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
}