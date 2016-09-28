window.addEventListener("load", function(){
  var contenedor = document.getElementById("contenedor");
  var anadirLista = document.getElementById("anadirLista");
  var formCreado = document.getElementById("formCreado");
  var inputCreado = document.getElementById("inputCreado");
  var botonCreado = document.getElementById("botonCreado");
  var tarjetasContenedor = document.getElementById("tarjetasContenedor");

  anadirLista.addEventListener("click", function(){
    aparecerForm();
  });

  function aparecerForm(){
    anadirLista.style.display = "none";
    formCreado.style.display = "inline-block";
    inputCreado.focus();
  }

  botonCreado.addEventListener("click", function(e){
    e.preventDefault();
    formCreado.style.display = "none";
    var nombreLista = document.createElement("span");
    var anadirTarjeta = document.createElement("button");
    nombreLista.innerText = inputCreado.value;
  
    nombreLista.setAttribute("id", "nombreLista")
    anadirTarjeta.innerText = "añadir tarjetas";
    anadirTarjeta.setAttribute("id", "anadirTarjeta");
    anadirLista.parentElement.appendChild(nombreLista);
    anadirLista.parentElement.appendChild(anadirTarjeta);
    inputCreado.value = "";

    nuevoDiv();

    anadirTarjeta.addEventListener("click", function(){
      anadirTarjeta.style.display = "none";
      var contenedorTarjetas = document.createElement("div");
      anadirTarjeta.parentElement.appendChild(contenedorTarjetas);
      contenedorTarjetas.setAttribute("class", "contenedorTarjetas");
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

      boton.addEventListener("click", function(e){
        e.preventDefault();
        newForm.style.display = "none";
        var newTarjeta = document.createElement("span");
        newTarjeta.innerText = textArea.value
        contenedorTarjetas.appendChild(newTarjeta);
        contenedorTarjetas.parentElement.appendChild(anadirTarjeta);
        newTarjeta.setAttribute("class", "newTarjeta");
        anadirTarjeta.style.display = "inline-block";
      })
    });
  });

  function nuevoDiv(){
    var newDiv = document.createElement("div");
    contenedor.appendChild(newDiv);
    newDiv.setAttribute("class", "newDiv")
    newDiv.appendChild(anadirLista);
    newDiv.appendChild(formCreado);
    anadirLista.style.display = "inline-block"
  }
});