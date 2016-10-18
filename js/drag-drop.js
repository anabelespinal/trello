// funciones de drag and drop

function dragStart(event){
  event.dataTransfer.setData("text", event.target.id);
  event.target.style.color = "blue";
}

function allowDrop(event){//contenedorTarjetas
  event.target.style.color = "black";
  event.preventDefault();
}

function drop(event){
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.parentNode.appendChild(document.getElementById(data));
  // var a = document.querySelectorAll(".contenedorTarjetas");
  // for(var i = 0; i < a.length; i++){
  //  a[i].style.color = "yellow";
  // }
  event.target.style.color = "black";

  // validando el appendChild para mover las tarjetas
  if (event.target.firstChild.nextSibling == null){
    event.target.appendChild(document.getElementById(data));
  }else if (event.target.firstChild.nextSibling != null ){
    event.target.insertBefore(document.getElementById(data), event.target.children[1]);
  }
}