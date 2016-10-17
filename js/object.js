// window.addEventListener("load", function(){
//   // var trelloObject = new Trello();
// });
var trelloObject = new TrelloConstructor();

function TrelloConstructor(){
  // nonbrando a los elementos de html
  this.spanAnadirLista = document.getElementById("anadirLista-js");
  this.contenedor = document.getElementById("contenedorGeneral-js");
  this.formHtml = document.getElementById("formHtml-js");
  this.inputHtml = document.getElementById("inputHtml-js");
  this.botonHtml = document.getElementById("botonHtml-js");

  this.spanAnadirLista.addEventListener("click", function(){
    trelloObject.spanAnadirLista.style.display = "none";
    trelloObject.formHtml.style.display = "inline-block";
    trelloObject.inputHtml.focus();
  });
  this.botonHtml.addEventListener("click", function(){
    nombrarListas(trelloObject.inputHtml, trelloObject.spanAnadirLista);
  });
}