// funciones de drag and drop

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