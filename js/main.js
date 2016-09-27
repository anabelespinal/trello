window.addEventListener("load", function(){
  var contenedor = document.getElementById("contenedor");
  var anadirLista = document.getElementById("anadirLista");
  var formCreado = document.getElementById("formCreado");
  var inputCreado = document.getElementById("inputCreado");
  var botonCreado = document.getElementById("botonCreado");
  var tarjetasContenedor = document.getElementById("tarjetasContenedor");

  anadirLista.addEventListener("click", function(){
    aparecerForm();
  });

  function aparecerForm(){
    anadirLista.style.display = "none";
    formCreado.style.display = "inline-block";
  }

  botonCreado.addEventListener("click", function(){
    formCreado.style.display = "none";
    var nombreLista = document.createElement("span");
    var anadirTarjeta = document.createElement("button");
    nombreLista.innerText = inputCreado.value;
    nombreLista.setAttribute("id", "nombreLista")
    anadirTarjeta.innerText = "añadir tarjetas";
    anadirTarjeta.setAttribute("id", "anadirTarjeta");
    anadirLista.parentElement.appendChild(nombreLista);
    anadirLista.parentElement.appendChild(anadirTarjeta);
    inputCreado.value = "";

    nuevoDiv();
  });


  function nuevoDiv(){
    var newDiv = document.createElement("div");
    contenedor.appendChild(newDiv);
    newDiv.setAttribute("class", "newDiv")
    newDiv.appendChild(anadirLista);
    newDiv.appendChild(formCreado);
    anadirLista.style.display = "inline-block"
  }
});






// var anadirLista = document.getElementById("anadirLista");
// var formCreado = document.getElementById("formCreado");
// var inputCreado = document.getElementById("inputCreado");
// var botonCreado = document.getElementById("botonCreado");
// var nombreLista = document.getElementById("nombreLista");
// var anadirTarjeta = document.getElementById("anadirTarjeta");
// var tarjetaDos = document.getElementById("tarjetaDos");
// var anadirListaLado = document.getElementById("anadirListaLado");
// var formCreadoDos = document.getElementById("formCreadoDos");
// var inputCreadoDos = document.getElementById("inputCreadoDos");
// var botonCreadoDos = document.getElementById("botonCreadoDos");
// var nombreListaDos = document.getElementById("nombreListaDos");
// var anadirTarjetaDos = document.getElementById("anadirTarjetaDos");

// window.addEventListener("load", function(){
//   anadirLista.addEventListener("click", function(){
//     aparecerForm();
//   });
// });

// function aparecerForm(){
//   anadirLista.style.display = "none";
//   formCreado.style.display = "inline-block";
//   aparecerSpan();
// };

// function aparecerSpan(){
//   botonCreado.addEventListener("click", function(){
//     formCreado.style.display = "none";
//     nombreLista.style.display = "block";
//     nombreLista.innerText = inputCreado.value;
//     anadirTarjeta.style.display = "block";
//     anadirListaLeft();
//   });
// };

// function anadirListaLeft(){
//   tarjetaDos.style.display = "inline-block";
//   anadirListaLado.style.display = "inline-block";
//   anadirListaLado.addEventListener("click", function(){
//     aparecerFormDos();
//   });
// };
// function aparecerFormDos(){
//   anadirListaLado.style.display = "none";
//   formCreadoDos.style.display = "inline-block";
//   aparecerSpanDos();
// };
// function aparecerSpanDos(){
//   botonCreadoDos.addEventListener("click", function(){
//     formCreadoDos.style.display = "none";
//     nombreListaDos.style.display = "inline-block";
//     nombreListaDos.innerText = inputCreadoDos.value;
//     anadirTarjetaDos.style.display = "inline-block";
//     anadirListaLeftDos();
//   });
// };
// function anadirListaLeftDos(){
//   anadirListaLado.style.display = "inline-block";
//   anadirListaLado.style.display = "inline-block";
//   anadirListaLado.addEventListener("click", function(){
//     aparecerFormDos();
//   });
// };


//   // function nombreLista(){
//   //   formCreado.style.display = "none";
//   //   nombreLista.style.display = "inline-block";
//   //   nombreLista.innerText = inputCreado.value;
//   // };







// // window.addEventListener("load", function() {
// // var span = document.getElementById("span");
// // var tarjetas = document.getElementById("tarjetas");
// // var seccion = document.getElementById("seccion");
// //  span.addEventListener("click", function() {
// //     tarjetasNuevas(); 
// //   })
// //   function tarjetasNuevas(){
// //     var formCreado = document.createElement("form");
// //     formCreado.setAttribute("id","formularioCreado")
// //     var inputCreado = document.createElement("input");
// //     var botonCreado = document.createElement("button");
// //       function anadirTarjetas(){
// //         span.style.display = "none";

// //         tarjetas.insertBefore(formCreado, tarjetas.childNodes[0]);

// //         inputCreado.placeholder = "añadir una lista...";
// //         formCreado.insertBefore(inputCreado, formCreado.childNodes[0]).classList.add("inputCreado");

// //         var texto = document.createTextNode("Guardar");
// //         botonCreado.appendChild(texto);
// //         formCreado.insertBefore(botonCreado, formCreado.childNodes[1]).classList.add("botonCreado");

// //         tarjetas.classList.add("contenedorCreado");
// //       }

// //       function botonGuardar(){
// //         anadirTarjetas();
// //         botonCreado.addEventListener("click",function(e){
// //           e.preventDefault();
// // // version 2
// //           formCreado.style.display = "none";
// //           var valueTarjetas = inputCreado.value;
// //           var tarjetaNombre = document.createElement("span");
// //           tarjetaNombre.setAttribute("class", "nombreTarjeta");
// //           tarjetas.insertBefore(tarjetaNombre, tarjetas.childNodes[0]);
// //           tarjetaNombre.innerText = valueTarjetas;
// //           var newboton = document.createElement("button");
// //           newboton.innerText = "añadir tarjeta";
// //           newboton.setAttribute("class","buttonDos");
// //           tarjetas.insertBefore(newboton, tarjetas.childNodes[1]);
// //           newtar();  
// //         });
// //           function newtar(){
// //             span.style.display = "inline-block";
// //             contenedorNuevo = document.createElement("div");
// //             // contenedorNuevo.style.cssFloat = "left";
// //             contenedorNuevo.setAttribute("class", "nuevoContenedor");
// //             contenedorNuevo.insertBefore(formCreado, contenedorNuevo.childNodes[0]);
// //             contenedorNuevo.insertBefore(span, contenedorNuevo.childNodes[0]);

// //             inputCreado.placeholder = "añadir una lista...";
// //             formCreado.insertBefore(inputCreado, formCreado.childNodes[0]).classList.add("inputCreado");

// //             var texto = document.createTextNode("Guardar");
// //             botonCreado.appendChild(texto);
// //             formCreado.insertBefore(botonCreado, formCreado.childNodes[1]).classList.add("botonCreado");
// //             seccion.appendChild(contenedorNuevo);
// //             span.addEventListener("click",  function(){
// //               var formHtml = document.getElementById("repeticion");
// //               formHtml.style.display = "inline-block";
// //               // formHtml.style.marginTop = "-10em";
// //             })
// //           }
// // // spanForm.parentNode.insertBefore(newTarjeta,spanForm.previousSibling)
// //       }
// //       botonGuardar();;
// //   };

// // });  