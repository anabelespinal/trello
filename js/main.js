window.addEventListener("load", function() {
var span = document.getElementById("span");
var tarjetas = document.getElementById("tarjetas");
var seccion = document.getElementById("seccion");
 span.addEventListener("click", function() {
    tarjetasNuevas(); 
  })
  function tarjetasNuevas(){
    var formCreado = document.createElement("form");
    formCreado.setAttribute("id","formularioCreado")
    var inputCreado = document.createElement("input");
    var botonCreado = document.createElement("button");
      function anadirTarjetas(){
        span.style.display = "none";

        tarjetas.insertBefore(formCreado, tarjetas.childNodes[0]);

        inputCreado.placeholder = "añadir una lista...";
        formCreado.insertBefore(inputCreado, formCreado.childNodes[0]).classList.add("inputCreado");

        var texto = document.createTextNode("Guardar");
        botonCreado.appendChild(texto);
        formCreado.insertBefore(botonCreado, formCreado.childNodes[1]).classList.add("botonCreado");

        tarjetas.classList.add("contenedorCreado");
      }

      function botonGuardar(){
        anadirTarjetas();
        botonCreado.addEventListener("click",function(e){
          e.preventDefault();
// version 2
          formCreado.style.display = "none";
          var valueTarjetas = inputCreado.value;
          var tarjetaNombre = document.createElement("span");
          tarjetaNombre.setAttribute("class", "nombreTarjeta");
          tarjetas.insertBefore(tarjetaNombre, tarjetas.childNodes[0]);
          tarjetaNombre.innerText = valueTarjetas;
          var newboton = document.createElement("button");
          newboton.innerText = "añadir tarjeta";
          newboton.setAttribute("class","buttonDos");
          tarjetas.insertBefore(newboton, tarjetas.childNodes[1]);
          newtar();  
        });
          function newtar(){
            span.style.display = "inline-block";
            contenedorNuevo = document.createElement("div");
            // contenedorNuevo.style.cssFloat = "left";
            contenedorNuevo.setAttribute("class", "nuevoContenedor");
            contenedorNuevo.insertBefore(formCreado, contenedorNuevo.childNodes[0]);
            contenedorNuevo.insertBefore(span, contenedorNuevo.childNodes[0]);

            inputCreado.placeholder = "añadir una lista...";
            formCreado.insertBefore(inputCreado, formCreado.childNodes[0]).classList.add("inputCreado");

            var texto = document.createTextNode("Guardar");
            botonCreado.appendChild(texto);
            formCreado.insertBefore(botonCreado, formCreado.childNodes[1]).classList.add("botonCreado");
            seccion.appendChild(contenedorNuevo);
            span.addEventListener("click",  function(){
              var formHtml = document.getElementById("repeticion");
              formHtml.style.display = "inline-block";
              // formHtml.style.marginTop = "-10em";
            })
          }
// spanForm.parentNode.insertBefore(newTarjeta,spanForm.previousSibling)
      }
      botonGuardar();;
  };

});  