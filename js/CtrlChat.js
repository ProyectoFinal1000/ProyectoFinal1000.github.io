import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  cod,
  getString,
  muestraError
} from "../lib/util.js";
import {
  tieneRol
} from "./seguridad.js";

const daoMensaje = getFirestore().
  collection("Mensaje");
let usuarioId = "";
/** @type {HTMLFormElement} */
const forma = document["forma"];
/** @type {HTMLUListElement} */
const lista = document.
  querySelector("#lista");

getAuth().onAuthStateChanged(
  protege, muestraError);


async function protege(usuario) {
  if (tieneRol(usuario,
    ["Cliente"])) {
    usuarioId = usuario.email;
    consulta();
    forma.addEventListener(
      "submit", agrega);
  }
}


async function agrega(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
    /** @type {string} */
    const texto = getString(
      formData, "texto").trim();
    const timestamp =
      // @ts-ignore
      firebase.firestore.
        FieldValue.
        serverTimestamp();
    /** @type {import(
        "./tipos.js").Mensaje} */
    const modelo = {
      usuarioId,
      texto,
      timestamp
    };

    await daoMensaje.add(modelo);
    forma.texto.value = "";
  } catch (e) {
    muestraError(e);
  }
}


function consulta() {

  daoMensaje.
    orderBy("timestamp", "desc").
    onSnapshot(
      htmlLista, errConsulta);
}


function htmlLista(snap) {
  let html = "";
  if (snap.size > 0) {
  
    snap.forEach(doc =>
      html += htmlFila(doc));
  } else {

    html += /* html */
      `<li class="vacio">
        -- No hay mensajes
        registrados. --
      </li>`;
  }
  lista.innerHTML = html;
}


function htmlFila(doc) {
 
  const data = doc.data();

  return ( /* html */
    `<li class="fila">
      <strong class="primario">
        ${cod(data.usuarioId)}
      </strong>
      <span class="secundario">
        ${cod(data.texto)}
      </span>
    </li>`);
}


function errConsulta(e) {
  muestraError(e);
  // Intenta conectarse otra vez.
  consulta();
}

