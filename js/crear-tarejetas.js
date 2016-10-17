  function crearTarjetas(anadirTarjeta, contenedorTarjetas){
    anadirTarjeta.style.display = "none";

    // creando el form para el texarea
    var newForm = document.createElement("form");
    contenedorTarjetas.appendChild(newForm);
    newForm.setAttribute("class","newForm")
    var textArea = document.createElement("textarea");
    newForm.appendChild(textArea);
    textArea.focus();  
    textArea.setAttribute("class", "textArea")
    var boton = document.createElement("button");
    newForm.appendChild(boton);
    boton.setAttribute("class", "boton");
    boton.innerText = "GUARDAR";

    // evento para añadir una nueva tarjeta
    boton.addEventListener("click", function(e){
      e.preventDefault();
      nuevaTarjeta(anadirTarjeta,contenedorTarjetas, newForm, textArea);
    });
  }
