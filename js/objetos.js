// window.addEventListener("load", function(){
//   var ids = 1;
//   var trelloObject = new Trello();
//   function Trello(){
//     // nonbrando a los elementos de html
//     this.anadirLista = document.getElementById("anadirLista");
//     this.contenedor = document.getElementById("contenedor");
//     this.formCreado = document.getElementById("formCreado");
//     this.inputCreado = document.getElementById("inputCreado");
//     this.botonCreado = document.getElementById("botonCreado");
//     this.tarjetasContenedor = document.getElementById("tarjetasContenedor");

//     this.anadirLista.addEventListener("click", function(){
//       trelloObject.anadirLista.style.display = "none";
//       trelloObject.formCreado.style.display = "inline-block";
//       trelloObject.inputCreado.focus();
//     });
//   }
//   trelloObject.botonCreado.addEventListener("click", ejcutarNombre);
//   var ejcutarNombre = new NombresLista(trelloObject.inputCreado.value);

//   function NombresLista(valor){
//     trelloObject.formCreado.style.display = "none";
//     this.nombreLista = document.createElement("span");
//     this.anadirTarjeta = document.createElement("button");
//     ejcutarNombre.nombreLista.innerText = valor; //ver error

//     ejcutarNombre.nombreLista.setAttribute("id", "nombreLista");
//     ejcutarNombre.anadirTarjeta.innerText = "añadir tarjetas";
//     ejcutarNombre.anadirTarjeta.setAttribute("id", "anadirTarjeta");
//     trelloObject.anadirLista.parentElement.appendChild(ejcutarNombre.nombreLista);
//     trelloObject.anadirLista.parentElement.appendChild(ejcutarNombre.anadirTarjeta);
//     trelloObject.inputCreado.value = "";

//     this.contenedorTarjetas = document.createElement("div");
//     ejcutarNombre.anadirTarjeta.parentElement.insertBefore(ejcutarNombre.contenedorTarjetas, ejcutarNombre.anadirTarjeta.parentElement.children[3]);
//     ejcutarNombre.contenedorTarjetas.setAttribute("class", "contenedorTarjetas");

//     nuevoDiv();//llamando a la funcion del contenedor nuevo
//   // dando el evento para añadir tarjetas
//     ejcutarNombre.anadirTarjeta.addEventListener("click", crearTarjetas);

//     function crearTarjetas(){
//       ejcutarNombre.anadirTarjeta.style.display = "none";

//       // creando el form para el texarea
//       var newForm = document.createElement("form");
//       ejcutarNombre.contenedorTarjetas.appendChild(newForm);
//       newForm.setAttribute("class","newForm")
//       var textArea = document.createElement("textarea");
//       newForm.appendChild(textArea);
//       textArea.focus();  
//       textArea.setAttribute("class", "textArea")
//       var boton = document.createElement("button");
//       newForm.appendChild(boton);
//       boton.setAttribute("class", "boton");
//       boton.innerText = "GUARDAR";

//       // evento para añadir una nueva tarjeta
//       boton.addEventListener("click", function(e){
//         e.preventDefault();
//         newForm.style.display = "none";

//         // span que tendra la nueva tarjeta
//         var newTarjeta = document.createElement("span");
//         newTarjeta.innerText = textArea.value
//         ejcutarNombre.contenedorTarjetas.appendChild(newTarjeta);
//         ejcutarNombre.contenedorTarjetas.parentElement.appendChild(ejcutarNombre.anadirTarjeta);
//         newTarjeta.setAttribute("class", "newTarjeta");
//         newTarjeta.setAttribute("id", ids++);
//         newTarjeta.setAttribute("draggable", "true");
//         ejcutarNombre.anadirTarjeta.style.display = "inline-block";

//         // funciones para el drag and drop
//         function dragStart(event){
//           event.dataTransfer.setData("text", event.target.id);
//         }
//         function allowDrop(event){
//           event.preventDefault();
//         }
//         function drop(event){
//           event.preventDefault();
//           var data = event.dataTransfer.getData("text");
//           event.target.parentNode.appendChild(document.getElementById(data));

//           // validando el appendChild para mover las tarjetas
//           if (event.target.firstChild.nextSibling == null){
//             event.target.appendChild(document.getElementById(data));
//           }else if (event.target.firstChild.nextSibling != null ){
//             event.target.insertBefore(document.getElementById(data), event.target.children[1]);
//           }
//         }

//         // nombrando los eventos para drag and drop
//         ejcutarNombre.contenedorTarjetas.addEventListener("drop", drop);
//         ejcutarNombre.contenedorTarjetas.addEventListener("dragover",allowDrop);
//         newTarjeta.addEventListener("dragstart", dragStart);
//       });
//     }
//   }
// //funcion para el nuevo contenedor
//   function nuevoDiv(){
//     var newDiv = document.createElement("div");
//     trelloObject.contenedor.appendChild(newDiv);
//     newDiv.setAttribute("class", "newDiv");
//     newDiv.appendChild(anadirLista);
//     newDiv.appendChild(formCreado);
//     anadirLista.style.display = "inline-block";
//   }
// });




// window.addEventListener("load", function(){
//   function Trello(){
//     // nonbrando a los elementos de html
//     this.anadirLista = document.getElementById("anadirLista");
//     this.contenedor = document.getElementById("contenedor");
//     this.formCreado = document.getElementById("formCreado");
//     this.inputCreado = document.getElementById("inputCreado");
//     this.botonCreado = document.getElementById("botonCreado");
//     this.nombreLista = document.createElement("span");
//     this.anadirTarjeta = document.createElement("button");
//     this.contenedorTarjetas = document.createElement("div");
//     this.newForm = document.createElement("form");
//     this.textArea = document.createElement("textarea");
//     this.boton = document.createElement("button");
//     this.newTarjeta = document.createElement("span");

//     this.aparecerForm = this.anadirLista.addEventListener("click", function(){
//       trelloObject.anadirLista.style.display = "none";
//       trelloObject.formCreado.style.display = "inline-block";
//     });

//     this.nombreListaAnadir = this.botonCreado.addEventListener("click", function(){
//       trelloObject.formCreado.style.display = "none";
//       trelloObject.nombreLista.setAttribute("id", "nombreLista");
//       trelloObject.nombreLista.innerText = trelloObject.inputCreado.value;
//       trelloObject.anadirTarjeta.innerText = "añadir tarjetas";
//       trelloObject.anadirTarjeta.setAttribute("id", "anadirTarjeta");
//       trelloObject.anadirLista.parentElement.appendChild(trelloObject.nombreLista);
//       trelloObject.anadirLista.parentElement.appendChild(trelloObject.anadirTarjeta);
//     });

//     this.crearTarjetasNuevas = this.anadirTarjeta.addEventListener("click", function(){
//       trelloObject.anadirTarjeta.style.display = "none";
//       trelloObject.anadirTarjeta.parentElement.insertBefore(trelloObject.contenedorTarjetas, trelloObject.anadirTarjeta.parentElement.children[3]);
//       trelloObject.contenedorTarjetas.setAttribute("class", "contenedorTarjetas");
//       trelloObject.contenedorTarjetas.appendChild(trelloObject.newForm);
//       trelloObject.newForm.setAttribute("class", "newForm");
//       trelloObject.newForm.appendChild(trelloObject.textArea);
//       trelloObject.textArea.focus(); 
//       trelloObject.textArea.setAttribute("class", "textArea");
//       trelloObject.newForm.appendChild(trelloObject.boton);
//       trelloObject.boton.setAttribute("class", "boton");
//       trelloObject.boton.innerText = "GUARDAR";
//     });
//     this.listarTarjetasNuevas = this.boton.addEventListener("click", function(e){
//       e.preventDefault();
//       trelloObject.newForm.style.display = "none";
//       trelloObject.newTarjeta.innerText = trelloObject.textArea.value
//       trelloObject.contenedorTarjetas.appendChild(trelloObject.newTarjeta);
//       // trelloObject.contenedorTarjetas.parentElement.appendChild(trelloObject.anadirTarjeta);
//       trelloObject.newTarjeta.setAttribute("class", "newTarjeta");
//       // trelloObject.newTarjeta.setAttribute("id", ids++);
//       // newTarjeta.setAttribute("draggable", "true");
//     });
//   }

//   var trelloObject = new Trello();
 
// });




















// OBJETOS 2

//     // this.anadirLista.addEventListener("click", aparecerForm);
//     // this.botonCreado.addEventListener("click", nombreListaAnadir);
//     // this.anadirTarjeta.addEventListener("click", crearTarjetasNuevas);
//     // this.boton.addEventListener("click", function(e){
//     //   e.preventDefault();
//     //   tarjetasNuevas();
//     // });

//   // function aparecerForm(){
//   //   trelloObject.anadirLista.style.display = "none";
//   //   trelloObject.formCreado.style.display = "inline-block";
//   // }
//   // function nombreListaAnadir(){
//   //   trelloObject.formCreado.style.display = "none";
//   //   trelloObject.nombreLista.setAttribute("id", "nombreLista");
//   //   trelloObject.nombreLista.innerText = trelloObject.inputCreado.value;
//   //   trelloObject.anadirTarjeta.innerText = "añadir tarjetas";
//   //   trelloObject.anadirTarjeta.setAttribute("id", "anadirTarjeta");
//   //   trelloObject.anadirLista.parentElement.appendChild(trelloObject.nombreLista);
//   //   trelloObject.anadirLista.parentElement.appendChild(trelloObject.anadirTarjeta);
//   // }
//   // function crearTarjetasNuevas(){
//   //   trelloObject.anadirTarjeta.style.display = "none";
//   //   trelloObject.anadirTarjeta.parentElement.insertBefore(trelloObject.contenedorTarjetas, trelloObject.anadirTarjeta.parentElement.children[3]);
//   //   trelloObject.contenedorTarjetas.setAttribute("class", "contenedorTarjetas");
//   //   trelloObject.contenedorTarjetas.appendChild(trelloObject.newForm);
//   //   trelloObject.newForm.setAttribute("class", "newForm");
//   //   trelloObject.newForm.appendChild(trelloObject.textArea);
//   //   trelloObject.textArea.focus(); 
//   //   trelloObject.textArea.setAttribute("class", "textArea");
//   //   trelloObject.newForm.appendChild(trelloObject.boton);
//   //   trelloObject.boton.setAttribute("class", "boton");
//   //   trelloObject.boton.innerText = "GUARDAR";
//   // }
//   // function tarjetasNuevas(){
//   //   trelloObject.newForm.style.display = "none";
//   //   trelloObject.newTarjeta.innerText = trelloObject.textArea.value
//   //   trelloObject.contenedorTarjetas.appendChild(trelloObject.newTarjeta);
//   //   trelloObject.contenedorTarjetas.parentElement.appendChild(trelloObject.anadirTarjeta);
//   //   trelloObject.newTarjeta.setAttribute("class", "newTarjeta");
//   //   // trelloObject.newTarjeta.setAttribute("id", ids++);
//   //   // newTarjeta.setAttribute("draggable", "true");
//   // }
