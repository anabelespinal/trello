// var a = document.getElementsByClassName("newTarjeta");
// for(var i = 0; i <= a.length; i++ ){
//     a[i]addEventListener("click", function() {
//       modalUno(a[i].innerText, valor2);
//     });
// }


function modalUno (valor, valor2){
  var modal = document.getElementById("modal-span");
  // modal.style.display = "block";
  var h4 = document.getElementsByClassName("h4")[0];
  h4.innerText = valor;

  var h6 = document.getElementById("h6"); 
  h6.innerText = "en lista: " + valor2;

  var bt = document.getElementById("b-check");
  bt.addEventListener("click", smallModal); 
} 
var a = document.getElementsByClassName("newTarjeta").innerText;
var b = document.querySelector("#listasContenedor span").innerText;
modalUno(a, b);

function smallModal(){
  // var article = document.getElementById("article");
  // article.style.display = "block";
  var botonCheck = document.getElementById("botonCheck");
  var contCheck = document.getElementById("checklist");
  botonCheck.addEventListener("click", function(){
    checkList(contCheck);
  });  
}

function checkList(contCheck){
  // article.style.display ="none";
  var inputCheck = document.getElementById("inputCheck");
  // inputCheck.focus();
  var divcont = document.createElement("div");
  divcont.setAttribute("class", "divcont");
  // var contCheck = document.getElementById("checklist");
  var nombreChecklist  =document.createElement("h4");
  nombreChecklist.innerText = inputCheck.value;
  divcont.appendChild(nombreChecklist);
  // contCheck.appendChild(divcont);
  // inputCheck.value = "";
  var p = document.createElement("p");
  p.innerText = "añadir elemeto";
  p.style.cursor = "pointer";
  divcont.appendChild(p);
  contCheck.appendChild(divcont);
  inputCheck.value = "";

  p.addEventListener("click", function(){
    anadirElemeto(p, divcont);
  })
}

function anadirElemeto(p, divcont){
  // p.style.display = "none"; 
  p.remove();
  var textCheck = document.createElement("textarea");
  var contText = document.createElement("div");
  // divcont.insertBefore(contText, p);
  divcont.appendChild(contText);
  contText.appendChild(textCheck);
  var boton = document.createElement("button");
  boton.innerText = "Añadir";
  boton.style.display = "block";
  contText.appendChild(boton);

  boton.addEventListener("click", function(e){
    e.preventDefault();
    listChecklist(contText,p, divcont, textCheck);
  });
}

function listChecklist(contText,p, divcont, textCheck){
  contText.remove();
  // p.style.display = "block";
  divcont.appendChild(p);

  var list = document.createElement("div");
  list.setAttribute("class", "list");
  divcont.insertBefore(list, p);
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class","checkbox");
  list.appendChild(checkbox);
  var tarea = document.createElement("span");
  tarea.innerText = textCheck.value;
  list.appendChild(tarea);
  checkbox.addEventListener("click", function(){
    tachar(checkbox, tarea);
  });
}

function tachar(checkbox, tarea){
  if(checkbox.checked == true){
    tarea.style.textDecoration = "line-through";
  }else{ 
    tarea.style.textDecoration = "none";
  }
}


  // <div class="progress">
  //   <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
  //     <span class="sr-only">60% Complete</span>
  //   </div>
  // </div>