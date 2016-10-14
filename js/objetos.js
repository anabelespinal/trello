window.addEventListener("load", function(){
  var ids = 1;
  var trelloObject = new Trello();
  function Trello(){
    // nonbrando a los elementos de html
    this.anadirLista = document.getElementById("anadirLista");
    this.contenedor = document.getElementById("contenedor");
    this.formCreado = document.getElementById("formCreado");
    this.inputCreado = document.getElementById("inputCreado");
    this.botonCreado = document.getElementById("botonCreado");
    this.tarjetasContenedor = document.getElementById("tarjetasContenedor");

    this.anadirLista.addEventListener("click", function(){
      trelloObject.anadirLista.style.display = "none";
      trelloObject.formCreado.style.display = "inline-block";
      trelloObject.inputCreado.focus();
    });
    this.botonCreado.addEventListener("click", NombresLista);
  }

  function NombresLista(valor){
    trelloObject.formCreado.style.display = "none";
    var nombreLista = document.createElement("span");
    var anadirTarjeta = document.createElement("button");
    nombreLista.innerText = valor; //ver error

    nombreLista.setAttribute("id", "nombreLista");
    anadirTarjeta.innerText = "añadir tarjetas";
    anadirTarjeta.setAttribute("id", "anadirTarjeta");
    trelloObject.anadirLista.parentElement.appendChild(nombreLista);
    trelloObject.anadirLista.parentElement.appendChild(anadirTarjeta);
    trelloObject.inputCreado.value = "";

    contenedorTarjetas = document.createElement("div");
    anadirTarjeta.parentElement.insertBefore(contenedorTarjetas, anadirTarjeta.parentElement.children[3]);
    contenedorTarjetas.setAttribute("class", "contenedorTarjetas");

    nuevoDiv();//llamando a la funcion del contenedor nuevo
  // dando el evento para añadir tarjetas
    anadirTarjeta.addEventListener("click", function(){
      crearTarjetas(anadirTarjeta, contenedorTarjetas);
    });
  }
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
  }

//funcion para el nuevo contenedor
  function nuevoDiv(){
    var newDiv = document.createElement("div");
    trelloObject.contenedor.appendChild(newDiv);
    newDiv.setAttribute("class", "newDiv");
    newDiv.appendChild(anadirLista);
    newDiv.appendChild(formCreado);
    anadirLista.style.display = "inline-block";
  }
});