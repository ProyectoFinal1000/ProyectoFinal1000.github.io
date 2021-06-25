"use strict";
var forma = document.getElementById("forma"),
campos = ["raza", "telefono", "email", "adoptado", "fecha"],
salidas = ["salidaNombre", "salidaTelefono", "salidaEmail", "salidaAdoptado", "salidaFecha"];

forma.addEventListener("submit", procesa, false);

function procesa(){
    for (var i = 0, longitud = campos.length; i < longitud; i++) {
    var campo = forma[campos[i]];
    var salida = document.getElementById(salidas[i]);
    salida.value = campo.value;
  }
}