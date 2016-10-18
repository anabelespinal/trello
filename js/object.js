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

  this.botonHtml.disabled = true;
  this.inputHtml.addEventListener("keyup", function(){
    var nn = trelloObject.inputHtml.value.length;
    if (nn <= 0){
      trelloObject.botonHtml.disabled = true;
    }else if (nn >= 1){
      trelloObject.botonHtml.disabled = false;
    }
  });

  this.botonHtml.addEventListener("click", function(){
    nombrarListas(trelloObject.inputHtml, trelloObject.spanAnadirLista);
  });
}