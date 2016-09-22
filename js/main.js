window.addEventListener("load", function() {
var span = document.getElementById("span")
 span.addEventListener("click", function(e) {
    tarjetasNuevas(); 
  })
  function tarjetasNuevas(){
    var formCreado = document.createElement("form");
    var inputCreado = document.createElement("input");
    var botonCreado = document.createElement("button");
      function anadirTarjetas(){
        span.style.display = "none";

        tarjetas.insertBefore(formCreado, tarjetas.childNodes[0]);

        inputCreado.placeholder = "añadir una lista";
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

          formCreado.style.display = "none";
          tarjetas.removeAttribute("class","contenedorCreado")
          var valueTarjetas = inputCreado.value;
          var tarjetaNombre = document.createElement("span");
          tarjetaNombre.setAttribute("class", "nombreTarjeta");
          tarjetas.insertBefore(tarjetaNombre, tarjetas.childNodes[0]);
          tarjetaNombre.innerText = valueTarjetas;
          var newboton = document.createElement("button");
          newboton.innerText = "añadir tarjeta";
          newboton.setAttribute("class","buttonDos");
          tarjetas.insertBefore(newboton, tarjetas.childNodes[1]);
      });

      }
      botonGuardar();
  };

});     
          // function nuevoanadir(tarjetasNuevas){
          //   botonGuardar();
          //   var nuevatarjeta = document.createElement("span");
          //   nuevatarjeta.setAttribute("class", "span");
          //   tarjetas.insertBefore(nuevatarjeta, tarjetas.childNodes[1])
          // };   