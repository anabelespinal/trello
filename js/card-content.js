function formCrearTarjetas(anadirTarjeta, contenedorTarjetas, valor2){
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

  boton.disabled = true;
  textArea.addEventListener("keyup", function(){
    var longitud = textArea.value.length;
    if (longitud <= 0){
      boton.disabled = true;
    }else if (longitud >= 1){
      boton.disabled = false;
    }
  });

  // evento para añadir una nueva tarjeta
  boton.addEventListener("click", function(e){
    e.preventDefault();
    nuevaTarjeta(anadirTarjeta,contenedorTarjetas, nuevoForm, textArea, valor2);
  });
}