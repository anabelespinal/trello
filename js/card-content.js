function formCrearTarjetas(anadirTarjeta, contenedorTarjetas){
  anadirTarjeta.style.display = "none";

  // creando el form para el texarea
  var nuevoForm = document.createElement("form");
  contenedorTarjetas.appendChild(nuevoForm);
  nuevoForm.setAttribute("class","newForm");
  var textArea = document.createElement("textarea");
  nuevoForm.appendChild(textArea);
  textArea.focus();  
  textArea.setAttribute("class", "textArea");
  var boton = document.createElement("button");
  nuevoForm.appendChild(boton);
  boton.setAttribute("class", "boton");
  boton.innerText = "AÑADIR";

  // evento para añadir una nueva tarjeta
  boton.addEventListener("click", function(e){
    e.preventDefault();
    nuevaTarjeta(anadirTarjeta,contenedorTarjetas, nuevoForm, textArea);
  });
}