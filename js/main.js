window.addEventListener("load", function() {

    var tarjetas = document.getElementById("tarjetas");
    var span = document.getElementById("span");
    
    span.addEventListener("click", function(e) {
        e.preventDefault();
        creandoTarjetas();
    });

    function creandoTarjetas() {
        span.style.display = "none";

        var formCreado = document.createElement("form");
        tarjetas.insertBefore(formCreado, tarjetas.childNodes[0]);

        var inputCreado = document.createElement("input");
        formCreado.insertBefore(inputCreado, formCreado.childNodes[0]).classList.add("inputCreado");

        var botonCreado = document.createElement("button");
        var texto = document.createTextNode("Guardar");
        botonCreado.appendChild(texto);
        formCreado.insertBefore(botonCreado, formCreado.childNodes[1]).classList.add("botonCreado");

        tarjetas.classList.add("contenedorCreado");
    }
});        