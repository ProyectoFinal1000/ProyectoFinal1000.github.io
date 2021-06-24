"use strict";
var forma = document.getElementById("forma"),
campos = ["nombre", "apellido", "telefono", "email", "adoptado"],
salidas = ["salidaNombre", "salidaApellido", "salidaTelefono", "salidaEmail", "salidaAdoptado"];
forma.addEventListener("submit", procesa, false);
function procesa(){
  for (var i = 0, longitud = campos.length; i < longitud; i++) {
    var campo = forma[campos[i]];
    var salida = document.getElementById(salidas[i]);
    salida.value = campo.value;
  }
}