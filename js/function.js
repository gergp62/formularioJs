

var botonAdicionar = document.querySelector(".boton");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar")
    var nombre = form.nombre.value;
    var edad = form.edad.value;
    var dni = form.dni.value;

    var personaTr = document.createElement("tr");
    var nombreTd = document.createElement("td");
    var edadTd = document.createElement("td");
    var dniTd = document.createElement("td");

    nombreTd.textContent = nombre;
    edadTd.textContent = edad;
    dniTd.textContent = dni;

    personaTr.appendChild(nombreTd);
    personaTr.appendChild(edadTd);
    personaTr.appendChild(dniTd);

    console.log(personaTr);

    var tabla = document.querySelector(".tabla");
    tabla.appendChild(personaTr);
    form.reset();

})