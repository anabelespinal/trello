// window.addEventListener("load", function(){
//   // var trelloObject = new Trello();
// });
  
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
    this.botonCreado.addEventListener("click", function(){
      NombresLista(trelloObject.inputCreado, anadirLista);
    });
  }