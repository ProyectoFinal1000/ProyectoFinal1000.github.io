"use strict";
var forma = document.getElementById("forma"),
txtFecha = forma["fecha"],
campos = ["nombre", "apellido", "telefono", "email", "adoptado"],
salidaFecha = document.getElementById("salidaFecha"),
salidas = ["salidaNombre", "salidaApellido", "salidaTelefono", "salidaEmail", "salidaAdoptado"];

forma.addEventListener("submit", procesa, false);

function procesa(){
    var fechaValueAsDate = txtFecha.valueAsDate,
    fecha = new Date(txtFecha.value),
    for (var i = 0, longitud = campos.length; i < longitud; i++) {
    var campo = forma[campos[i]];
    var salida = document.getElementById(salidas[i]);
    salida.value = campo.value;
    salidaFecha.textContent = txtFecha.type + " | "+txtFecha.value + "|"
    +fecha.toGMTString() +
    (fechaValueAsDate ? "|valueAsDate: "+fechaValueAsDate.toGMTString(): "");
  }
}