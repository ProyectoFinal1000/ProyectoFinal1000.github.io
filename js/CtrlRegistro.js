import {
  getAuth
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  tieneRol
} from "./seguridad.js";
import {
  checksRoles,
  guardaUsuario,
  selectPasatiempos
} from "./usuarios.js";

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

/** @param {Event} evt */
async function guarda(evt) {
  const formData =
    new FormData(forma);
  const id = getString(
    formData, "raza").trim();
  await guardaUsuario(evt,
    formData, id);
}
