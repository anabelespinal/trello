function modalUno (valor, valor2){
  var modal = document.getElementById("modal-span");
  modal.style.display = "block";
  var h4 = document.getElementsByClassName("h4")[0];
  h4.innerText = valor;

  var h6 = document.getElementById("h6");
  h6.innerText = "en lista: " + valor2;

  var bt = document.getElementById("b-check");
  bt.addEventListener("click", smallModal);
}


function smallModal(){
  var article = document.getElementById("article");
  // article.style.display = "block";
  var botonCheck = document.getElementById("botonCheck");
  botonCheck.addEventListener("click", function(){
    checkList(article);
  });  
}

function checkList(article){
  // article.style.display ="none";
  var inputCheck = document.getElementById("inputCheck");
  // inputCheck.focus();
  var divcont = document.createElement("div");
  var contCheck = document.getElementById("checklist");
  var nombreChecklist  =document.createElement("h4");
  nombreChecklist.innerText = inputCheck.value;
  divcont.appendChild(nombreChecklist);
  contCheck.appendChild(divcont);
  inputCheck.value = "";
  var p = document.createElement("p");
  p.innerText = "añadir elemeto";
  p.style.cursor = "pointer";
  divcont.appendChild(p);

  p.addEventListener("click", function(){
    anadirElemeto(p, divcont);
  })
}

function anadirElemeto(p, divcont){
  p.style.display = "none"; 
  var textCheck = document.createElement("textarea");
  var contText = document.createElement("div");
  divcont.insertBefore(contText, p);
  contText.appendChild(textCheck);
  var boton = document.createElement("button");
  boton.innerText = "Añadir";
  boton.style.display = "block";
  contText.appendChild(boton);

  boton.addEventListener("click", function(e){
    e.preventDefault();
    listChecklist(contText,p, divcont);
  });
}

function listChecklist(contText,p, divcont){
  contText.remove();
  p.style.display = "block";

  var list = document.createElement("div");
  divcont.insertBefore(list, p);
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
}








// var ids = 1;

// function nuevaTarjeta(anadirTarjeta,contenedorTarjetas, newForm, textArea){
//   newForm.style.display = "none";

//   // span que tendra la nueva tarjeta
//   var nuevaTarjeta = document.createElement("span");
//   nuevaTarjeta.innerText = textArea.value;
//   contenedorTarjetas.appendChild(nuevaTarjeta);
//   contenedorTarjetas.parentElement.appendChild(anadirTarjeta);
//   nuevaTarjeta.setAttribute("class", "newTarjeta");
//   nuevaTarjeta.setAttribute("id", ids++);
//   nuevaTarjeta.setAttribute("draggable", "true");
//   anadirTarjeta.style.display = "inline-block";

//   // nombrando los eventos para drag and drop
//   contenedorTarjetas.addEventListener("drop", drop);
//   contenedorTarjetas.addEventListener("dragover",allowDrop);// contetarjetas
//   nuevaTarjeta.addEventListener("dragstart",dragStart);
// }