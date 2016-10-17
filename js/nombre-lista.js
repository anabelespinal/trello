  var trelloObject = new Trello();

  function NombresLista(valor, anadirLista){
    trelloObject.formCreado.style.display = "none";
    var nombreLista = document.createElement("span");
    var anadirTarjeta = document.createElement("button");
    nombreLista.innerText = valor.value; //ver error

    nombreLista.setAttribute("id", "nombreLista");
    anadirTarjeta.innerText = "añadir tarjetas";
    anadirTarjeta.setAttribute("id", "anadirTarjeta");
    trelloObject.anadirLista.parentElement.appendChild(nombreLista);
    trelloObject.anadirLista.parentElement.appendChild(anadirTarjeta);
    valor.value = "";

    var contenedorTarjetas = document.createElement("div");
    anadirLista.parentElement.insertBefore(contenedorTarjetas, anadirLista.parentElement.children[3]);
    contenedorTarjetas.setAttribute("class", "contenedorTarjetas");

    nuevoDiv();//llamando a la funcion del contenedor nuevo
  // dando el evento para añadir tarjetas
    anadirTarjeta.addEventListener("click", function(){
      crearTarjetas(anadirTarjeta, contenedorTarjetas);
    });
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
