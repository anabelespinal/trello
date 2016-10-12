window.addEventListener("load", trello);
var ids = 1;

function trello(){
  // nonbrando a los elementos de html
  var anadirLista = document.getElementById("anadirLista");
  var contenedor = document.getElementById("contenedor");
  var formCreado = document.getElementById("formCreado");
  var inputCreado = document.getElementById("inputCreado");
  var botonCreado = document.getElementById("botonCreado");
  var tarjetasContenedor = document.getElementById("tarjetasContenedor");

  anadirLista.addEventListener("click", function(){
    aparecerForm();
  });

// funcion para eleminar el span de añadir lista
  function aparecerForm(){
    anadirLista.style.display = "none";
    formCreado.style.display = "inline-block";
    inputCreado.focus();
  }

// dando el evento para el boton del html
  botonCreado.addEventListener("click", function(e){
    e.preventDefault();
    formCreado.style.display = "none";
// creando los elementos del nombre de lista y añadir tarjeta
    var nombreLista = document.createElement("span");
    var anadirTarjeta = document.createElement("button");
    nombreLista.innerText = inputCreado.value;
  
    nombreLista.setAttribute("id", "nombreLista")
    anadirTarjeta.innerText = "añadir tarjetas";
    anadirTarjeta.setAttribute("id", "anadirTarjeta");
    anadirLista.parentElement.appendChild(nombreLista);
    anadirLista.parentElement.appendChild(anadirTarjeta);
    inputCreado.value = "";

    //contenedor para las tarjetas creadas
    var contenedorTarjetas = document.createElement("div");
    anadirTarjeta.parentElement.insertBefore(contenedorTarjetas, anadirTarjeta.parentElement.children[3]);
    contenedorTarjetas.setAttribute("class", "contenedorTarjetas");

    nuevoDiv();//llamando a la funcion del contenedor nuevo

// dando el evento para añadir tarjetas
    anadirTarjeta.addEventListener("click", function(){
      anadirTarjeta.style.display = "none";

      // creando el form para el texarea
      var newForm = document.createElement("form");
      contenedorTarjetas.appendChild(newForm);
      newForm.setAttribute("class","newForm");
      var textArea = document.createElement("textarea");
      newForm.appendChild(textArea);
      textArea.focus();  
      textArea.setAttribute("class", "textArea");
      var boton = document.createElement("button");
      newForm.appendChild(boton);
      boton.setAttribute("class", "boton");
      boton.innerText = "GUARDAR";

// evento para añadir una nueva tarjeta
      boton.addEventListener("click", function(e){
        e.preventDefault();
        newForm.style.display = "none";

        // span que tendra la nueva tarjeta
        var newTarjeta = document.createElement("span");
        newTarjeta.innerText = textArea.value;
        contenedorTarjetas.appendChild(newTarjeta);
        // tarjetasContenedor.appendChild(anadirTarjeta);
        newTarjeta.setAttribute("class", "newTarjeta");
        newTarjeta.setAttribute("id", ids++);
        newTarjeta.setAttribute("draggable", "true");
        anadirTarjeta.style.display = "inline-block";

        // funciones para el drag and drop
        function dragStart(event){
          event.dataTransfer.setData("text", event.target.id);
        }
        function allowDrop(event){
          event.preventDefault();
        }
        function drop(event){
          event.preventDefault();
          var data = event.dataTransfer.getData("text");
          event.target.parentNode.appendChild(document.getElementById(data));

          // validando el appendChild para mover las tarjetas
          if (event.target.firstChild.nextSibling == null){
            event.target.appendChild(document.getElementById(data));
          }else if (event.target.firstChild.nextSibling != null ){
            event.target.insertBefore(document.getElementById(data), event.target.children[1]);
          }
        }

        // nombrando los eventos para drag and drop
        contenedorTarjetas.addEventListener("drop", drop);
        contenedorTarjetas.addEventListener("dragover",allowDrop);
        newTarjeta.addEventListener("dragstart", dragStart);
      });
    });
  });

  //funcion para el nuevo contenedor
  function nuevoDiv(){
    var newDiv = document.createElement("div");
    contenedor.appendChild(newDiv);
    newDiv.setAttribute("class", "newDiv");
    newDiv.appendChild(anadirLista);
    newDiv.appendChild(formCreado);
    anadirLista.style.display = "inline-block"
  }
}